import React from "react";
import * as Styles from "../../styles/Services";
import { Subtitle } from "../../styles/MobileService/Layout";
import { SplitBrackets } from "../../utils/splitBrackets";
import { IDomain } from "../../types/Admin/Response.types";
import Image from "next/image";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const NeedsAppsBenefitComponent = ({ data }: { data: any }) => {
  return (
    <Styles.WhoNeedContainer>
      <MobileInfiniteText withoutMargin title={data.whoNeedApps.subtitle} />
      <Styles.WhoNeedAppsBlocks>
        <Subtitle className="needDomain">{data.whoNeedApps.subtitle}</Subtitle>
        <Styles.WhoNeedSubText>
          <SplitBrackets text={data.whoNeedApps.text} />
        </Styles.WhoNeedSubText>
      </Styles.WhoNeedAppsBlocks>
      <Styles.WhoNeedAppsBlockImageContainer>
        {data.domains.map((domain: IDomain) => (
          <Styles.WhoNeedAppsBlockImageCard key={`${domain._id}`}>
            {domain.image?.url && (
              <Image
                src={domain.image?.url}
                height={28}
                width={28}
                alt="domain image"
              />
            )}
            <span>{domain.name}</span>
          </Styles.WhoNeedAppsBlockImageCard>
        ))}
      </Styles.WhoNeedAppsBlockImageContainer>
    </Styles.WhoNeedContainer>
  );
};

export default NeedsAppsBenefitComponent;
