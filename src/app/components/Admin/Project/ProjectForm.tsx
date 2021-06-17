import { useState } from "react";
import { createAdminData, updateAdminData } from "services/api/adminApi";
import Images from "../Images/Images";
import { slides } from "../../../img/";
import { IProject, ITechnology } from "../types";
import * as Styled from "../Form.styles";
import CountryCodes from "./../Testimonial/countyCodes.json";
import { useInput } from "../Hooks";

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

  const countryKeys = Object.keys(CountryCodes);

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
      ? updateAdminData("project", project.id, newProject).then(() => close())
      : createAdminData("project", newProject).then(() => close());
  };

  const getImageId = (id) => {
    setImageFile(id);
  };

  const handleTechChange = (event, id) => {
    if (event.target.checked) {
      setTechnologyIds([...technologyIds, id]);
    }
    if (!event.target.checked) {
      setTechnologyIds(technologyIds.filter((tech) => tech !== id));
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {project ? <h2>Edit Project</h2> : <h2>Create new project</h2>}
        <Styled.Label>
          <span>Project Name:</span>
          <Styled.AdminTextInput
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
            placeholder="Write name here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Full Description:</span>
          <Styled.AdminTextArea
            value={fullDescription}
            onChange={({ target: { value } }) => setFullDescription(value)}
            placeholder="Write a pair of sentences here"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Short Description:</span>
          <Styled.AdminTextArea
            value={shortDescription}
            onChange={({ target: { value } }) => setShortDescription(value)}
            placeholder="Write a pair of words"
          />
        </Styled.Label>
        <Styled.Label>
          <span>Country Code:</span>
          <Styled.Select
            className="form__title"
            {...countryCode}
            onChange={countryCode.onChange}
            placeholder="Write country code here"
          >
            {countryKeys.map((codeValue) => {
              return (
                <option
                  selected={codeValue === countryCode.value}
                  value={codeValue}
                  key={codeValue}
                >
                  {CountryCodes[codeValue]}
                </option>
              );
            })}
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

        <>
          <Styled.Row>
            {technologies.map((tech) => (
              <Styled.CheckboxContainer>
                <div>{tech.name}</div>
                <Styled.CheckboxLabel>
                  <input
                    type="checkbox"
                    name="TechOption"
                    checked={technologyIds.some((el) => el === tech.id)}
                    onChange={(event) => handleTechChange(event, tech.id)}
                  />
                  <Styled.CustomCheckbox
                    selected={technologyIds.some((el) => el === tech.id)}
                  >
                    <img src={slides.Check} alt="checkbox" />
                  </Styled.CustomCheckbox>
                </Styled.CheckboxLabel>
              </Styled.CheckboxContainer>
            ))}
          </Styled.Row>
        </>
        <Styled.PicturesWrapper>
          <span>Pictures:</span>
          <Images activeImage={project?.imageFile} getImageId={getImageId} />
        </Styled.PicturesWrapper>
        <Styled.CheckboxContainer>
          <div>Show on page:</div>
          <Styled.CheckboxLabel>
            <input
              type="checkbox"
              checked={showOnHomePage}
              onChange={({ target: { checked } }) => setShowOnHomePage(checked)}
            />
            <Styled.CustomCheckbox selected={showOnHomePage}>
              <img src={slides.Check} alt="checkbox" />
            </Styled.CustomCheckbox>
          </Styled.CheckboxLabel>
        </Styled.CheckboxContainer>
        <Styled.ButtonWrapper>
          <Styled.Button
            type="submit"
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
            Save Changes
          </Styled.Button>
          <Styled.Button type="button" onClick={() => close()}>
            Cancel
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default ProjectForm;
