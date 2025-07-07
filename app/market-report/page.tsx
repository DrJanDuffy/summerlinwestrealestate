"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function MarketReportRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the canonical URL
    router.replace("/market-reports");
  }, [router]);

  return (
    <>
      <Head>
        <title>Redirecting to Market Reports | Summerlin West Real Estate</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://summerlinwestrealestate.com/market-reports" />
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Redirecting...</h1>
          <p>You are being redirected to the market reports page.</p>
          <p><a href="/market-reports" style={{ color: '#3A8DDE', textDecoration: 'underline' }}>
            Click here if you are not redirected automatically
          </a></p>
        </div>
      </div>
    </>
  );
}
