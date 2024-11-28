"use client";

import RequestReviewForm from "@/components/request/review/requestReviewForm";
import PageHeader from "@/components/pageHeader";
const RequestReview = ({}) => {
  return (
    <div className="m-auto max-w p-10">
      <PageHeader title="리뷰 요청" />
      <RequestReviewForm />
    </div>
  );
};

export default RequestReview;