import { useFormikContext } from "formik";
import React from "react";
import { PodcastGrid, PodcastWrapper } from "../../../../styles/AdminBlogPage";
import { AdminBlocksContent, AdminInput } from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import { IBlogPageResponse } from "../../../../types/Admin/Response.types";
import ButtonArrow from "../../../../utils/ButtonArrow";
import AdminBlockDropDown from "../AdminBlockDropDown";
import SubHeaderWithInput from "../SubHeaderWithInput";

const PodcastForm = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IBlogPageResponse>();

  return (
    <AdminBlocksContent>
      <AdminBlockDropDown title="Podcast">
        <PodcastWrapper>
          <PodcastGrid>
            <div>
              <SubHeaderWithInput
                inputValue={values.podcast.subtitle}
                name="podcast.subtitle"
                onChangeFunction={handleChange}
                header="Subtitle"
                placeholder="subtitle"
              />
              <AdminInput
                value={values.podcast.text}
                name="podcast.text"
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            <div>
              <SubHeaderWithInput
                inputValue={values.podcast.link}
                name="podcast.link"
                onChangeFunction={handleChange}
                header="Download track"
              />
            </div>
          </PodcastGrid>
          <BlackButton
            type="submit"
            size={"1.5em"}
            padding={"1em 3.25em"}
            onClick={() => handleSubmit()}
          >
            Save changes
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </BlackButton>
        </PodcastWrapper>
      </AdminBlockDropDown>
    </AdminBlocksContent>
  );
};

export default PodcastForm;
