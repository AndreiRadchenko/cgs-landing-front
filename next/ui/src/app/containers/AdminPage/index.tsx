import { useState, useEffect } from 'react';
import {
  getAdminData,
  login,
  deleteAdminData,
} from '../../../services/api/adminApi';
import axios from 'axios';
import * as Styled from '../AdminPage/Admin.styles';
import Fact from '../../components/Admin/Facts/Facts';
import Slogan from '../../components/Admin/Slogan/Slogan';
import Worker from '../../components/Admin/Worker/Worker';
import Modal from '../../components/Modal/Modal';
import FactsForm from 'app/components/Admin/Facts/FactsForm';
import { IFact } from 'app/components/Admin/types';
import SloganForm from 'app/components/Admin/Slogan/SloganForm';
import WorkerForm from 'app/components/Admin/Worker/WorkerForm';
import Projects from 'app/components/Admin/Project/Project';
import ProjectForm from '../../components/Admin/Project/ProjectForm';
import Technology from '../../components/Admin/Technology/Technology';
import TechnologyForm from '../../components/Admin/Technology/TechnologyForm';
import Testimonial from 'app/components/Admin/Testimonial/Testimonial';
import FeaturedTechology from 'app/components/Admin/FeaturedTechnology/FeaturedTechnology';
import Article from '../../components/Admin/Article/Article';
import FeaturedTechologyForm from 'app/components/Admin/FeaturedTechnology/FeaturedTechnologyForm';
import TestimonialForm from 'app/components/Admin/Testimonial/TestimonialForm';
import ArticleForm from 'app/components/Admin/Article/ArticleForm';
import ImagesPage from 'app/components/Admin/ImagesPage/ImagesPage';

