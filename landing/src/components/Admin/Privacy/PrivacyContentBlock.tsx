import React from "react";
import { AdminBlocksContent, MetaBlockWraper } from "../../../styles/AdminPage";
import MetaTagsBlock from "../MetaTagsBlock";
import IntroBlock from "./IntroBlock";
import QuestionBlock from "./QuestionBlock";

const PrivacyContentBlock = () => {
  return (
    <div>
      <AdminBlocksContent>
        <IntroBlock />
        <QuestionBlock />
      </AdminBlocksContent>
      <MetaBlockWraper>
        <MetaTagsBlock sitemap="privacy-policy" />
      </MetaBlockWraper>
    </div>
  );
};

export default PrivacyContentBlock;
