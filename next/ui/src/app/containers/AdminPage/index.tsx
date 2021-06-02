import { useState, useEffect } from "react";
import {
  getAdminData,
  login,
  deleteAdminData,
} from "../../../services/api/adminApi";
import axios from "axios";
import * as Styled from "../../components/Admin/Admin.styles";
import Fact from "../../components/Admin/Facts/Facts";
import Slogan from "../../components/Admin/Slogan/Slogan";
import Worker from "../../components/Admin/Worker/Worker";
import FactsForm from "app/components/Admin/Facts/FactsForm";
import { IFact } from "app/components/Admin/types";
import SloganForm from "app/components/Admin/Slogan/SloganForm";
import WorkerForm from "app/components/Admin/Worker/WorkerForm";
import Projects from "app/components/Admin/Project/Project";
import ProjectForm from "../../components/Admin/Project/ProjectForm";
import Technology from "../../components/Admin/Technology/Technology";
import TechnologyForm from "../../components/Admin/Technology/TechnologyForm";
import Testimonial from "app/components/Admin/Testimonial/Testimonial";
import FeaturedTechology from "app/components/Admin/FeaturedTechnology/FeaturedTechnology";
import Article from "../../components/Admin/Article/Article";
import FeaturedTechologyForm from "app/components/Admin/FeaturedTechnology/FeaturedTechnologyForm";
import TestimonialForm from "app/components/Admin/Testimonial/TestimonialForm";
import ArticleForm from "app/components/Admin/Article/ArticleForm";
import ImagesPage from "app/components/Admin/ImagesPage/ImagesPage";
import IMAGES from "consts/Images";
import Footer from "app/components/shared/Footer/footer.component";
import SectionLayout from "app/components/Admin/SectionLayout/sectionLayout.component";

