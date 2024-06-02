"use client";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import UpdateForm from "@components/UpdateForm";

import Form from "@components/Form";

const UpdatePrompt = () => {
  return (
    <Suspense>
      <UpdateForm />
    </Suspense>
  );
};

export default UpdatePrompt;
