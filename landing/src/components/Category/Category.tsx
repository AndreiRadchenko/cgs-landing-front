import React, { FC } from "react";
import * as StyledThisComp from "./Category.styled";
import ImagePreview from "../Image/ImagePreview";

interface ICategoryProps {
  title: string;
  description: string;
  url: any;
  onOpenModalHandler: (categoryName: string) => void;
}

const Category: FC<ICategoryProps> = ({
  title,
  description,
  url,
  onOpenModalHandler,
}) => {
  const openCurrentCategoryHandler = () => title && onOpenModalHandler(title);

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
            <ImagePreview
              src={url}
              height={75}
              width={75}
              alt={`icon alt ${title} specialization`}
            />
          </StyledThisComp.IconWrapperSpecialization>
        )}
      </StyledThisComp.WrapperDescription>
    </StyledThisComp.CategoryContainer>
  );
};

export default Category;
