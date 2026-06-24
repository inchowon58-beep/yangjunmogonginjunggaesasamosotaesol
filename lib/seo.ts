export const siteUrl = "https://yangjunmogonginjunggaesasamosotaesol.vercel.app";

export const targetKeywords = ['양준모공인중개사사모소태솔', '제주공인중개사', '서귀포부동산', '제주부동산매매', '서귀포토지매매', '서귀포주택임대'] as const;

export const siteTitle = "양준모공인중개사사모소태솔: 제주 서귀포 부동산의 현명한 선택";

export const siteDescription =
  "양준모공인중개사사모소태솔은 제주 서귀포 지역의 토지, 주택, 상가 등 모든 부동산 거래를 정직하고 전문적으로 중개합니다. 믿을 수 있는 파트너를 만나보세요.";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "양준모공인중개사사모소태솔",
        description: siteDescription,
        inLanguage: "ko-KR",
        telephone: "010-9049-4064",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
