"use client";

import { Button } from "@/components/ui/button";
import { deleteMentor } from "@/services/getMentorList";
import { getUserInfo } from "@/services/getUserInfo";
import { TUserInfo } from "@/types/userTypes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  mentorId: string;
  nickName: string;
};

const ChatButton = ({ nickName, id, mentorId }: Props) => {
  const router = useRouter();
  const [isDelete, setIsDelete] = useState(false);
  const [userInfo, setUserInfo] = useState<TUserInfo | null>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    await deleteMentor(mentorId);
    window.location.reload();
  };

  if (userInfo?.nickname === nickName) {
    return (
      <Button className="mt-4 w-full text-white" type="submit" onClick={handleClick}>
        삭제하기
      </Button>
    );
  } else {
    return (
      <div className="flex gap-2">
        <Button
          className="mt-4 w-full text-white"
          type="submit"
          onClick={() => router.push(`/request/livefeedback/${id}`)}
        >
          라이브 피드백 요청하기
        </Button>
        <Button className="mt-4 w-full text-white" type="submit" onClick={() => router.push(`/chat?opponentId=${id}`)}>
          1:1 채팅하기
        </Button>
      </div>
    );
  }
};
export { ChatButton };
