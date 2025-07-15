"use client";
import dynamic from "next/dynamic";
const LeadCaptureForm = dynamic(() => import("./LeadCaptureForm"), {
  ssr: false,
});

export default function LeadCaptureFormClient(props: any) {
  return <LeadCaptureForm {...props} />;
}
