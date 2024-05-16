"use client";

import UpdatePrompt from "@/components/UpdatePrompt";
import React, { Suspense } from "react";

const Page: React.FC = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default Page;