const AdminPage: React.FC = () => {
  const [token, setToken] = useState("");
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
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
    if (token) {
      loadData();
    }
  }, [token]);

  useEffect(() => {
    loadData(activeMenu);
  }, [isModal]);

  const loadData = async (data = "all") => {
    switch (data) {
      case "facts":
        const facts = await getAdminData("facts");
        setFacts(facts);
        break;
      case "slogan":
        const slogan = await getAdminData("slogan");
        setSlogan(slogan);
        break;
      case "worker":
        const workers = await getAdminData("worker");
        setWorkers(workers);
        break;
      case "project":
        const projects = await getAdminData("project");
        setProjects(projects);
        break;
      case "testimonial":
        const testimonials = await getAdminData("testimonial");
        setTestimonials(testimonials);
        break;
      case "technology":
        const technologies = await getAdminData("technology");
        setTechnologies(technologies);
        break;
      case "featuredTechnology":
        const featuredTechnologies = await getAdminData("featuredTechnology");
        setFeaturedTechnologies(featuredTechnologies);
        break;
      case "article":
        const articles = await getAdminData("article");
        setArticles(articles);
        break;
      default:
        getAllData();
        break;
    }
  };
  const getAllData = async () => {
    const facts = await getAdminData("facts");
    setFacts(facts);
    const slogan = await getAdminData("slogan");
    setSlogan(slogan);
    const workers = await getAdminData("worker");
    setWorkers(workers);
    const projects = await getAdminData("project");
    setProjects(projects);
    const testimonials = await getAdminData("testimonial");
    setTestimonials(testimonials);
    const technologies = await getAdminData("technology");
    setTechnologies(technologies);
    const featuredTechnologies = await getAdminData("featuredTechnology");
    setFeaturedTechnologies(featuredTechnologies);
    const articles = await getAdminData("article");
    setArticles(articles);
  };

  useEffect(() => {
    const tokenfromLocalStorage = localStorage.getItem("token");
    const token = tokenfromLocalStorage
      ? JSON.parse(tokenfromLocalStorage)
      : null;
    if (token) {
      setToken(token);
    } else {
      login().then((token) => {
        localStorage.setItem("token", JSON.stringify(token));
        setToken(token);
      });
    }
  }, []);

  const deleteItem = (route: string, id: string) => {
    deleteAdminData(route, id).then(() => loadData(route));
  };

  const handleOpenMenu = (event) => {
    setIsModal(false);
    const id = event.target.id;
    id === "facts" ? setIsFactsShown(true) : setIsFactsShown(false);
    id === "slogan" ? setIsSloganShown(true) : setIsSloganShown(false);
    id === "worker" ? setIsWorkersShown(true) : setIsWorkersShown(false);
    id === "project" ? setIsProjectsShown(true) : setIsProjectsShown(false);
    id === "article" ? setIsArticlesShown(true) : setIsArticlesShown(false);
    id === "technology"
      ? setIsTechnologiesShown(true)
      : setIsTechnologiesShown(false);
    id === "featuredTechnology"
      ? setIsfeaturedTechnologiesShown(true)
      : setIsfeaturedTechnologiesShown(false);
    id === "testimonial"
      ? setIsTestimonialsShown(true)
      : setIsTestimonialsShown(false);
    id === "images" ? setIsImagesShown(true) : setIsImagesShown(false);
  };

  const openModal = (id: string): void => {
    setIsModal(true);
    seteditItem(id);
  };

  const closeModal = () => {
    setIsModal(false);
    seteditItem(null);
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentWrapper>
        <Styled.HeaderWrapper>
          <Styled.HeaderItem>
            <a href="/">
              <Styled.HeaderLogo src={IMAGES.LOGO} />
            </a>
          </Styled.HeaderItem>
          <Styled.HeaderItem>
            <h2> Admin Page</h2>
          </Styled.HeaderItem>
        </Styled.HeaderWrapper>
        <Styled.Sidebar>
          <Styled.Menu>
            <h3>Items</h3>
            <Styled.MenuList>
              <Styled.MenuListItem
                id="slogan"
                onClick={(event) => handleOpenMenu(event)}
                className={isSloganShown ? "activeMenuItem" : ""}
              >
                Slogan
              </Styled.MenuListItem>
              <Styled.MenuListItem
                id="project"
                onClick={(event) => handleOpenMenu(event)}
                active={isProjectsShown}
              >
                Project
              </Styled.MenuListItem>
              <Styled.MenuListItem
                id="worker"
                onClick={(event) => handleOpenMenu(event)}
                active={isWorkersShown}
              >
                Workers
              </Styled.MenuListItem>

              <Styled.MenuListItem
                id="facts"
                onClick={(event) => handleOpenMenu(event)}
                active={isFactsShown}
              >
                Facts
              </Styled.MenuListItem>

              <Styled.MenuListItem
                id="technology"
                onClick={(event) => handleOpenMenu(event)}
                active={isTechnologiesShown}
              >
                Technology
              </Styled.MenuListItem>
              <Styled.MenuListItem
                id="testimonial"
                onClick={(event) => handleOpenMenu(event)}
                active={isTestimonialsShown}
              >
                Testimonial
              </Styled.MenuListItem>
              <Styled.MenuListItem
                id="featuredTechnology"
                onClick={(event) => handleOpenMenu(event)}
                active={isfeaturedTechnologiesShown}
              >
                Featured Technology
              </Styled.MenuListItem>
              <Styled.MenuListItem
                id="article"
                onClick={(event) => handleOpenMenu(event)}
                active={isArticlesShown}
              >
                Article
              </Styled.MenuListItem>
              <Styled.MenuListItem
                id="images"
                onClick={(event) => handleOpenMenu(event)}
                active={isImagesShown}
              >
                Images
              </Styled.MenuListItem>
            </Styled.MenuList>
          </Styled.Menu>
        </Styled.Sidebar>

        <Styled.InfoWrapper>
          {isModal && isFactsShown && (
            <FactsForm fact={editItem} close={closeModal} />
          )}
          {isFactsShown && facts && !isModal && (
            <SectionLayout title="Fact" setIsModal={setIsModal}>
              {facts.map((fact) => (
                <Fact fact={fact} openModal={openModal}></Fact>
              ))}
            </SectionLayout>
          )}

          {isModal && isSloganShown && (
            <SloganForm slogan={editItem} close={closeModal} />
          )}
          {isSloganShown && slogan && !isModal && (
            <SectionLayout title="Slogan" setIsModal={setIsModal}>
              {slogan.map((slogan) => (
                <Slogan
                  slogan={slogan}
                  openModal={openModal}
                  deleteItem={deleteItem}
                ></Slogan>
              ))}
            </SectionLayout>
          )}

          {isModal && isWorkersShown && (
            <WorkerForm worker={editItem} close={closeModal} />
          )}
          {isWorkersShown && workers && !isModal && (
            <SectionLayout title="Workers" setIsModal={setIsModal}>
              {workers.map((worker) => (
                <Worker
                  openModal={openModal}
                  worker={worker}
                  deleteItem={deleteItem}
                ></Worker>
              ))}
            </SectionLayout>
          )}

          {isModal && isProjectsShown && (
            <ProjectForm
              project={editItem}
              technologies={technologies}
              close={closeModal}
            />
          )}
          {isProjectsShown && projects && !isModal && (
            <SectionLayout title="Projects" setIsModal={setIsModal}>
              {projects.map((project) => (
                <Projects
                  openModal={openModal}
                  project={project}
                  deleteItem={deleteItem}
                ></Projects>
              ))}
            </SectionLayout>
          )}

          {isModal && isTestimonialsShown && (
            <TestimonialForm testimonial={editItem} close={closeModal} />
          )}
          {isTestimonialsShown && testimonials && !isModal && (
            <SectionLayout title="Testimonials" setIsModal={setIsModal}>
              {testimonials.map((testimonial) => (
                <Testimonial
                  openModal={openModal}
                  testimonial={testimonial}
                  deleteItem={deleteItem}
                ></Testimonial>
              ))}
            </SectionLayout>
          )}

          {isModal && isTechnologiesShown && (
            <TechnologyForm technology={editItem} close={closeModal} />
          )}
          {isTechnologiesShown && technologies && !isModal && (
            <SectionLayout
              title="Featured Technologies"
              setIsModal={setIsModal}
            >
              {technologies.map((technology) => (
                <Technology
                  openModal={openModal}
                  technology={technology}
                  deleteItem={deleteItem}
                ></Technology>
              ))}
            </SectionLayout>
          )}

          {isModal && isArticlesShown && (
            <ArticleForm article={editItem} close={closeModal} />
          )}
          {isArticlesShown && articles && !isModal && (
            <SectionLayout title="Article" setIsModal={setIsModal}>
              {articles.map((article) => (
                <Article
                  openModal={openModal}
                  article={article}
                  deleteItem={deleteItem}
                ></Article>
              ))}
            </SectionLayout>
          )}

          {isModal && isfeaturedTechnologiesShown && (
            <FeaturedTechologyForm
              featuredTechnology={editItem}
              close={closeModal}
            />
          )}
          {isfeaturedTechnologiesShown && featuredTechnologies && !isModal && (
            <SectionLayout title="Slogan" setIsModal={setIsModal}>
              {featuredTechnologies.map((featuredTechnology) => (
                <FeaturedTechology
                  openModal={openModal}
                  featuredTechnology={featuredTechnology}
                  deleteItem={deleteItem}
                ></FeaturedTechology>
              ))}
            </SectionLayout>
          )}

          {isImagesShown && <ImagesPage></ImagesPage>}
        </Styled.InfoWrapper>
      </Styled.ContentWrapper>
      <Footer />
    </Styled.Wrapper>
  );
};

export default AdminPage;
