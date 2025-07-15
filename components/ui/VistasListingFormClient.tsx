"use client";
import dynamic from "next/dynamic";
const VistasListingForm = dynamic(() => import("./VistasListingForm"), {
  ssr: false,
});
export default function VistasListingFormClient(props: any) {
  return <VistasListingForm {...props} />;
}