const AdminPage: React.FC = () => {
  const [token, setToken] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [facts, setFacts] = useState<IFact[] | undefined>([]);
  const [slogan, setSlogan] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [featuredTechnologies, setFeaturedTechnologies] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isFactsShown, setIsFactsShown] = useState(false);
  const [isSloganShown, setIsSloganShown] = useState(false);
  const [isProjectsShown, setIsProjectsShown] = useState(false);
  const [isTestimonialsShown, setIsTestimonialsShown] = useState(false);
  const [isTechnologiesShown, setIsTechnologiesShown] = useState(false);
  const [
    isfeaturedTechnologiesShown,
    setIsfeaturedTechnologiesShown,
  ] = useState(false);
  const [isWorkersShown, setIsWorkersShown] = useState(false);
  const [isArticlesShown, setIsArticlesShown] = useState(false);
  const [isImagesShown, setIsImagesShown] = useState(false);
  const [editItem, seteditItem] = useState<any>(null);

  useEffect(() => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    if (token) {
      loadData();
    }
  }, [token]);

  useEffect(() => {
    loadData();
  }, [isModal]);

  async function loadData(data = 'all') {
    switch (data) {
      case 'facts':
        const facts = await getAdminData('facts');
        setFacts(facts);
        break;
      case 'slogan':
        const slogan = await getAdminData('slogan');
        setSlogan(slogan);
        break;
      case 'worker':
        const workers = await getAdminData('worker');
        setWorkers(workers);
        break;
      case 'project':
        const projects = await getAdminData('project');
        setProjects(projects);
        break;
      case 'testimonial':
        const testimonials = await getAdminData('testimonial');
        setTestimonials(testimonials);
        break;
      case 'technology':
        const technologies = await getAdminData('technology');
        setTechnologies(technologies);
        break;
      case 'featuredTechnology':
        const featuredTechnologies = await getAdminData('featuredTechnology');
        setFeaturedTechnologies(featuredTechnologies);
        break;
      case 'article':
        const articles = await getAdminData('article');
        setArticles(articles);
        break;
      default:
        getAllData();
        break;
    }
  }
  async function getAllData() {
    const facts = await getAdminData('facts');
    setFacts(facts);
    const slogan = await getAdminData('slogan');
    setSlogan(slogan);
    const workers = await getAdminData('worker');
    setWorkers(workers);
    const projects = await getAdminData('project');
    setProjects(projects);
    const testimonials = await getAdminData('testimonial');
    setTestimonials(testimonials);
    const technologies = await getAdminData('technology');
    setTechnologies(technologies);
    const featuredTechnologies = await getAdminData('featuredTechnology');
    setFeaturedTechnologies(featuredTechnologies);
    const articles = await getAdminData('article');
    setArticles(articles);
  }

  useEffect(() => {
    const tokenfromLocalStorage = localStorage.getItem('token');
    const token = tokenfromLocalStorage
      ? JSON.parse(tokenfromLocalStorage)
      : null;
    if (token) {
      setToken(token);
    } else {
      login().then((token) => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
      });
    }
  }, []);

  function deleteItem(route: string, id: string) {
    deleteAdminData(route, id).then(() => loadData(route));
  }

  function handleOpenMenu(event) {
    const id = event.target.id;
    id === 'facts' ? setIsFactsShown(true) : setIsFactsShown(false);
    id === 'slogan' ? setIsSloganShown(true) : setIsSloganShown(false);
    id === 'worker' ? setIsWorkersShown(true) : setIsWorkersShown(false);
    id === 'project' ? setIsProjectsShown(true) : setIsProjectsShown(false);
    id === 'article' ? setIsArticlesShown(true) : setIsArticlesShown(false);
    id === 'technology'
      ? setIsTechnologiesShown(true)
      : setIsTechnologiesShown(false);
    id === 'featuredTechnology'
      ? setIsfeaturedTechnologiesShown(true)
      : setIsfeaturedTechnologiesShown(false);
    id === 'testimonial'
      ? setIsTestimonialsShown(true)
      : setIsTestimonialsShown(false);
    id === 'images' ? setIsImagesShown(true) : setIsImagesShown(false);
  }

  function openModal(id: string): void {
    setIsModal(true);
    seteditItem(id);
  }

  function closeModal() {
    setIsModal(false);
    seteditItem(null);
  }

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <h2> Admin Page</h2>
        <Styled.Menu>
          <h3>Items</h3>
          <Styled.MenuList>
            <li id="facts" onClick={(event) => handleOpenMenu(event)}>
              Facts
            </li>
            <li id="slogan" onClick={(event) => handleOpenMenu(event)}>
              Slogan
            </li>
            <li id="worker" onClick={(event) => handleOpenMenu(event)}>
              Workers
            </li>
            <li id="project" onClick={(event) => handleOpenMenu(event)}>
              Project
            </li>
            <li id="article" onClick={(event) => handleOpenMenu(event)}>
              Article
            </li>
            <li id="technology" onClick={(event) => handleOpenMenu(event)}>
              Technology
            </li>
            <li
              id="featuredTechnology"
              onClick={(event) => handleOpenMenu(event)}
            >
              Featured Technology
            </li>
            <li id="testimonial" onClick={(event) => handleOpenMenu(event)}>
              Testimonial
            </li>
            <li id="images" onClick={(event) => handleOpenMenu(event)}>
              Images
            </li>
            <li>BlogTag</li>
          </Styled.MenuList>
        </Styled.Menu>
        <Styled.InfoWrapper>
          {(isFactsShown || isSloganShown || isWorkersShown) && (
            <button
              className="button"
              type="button"
              onClick={() => setIsModal(true)}
            >
              Create new entry
            </button>
          )}
          {isFactsShown &&
            facts &&
            facts.map((fact) => (
              <Fact fact={fact} openModal={openModal}></Fact>
            ))}
          {isSloganShown &&
            slogan &&
            slogan.map((slogan) => (
              <Slogan
                slogan={slogan}
                openModal={openModal}
                deleteItem={deleteItem}
              ></Slogan>
            ))}
          {isWorkersShown &&
            workers &&
            workers.map((worker) => (
              <Worker
                openModal={openModal}
                worker={worker}
                deleteItem={deleteItem}
              ></Worker>
            ))}
          {isProjectsShown &&
            projects &&
            projects.map((project) => (
              <Projects
                openModal={openModal}
                project={project}
                deleteItem={deleteItem}
              ></Projects>
            ))}
          {isTestimonialsShown &&
            testimonials &&
            testimonials.map((testimonial) => (
              <Testimonial
                openModal={openModal}
                testimonial={testimonial}
                deleteItem={deleteItem}
              ></Testimonial>
            ))}
          {isTechnologiesShown &&
            technologies &&
            technologies.map((technology) => (
              <Technology
                openModal={openModal}
                technology={technology}
                deleteItem={deleteItem}
              ></Technology>
            ))}
          {isArticlesShown &&
            articles &&
            articles.map((article) => (
              <Article
                openModal={openModal}
                article={article}
                deleteItem={deleteItem}
              ></Article>
            ))}
          {isfeaturedTechnologiesShown &&
            featuredTechnologies &&
            featuredTechnologies.map((featuredTechnology) => (
              <FeaturedTechology
                openModal={openModal}
                featuredTechnology={featuredTechnology}
                deleteItem={deleteItem}
              ></FeaturedTechology>
            ))}
          {isImagesShown && <ImagesPage></ImagesPage>}
        </Styled.InfoWrapper>
      </Styled.ContentWrapper>
      {isModal && (
        <Modal closeModal={closeModal}>
          {isFactsShown && <FactsForm fact={editItem} close={closeModal} />}
          {isSloganShown && <SloganForm slogan={editItem} close={closeModal} />}
          {isWorkersShown && (
            <WorkerForm worker={editItem} close={closeModal} />
          )}
          {isProjectsShown && (
            <ProjectForm
              project={editItem}
              technologies={technologies}
              close={closeModal}
            />
          )}
          {isTechnologiesShown && (
            <TechnologyForm technology={editItem} close={closeModal} />
          )}
          {isfeaturedTechnologiesShown && (
            <FeaturedTechologyForm
              featuredTechnology={editItem}
              close={closeModal}
            />
          )}
          {isTestimonialsShown && (
            <TestimonialForm testimonial={editItem} close={closeModal} />
          )}
          {isArticlesShown && (
            <ArticleForm article={editItem} close={closeModal} />
          )}
        </Modal>
      )}
      <div id="modal-root"></div>
    </Styled.Wrapper>
  );
};

export default AdminPage;
