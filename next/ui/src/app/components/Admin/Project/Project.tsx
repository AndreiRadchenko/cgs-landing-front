import ItemButtons from '../ItemButtons/ItemButtons';
import * as Styled from '../Item.styles';
import { IProject } from '../types';

const Projects: React.FC<{
  project: IProject;
  openModal: Function;
  deleteItem: Function;
}> = ({ project, openModal, deleteItem }) => {
  return (
    <Styled.Wrapper>
      <Styled.Item>
        <ul>
          <li>ID: {project.id} </li>
          <li>Name: {project.name} </li>
          <li>Full Description: {project.fullDescription} </li>
          <li>Short Description: {project.shortDescription} </li>
          <li>Country Code: {project.countryCode} </li>
          <li>Link: {project.link} </li>
          <li>
            Technologies:
            <ul>
              {project.technologies.map((tech) => (
                <li>{tech.name}</li>
              ))}
            </ul>
          </li>
          <li>Show on HomePage: {project.showOnHomePage ? 'true' : 'false'}</li>
        </ul>
        <img
          src={project.imageFile.s3FileUrl}
          alt={project.imageFile.s3FileUrl}
        />
      </Styled.Item>
      <ItemButtons
        deleteItem={() => deleteItem('slogan', project.id)}
        openModal={openModal}
        item={project}
      ></ItemButtons>
    </Styled.Wrapper>
  );
};

export default Projects;
