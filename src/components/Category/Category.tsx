import React, { FC } from "react";
import * as StyledThisComp from "./Category.styled";
import Image from "next/image";

interface ICategoryProps {
  title: string;
  description: string;
  url: string;
  onOpenModalHandler: (categoryName: string) => void;
}

const Category: FC<ICategoryProps> = ({
  title,
  description,
  url,
  onOpenModalHandler,
}) => {
  const openCurrentCategoryHandler = () => onOpenModalHandler(title);

  return (
    <StyledThisComp.CategoryContainer onClick={openCurrentCategoryHandler}>
      <StyledThisComp.WrapperDescription>
        <StyledThisComp.TitleSpecialization>
          {title}
        </StyledThisComp.TitleSpecialization>

        <StyledThisComp.DescriptionSpecialization>
          {description}
        </StyledThisComp.DescriptionSpecialization>

        {url && (
          <StyledThisComp.IconWrapperSpecialization>
            <Image src={url} alt={`icon alt ${title} specialization`} />
          </StyledThisComp.IconWrapperSpecialization>
        )}
      </StyledThisComp.WrapperDescription>
    </StyledThisComp.CategoryContainer>
  );
};

export default Category;
