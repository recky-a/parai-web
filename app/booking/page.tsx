"use client";

import { Suspense } from "react";
import BookingContent from "./_content";

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
