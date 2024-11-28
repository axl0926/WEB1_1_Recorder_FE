"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import SearchInput from "@/components/questions/searchInput";
import SearchSelect from "@/components/questions/searchSelect";
import SearchFillter from "@/components/questions/searchfillter";

type Props = {};

const SearchBox = ({}: Props) => {
  const [input, setInput] = useState("");
  const techStackList = ["전체", "typescript", "react", "javsscript", "nextjs", "java", "lua", "go", "ruby"];
  const [techStack, setTechStack] = useState("기술 스택");
  const sortTypeList = ["최신순", "인기순"];
  const [sortType, setSortType] = useState("최신순");
  const fillterList = ["전체", "해결됨", "미해결"];
  const [fillter, setFillter] = useState("전체");

  return (
    <Card className="p-4">
      <div className="m-auto md:w-2/3 lg:w-1/2">
        <SearchInput state={input} setState={setInput} />
        <div className="mt-2 flex justify-between">
          <SearchFillter fillterList={fillterList} state={fillter} setState={setFillter} />
          <div className="flex gap-2">
            <SearchSelect
              className="w-32"
              placeholder="기술 스택을 입력해보세요."
              state={techStack}
              setState={setTechStack}
              fillterList={techStackList}
            />
            <SearchSelect className="w-24" state={sortType} setState={setSortType} fillterList={sortTypeList} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchBox;