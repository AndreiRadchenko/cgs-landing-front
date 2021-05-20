import { useState } from 'react';
import { createAdminData, updateAdminData } from 'services/api/adminApi';
import Images from '../Images/Images';

import { IProject, ITechnology } from '../types';
import * as Styled from '../Form.styles';

const ProjectForm: React.FC<{
  project?: IProject | undefined;
  close: Function;
  technologies: ITechnology[];
}> = ({ project, close, technologies }) => {
  const [name, setName] = useState(project?.name || '');
  const [fullDescription, setFullDescription] = useState(
    project?.fullDescription || ''
  );
  const [shortDescription, setShortDescription] = useState(
    project?.shortDescription || ''
  );
  const [countryCode, setCountryCode] = useState(project?.countryCode || '');
  const [link, setLink] = useState(project?.link || '');
  const [showOnPage, setshowOnPage] = useState(
    project?.showOnHomePage || false
  );
  const [imageFile, setImageFile] = useState(project?.imageFile.id || '');
  const [technologyIds, setTechnologyIds] = useState(
    project?.technologies.map((tech) => tech.id) || []
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newProject = {
      name,
      fullDescription,
      shortDescription,
      countryCode,
      link,
      showOnPage,
      imageFileId: imageFile,
      technologyIds,
    };

    console.log(newProject);

    project
      ? updateAdminData('project', project.id, newProject).then(() => close())
      : createAdminData('project', newProject).then(() => close());
  }

  function getImageId(id) {
    setImageFile(id);
  }
  function handleTechChange(event, id) {
    if (event.target.checked) {
      setTechnologyIds([...technologyIds, id]);
    }
    if (!event.target.checked) {
      setTechnologyIds(technologyIds.filter((tech) => tech !== id));
    }
  }
  return (
    <Styled.Wrapper>
      <Styled.Form onSubmit={handleSubmit}>
        {project ? (
          <h2>Edit Project ID: {project?.id}</h2>
        ) : (
          <h2>Create a Project</h2>
        )}
        <label>
          Project Name:
          <input
            className="form__title"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>
        <label>
          Project Full Description:
          <textarea
            className="form__text"
            value={fullDescription}
            onChange={({ target: { value } }) => setFullDescription(value)}
          />
        </label>
        <label>
          Project Short Description:
          <textarea
            className="form__text"
            value={shortDescription}
            onChange={({ target: { value } }) => setShortDescription(value)}
          />
        </label>
        <label>
          Country Code:
          <input
            className="form__title"
            type="text"
            value={countryCode}
            onChange={({ target: { value } }) => setCountryCode(value)}
          />
        </label>
        <label>
          Link:
          <input
            className="form__title"
            type="text"
            value={link}
            onChange={({ target: { value } }) => setLink(value)}
          />
        </label>
        <label>
          Show on page:
          <input
            type="checkbox"
            checked={showOnPage}
            onChange={({ target: { checked } }) => setshowOnPage(checked)}
          />
        </label>
        <>
          {technologies.map((tech) => (
            <label>
              {tech.name}
              <input
                type="checkbox"
                name="TechOption"
                checked={technologyIds.some((el) => el === tech.id)}
                onChange={(event) => handleTechChange(event, tech.id)}
              />
            </label>
          ))}
        </>
        <Images
          activeImage={project?.imageFile}
          getImageId={getImageId}
        ></Images>
        <div className="buttons">
          <button
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
          </button>
          <button type="button" onClick={() => close()}>
            Cancel
          </button>
        </div>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default ProjectForm;
