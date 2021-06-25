import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { slides } from "../../../img/";
import { IProject, ITechnology } from "../types";
import * as Styled from "../Form.styles";
import { useInput } from "../Hooks";

import countryCodes from "../../../../consts/countyCodes.json";

const ProjectForm: React.FC<{
  project?: IProject | undefined;
  close: Function;
  technologies: ITechnology[];
}> = ({ project, close, technologies }) => {
  const [name, setName] = useState(project?.name || "");

  const [fullDescription, setFullDescription] = useState(
    project?.fullDescription || ""
  );
  const [shortDescription, setShortDescription] = useState(
    project?.shortDescription || ""
  );

  const countryCode = useInput(project?.countryCode || "GB");

  const [link, setLink] = useState(project?.link || "");

  const [showOnHomePage, setShowOnHomePage] = useState(
    project?.showOnHomePage || false
  );

  const [imageFile, setImageFile] = useState(project?.imageFile?.id || "");

  const [technologyIds, setTechnologyIds] = useState(
    project?.technologies?.map((tech) => tech.id) || []
  );

  const closeWindow = () => close();

  const countryKeys = Object.keys(countryCodes);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProject = {
      name,
      fullDescription,
      shortDescription,
      countryCode: countryCode.value,
      link,
      showOnHomePage,
      imageFileId: imageFile,
      technologyIds,
    };

    project
      ? updateAdminData("project", project.id, newProject).then(closeWindow)
      : createAdminData("project", newProject).then(closeWindow);
  };

  const getImageId = (id) => {
    setImageFile(id);
  };

  const handleTechChange = (event, id) => {
    if (event.target.checked) {
      setTechnologyIds([...technologyIds, id]);
    }
    if (!event.target.checked) {
      setTechnologyIds(technologyIds?.filter((tech) => tech !== id));
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {project ? <h2>Edit Project</h2> : <h2>Create new project</h2>}
        <Styled.Label>
          <span>Name:</span>
          <Styled.AdminTextInput
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="Write name here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Short Description:</span>
          <Styled.AdminTextAreaWrapper>
            <Styled.AdminTextArea
              value={shortDescription}
              onChange={({ target: { value } }) => setShortDescription(value)}
              placeholder="Write a pair of words"
            />
          </Styled.AdminTextAreaWrapper>
        </Styled.Label>
        <Styled.Label>
          <span>Full Description:</span>
          <Styled.AdminTextAreaWrapper>
            <Styled.AdminTextArea
              value={fullDescription}
              onChange={({ target: { value } }) => setFullDescription(value)}
              placeholder="Write a pair of sentences here"
            />
          </Styled.AdminTextAreaWrapper>
        </Styled.Label>
        <Styled.Label>
          <span>Country Code:</span>
          <Styled.Select
            className="form__title"
            value={countryCode.value}
            placeholder="Write country code here"
            onChange={countryCode.onChange}
          >
            {countryKeys?.map((codeValue) => (
              <option
                key={codeValue}
                value={codeValue}
                selected={codeValue === countryCode.value}
              >
                {countryCodes[codeValue]}
              </option>
            ))}
            )
          </Styled.Select>
        </Styled.Label>
        <Styled.Label>
          <span>Link:</span>
          <Styled.AdminTextInput
            type="text"
            value={link}
            onChange={({ target: { value } }) => setLink(value)}
            placeholder="Put link here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Technologies:</span>
          <Styled.WrapperGrid>
            <Styled.Row>
              {technologies.map((tech) => (
                <Styled.CheckboxContainer>
                  <div>{tech.name}</div>
                  <Styled.CheckboxLabel>
                    <input
                      type="checkbox"
                      name="TechOption"
                      checked={technologyIds.some((el) => el === tech?.id)}
                      onChange={(event) => handleTechChange(event, tech.id)}
                    />
                    <Styled.CustomCheckbox
                      selected={technologyIds.some((el) => el === tech?.id)}
                    >
                      <img src={slides?.Check} alt="checkbox" />
                    </Styled.CustomCheckbox>
                  </Styled.CheckboxLabel>
                </Styled.CheckboxContainer>
              ))}
            </Styled.Row>
          </Styled.WrapperGrid>
        </Styled.Label>
        <Styled.Label>
          <span>Pictures:</span>
          <Images activeImage={project?.imageFile} getImageId={getImageId} />
        </Styled.Label>
        <Styled.Label>
          <span>Show on page:</span>
          <Styled.SingleCheckboxContainer>
            <Styled.CheckboxLabel position="static">
              <input
                type="checkbox"
                checked={showOnHomePage}
                onChange={({ target: { checked } }) =>
                  setShowOnHomePage(checked)
                }
              />
              <Styled.CustomCheckbox selected={showOnHomePage}>
                <img src={slides.Check} alt="checkbox" />
              </Styled.CustomCheckbox>
            </Styled.CheckboxLabel>
          </Styled.SingleCheckboxContainer>
        </Styled.Label>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
            empty={true}
            disabled={
              !(
                name &&
                fullDescription &&
                shortDescription &&
                countryCode &&
                link &&
                imageFile
              )
            }
          >
            {project ? "Save" : "Create"}
          </Styled.Button>
          <Styled.Button type="button" onClick={closeWindow}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default ProjectForm;
