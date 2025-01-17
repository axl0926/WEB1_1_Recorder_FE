"use client";

import { Button } from "@/components/ui/button";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useAuthStore } from "@/store/authStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import getMyInfo from "@/services/getMyInfo";
import { useQuery } from "@tanstack/react-query";
import { PiChatCenteredTextThin } from "react-icons/pi";
type Props = {};

const UserMenu = ({}: Props) => {
  const { isLogin, checkAuth } = useAuthStore();
  const pathname = usePathname();
  const { data } = useQuery({ queryKey: ["getMyInfo"], queryFn: getMyInfo });
  useEffect(() => {
    checkAuth();
  }, [checkAuth, pathname]);

  return (
    <>
      {isLogin ? (
        data && (
          <div className="flex items-center gap-4">
            <Link href="/chat">
              <PiChatCenteredTextThin size={30} className="cursor-pointer" />
            </Link>
            <Link className="flex items-center gap-2" href="/myPage">
              <Avatar>
                <AvatarImage src={data.result.profileImage}></AvatarImage>
              </Avatar>
              <div>{data.result.nickname}</div>
            </Link>
          </div>
        )
      ) : (
        <Link href="/login" className="flex items-center">
          <Button variant="outline">로그인</Button>
        </Link>
      )}
    </>
  );
};

export default UserMenu;
