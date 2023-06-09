import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";
import HeaderNavNew from "../../components/HeaderNavNew/HeaderNavNew";
import React, { useEffect, useState } from "react";
import FooterNew from "../../components/FooterNew/FooterNew";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import * as Styled from "../../styles/DappAuditService/Common.styled";
import HeadBlock from "../../components/DappAuditService/HeadBlock";
import FigureOutBlock from "../../components/DappAuditService/FigureOutBlock";
import HowDoProvideBlock from "../../components/DappAuditService/HowDoProvideBlock";
import ShowCase from "../../components/ShowCase";
import FooterBlock from "../../components/DappAuditService/FooterBlock";
import CalendlyInfoModal from "../../components/Calendly/CalendlyInfoModal";
import PerksOfCoopComponent from "../../components/Services/PerksOfCoopComponent";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DappAuditPage: NextPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());
  const [isCalendlySuccessfull, setIsCalendlySuccessfull] = useState(false);
  const customHead = `
  <script type=“application/ld+json”>
  [{
    “@context”: “https://schema.org/”,
    “@graph”: [{
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Crypto & Blockchain Development”,
      “url”: “https://cgsteam.io/services/blockchain”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Web & Desktop Development”,
      “url”: “https://cgsteam.io/services/web-development”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Mobile Development”,
      “url”: “https://cgsteam.io/services/mobile-app-development”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Cloud Solutions”,
      “url”: “https://cgsteam.io/services/cloud-solutions”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “AI”,
      “url”: “https://cgsteam.io/services/ai”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “IT Support Services”,
      “url”: “https://cgsteam.io/services/it-support”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Database & Server Solutions”,
      “url”: “https://cgsteam.io/services/database-and-server-solutions”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “UX/UI Design”,
      “url”: “https://cgsteam.io/services/ux-ui-design”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Web Audit”,
      “url”: “https://cgsteam.io/services/web-audit”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Mobile App Audit”,
      “url”: “https://cgsteam.io/services/mobile-audit”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “DAPP Audit // Tokenomic Planning”,
      “url”: “https://cgsteam.io/services/smart-contract-audit”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Portfolio”,
      “url”: “https://cgsteam.io/portfolio”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Blog”,
      “url”: “https://cgsteam.io/blog”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “About Us”,
      “url”: “https://cgsteam.io/about-us”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “Careers”,
      “url”: “https://cgsteam.io/careers”
    }, {
      “@context”: “https://schema.org/”,
      “@type”: “SiteNavigationElement”,
      “@id”: “https://cgsteam.io/#Menu”,
      “name”: “FAQ”,
      “url”: “https://cgsteam.io/faq”
    }]
  },
  {
  “@context”: “http://schema.org”,
  “@type”: “Service”,
  “name”: “Smart Contract Audit | dApp Audit | CGS-team”,
  “description”: “Dapp Audit performed by CGS-team includes automation tests, penetration tests, smart contract audits and more; secure your dapp with CGS-team”,
 “image”:“https://landing-cgs.s3.amazonaws.com/68e2d183-35ef-4ce9-9467-0af327958123.svg”
 },
\t
\t{
    “@context”: “https://schema.org/”,
    “@type”: “BreadcrumbList”,
    “@id”: “https://cgsteam.io/services/smart-contract-audit/#breadcrumb”,
    “itemListElement”: [{
      “@type”: “ListItem”,
      “position”: 1,
      “item”: {
        “@id”: “https://cgsteam.io”,
        “name”: “CGS-team”
      }
    }, {
      “@type”: “ListItem”,
      “position”: 2,
      “item”: {
        “@id”: “https://cgsteam.io/services/smart-contract-audit”,
        “name”: “dApp Audit / Tokenomic Planning”
      }
    },
\t\t
\t\t {
      “@type”: “ListItem”,
      “position”: 3,
      “item”: {
        “@id”: “https://cgsteam.io/blog/ai-trends-of-2023”,
        “name”: “AI Trends of 2023”
      }
    },
\t\t
\t\t {
      “@type”: “ListItem”,
      “position”: 4,
      “item”: {
        “@id”: “https://cgsteam.io/blog/machine-learning-operations-the-rise”,
        “name”: “Machine Learning Operations: The Rise”
      }
    },
\t\t
\t\t{
      “@type”: “ListItem”,
      “position”: 5,
      “item”: {
        “@id”: “https://cgsteam.io/blog/cross-platform-or-native-app-development”,
        “name”: “What to Choose in 2023: Cross-platform or Native App Development?”
      }
    }]
  },
\t
  {
“@context”: “https://schema.org”,
“@graph”: [ {
“@type”: “Organization”,
“@id”: “https://cgsteam.io/#Organization”,
“url”: “https://cgsteam.io”,
“sameAs”: [ “https://github.com/CodeGeneration-2020/”, “https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/”, “https://clutch.co/profile/code-generation#summary”, “https://ua.linkedin.com/company/cgs-team” ],
“name”: “CGS - team”,
“contactPoint” :
  { “@type” : “ContactPoint”,
   “email”: “contact@cgsteam.io”
 },
“logo”: [ {
“@type”: “ImageObject”,
“@id”: “https://cgsteam.io”,
“inLanguage”: “en-US”,
“url”: “https://cgsteam.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewHeaderLogo.2166f867.svg&w=256&q=75”,
“width”: 200,
“height”: 41,
“caption”: “CGS - team”
 } ],
“slogan”: “Bug-free code, juicy architecture, codebase optimization, up-to-date maintenance, clear communication, and fluent English rolled into one. Imagined that? See it for real with CGS-team!“,
“legalName”: “CGS - team”
} ] }
  ]
  </script>
  <meta property="og:url" content="https://cgsteam.io/services/smart-contract-audit" />
<meta property="og:image" content="https://d2qrnmx3qcgrup.cloudfront.net/68e2d183-35ef-4ce9-9467-0af327958123.svg" />
<meta property="og:image" content="image-180x110.jpg " /> <!-- 180x110 Image for Linkedin -->
<meta property="og:image:width" content="180" />
<meta property="og:image:height" content="110" />
<meta property="og:image" content="image-600x315.jpg " /> <!-- 600x315 Image for Facebook -->
<meta property="og:image:width" content="600" />
<meta property="og:image:height" content="314" />

<meta property="og:site_name" content="https://cgsteam.io/services/smart-contract-audit">

<meta name="twitter:image" content="https://d2qrnmx3qcgrup.cloudfront.net/68e2d183-35ef-4ce9-9467-0af327958123.svg" />
<meta name="twitter:card" content="website" />
<meta name="twitter:site" content="@code_generation" />
<meta name="twitter:creator" content="@code_generation" />
<meta name="twitter:title" content="Smart Contract Audit | dApp Audit | CGS-team" />
<meta name="twitter:description"
    content="Dapp Audit performed by CGS-team includes automation tests, penetration tests, smart contract audits and more; secure your dapp with CGS-team" />
  `;

  const dataWorth = {
    subtitle: "Why it’s worth it?",
    mobility: {
      subtitle: "Optimize performance",
      text: "Our specialists run a deep check to make sure your dapp's lightning-fast performance and speedy efficiency.",
    },
    collaboration: {
      subtitle: "Cost-prevention",
      text: "With dapp audit, you're not spending but saving. CGS-team deeply checks every aspect of your dapp and prevents hacks and leaks.",
    },
    dataSecurity: {
      subtitle: "Reliable security",
      text: "You can sleep calmly, knowing all the sensitive info and critical data is safe and secure. We check every dot to be completely sure.",
    },
  };

  useEffect(() => {
    const calendlyStatusFinder = (e: any) => {
      window.dataLayer = window.dataLayer || [];

      if (
        e.data.event &&
        e.data.event.indexOf("calendly") === 0 &&
        e.data.event === "calendly.event_scheduled"
      ) {
        setIsCalendlySuccessfull(true);
      }
    };

    window.addEventListener("message", calendlyStatusFinder);

    return () => {
      window.removeEventListener("message", calendlyStatusFinder);
    };
  }, []);

  return (
    <>
      {isCalendlySuccessfull && (
        <CalendlyInfoModal
          isOpen={isCalendlySuccessfull}
          setIsCalendlySuccessfull={setIsCalendlySuccessfull}
        />
      )}
      <Head>
        <title>Smart Contract Audit | dApp Audit | CGS-team</title>
        <meta
          name="description"
          content="Dapp Audit performed by CGS-team includes automation tests, penetration tests, smart contract audits and more; secure your dapp with CGS-team"
        />
        {customHead && parse(customHead)}
      </Head>
      <HeaderNavNew />
      <PageArticle>
        <Layout>
          <Styled.Layout>
            <HeadBlock />
            <FigureOutBlock />
            <PerksOfCoopComponent data={dataWorth} />
            <HowDoProvideBlock />
          </Styled.Layout>
        </Layout>
        <Layout>
          <Styled.Layout>
            <FooterBlock />
          </Styled.Layout>
        </Layout>
      </PageArticle>
      <FooterNew />
    </>
  );
};

export default DappAuditPage;
