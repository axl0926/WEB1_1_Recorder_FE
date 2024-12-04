import { z } from "zod";
import { reviewFormSchema, answerFormSchema } from "@/lib/formSchema";

export type ReviewFormSchema = z.infer<typeof reviewFormSchema>;
export type AnswerFormSchema = z.infer<typeof answerFormSchema>;
export type ResponseReviewList = {
  message: string;
  result: {
    content: ReviewItem[];
    currentPage: number;
    size: number;
    startPage: number;
    endPage: number;
    prev: boolean;
    next: boolean;
  };
};

export type ResponseRecentAndPopularReviewList = Pick<ResponseReviewList, "message"> & {
  result: Pick<ResponseReviewList["result"], "content">;
};

export type ReviewItem = {
  id: number;
  writer: string;
  writerImage?: string;
  title: string;
  content?: string;
  createdAt: string;
  answerCount: number;
  readCount: number;
  stacks: string[];
};

type Code = {
  name: string;
  content: string;
};

export type TAnswer = {
  id: number;
  content: string;
  code: string;
  writer: string;
  profileImage: string | null;
  totalAnswerCount: number;
  adoptedRate: number;
  createdAt: string;
  isAccept: boolean;
  goodCount: number;
  badCount: number;
};

export type TReviewDetail = {
  id: number;
  writer: string;
  profileImage: string | null;
  title: string;
  createdAt: string;
  answerCount: number;
  readCount: number;
  githubLink: string;
  stacks: string[];
  codes: Code[];
  content: string;
};
