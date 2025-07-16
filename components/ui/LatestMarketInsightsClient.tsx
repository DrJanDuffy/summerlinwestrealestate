"use client";
import dynamic from "next/dynamic";
const LatestMarketInsights = dynamic(() => import("./LatestMarketInsights"), {
  ssr: false,
});

export default function LatestMarketInsightsClient(props: unknown) {
  return <LatestMarketInsights {...props} />;
}
