import type { Metadata } from "next";
import {
  getStructuredData,
  siteDescription,
  siteTitle,
  siteUrl,
  targetKeywords,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yangjunmogonginjunggaesasamosotaesol.vercel.app"),
  title: {
    default: siteTitle,
    template: "%s | 일산강아지파양",
  },
  description: "양준모공인중개사사모소태솔은 제주 서귀포 지역의 토지, 주택, 상가 등 모든 부동산 거래를 정직하고 전문적으로 중개합니다. 믿을 수 있는 파트너를 만나보세요.",
  keywords: [...targetKeywords, "일산 강아지 파양", "일산 유기견", "아가펫"],
  authors: [{ name: "아가펫" }],
  creator: "아가펫",
  publisher: "아가펫",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "일산강아지파양 · 일산유기견보호소 안내",
    title: "양준모공인중개사사모소태솔: 제주 서귀포 부동산의 현명한 선택",
    description: siteDescription,
    images: [
      {
        url: "/images/shelter-01.png",
        width: 1200,
        height: 630,
        alt: "일산강아지파양·일산유기견보호소 보호소 전경",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/shelter-01.png"],
  },
  alternates: {
    canonical: "https://yangjunmogonginjunggaesasamosotaesol.vercel.app",
  },
  category: "반려동물",
  verification: {
    other: {
      "naver-site-verification": "5157c07b2ad7cc5a01547456eb2dc3b62555b8d9",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getStructuredData();

  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans pb-safe-floating lg:pb-0">{children}</body>
    </html>
  );
}
