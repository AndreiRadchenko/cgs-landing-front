import React, { useState, useEffect, useLayoutEffect } from "react";
import { getAdminData, deleteAdminData } from "../../../services/api/adminApi";
import axios from "axios";
import { useLocalStorageState } from "use-local-storage-state";
import * as Styled from "../../components/Admin/Admin.styles";
import Fact from "../../components/Admin/Facts/Facts";
import Step from "../../components/Admin/Step/Step";
import StepForm from "../../components/Admin/Step/StepForm";
import StepToEarn from "../../components/Admin/StepToEarn/StepToEarn";
import StepToEarnForm from "../../components/Admin/StepToEarn/StepToEarnForm";
import Slogan from "../../components/Admin/Slogan/Slogan";
import Worker from "../../components/Admin/Worker/Worker";
import FactsForm from "app/components/Admin/Facts/FactsForm";
import {
  ISlogan,
  IFact,
  IStep,
  IStepToEarn,
  IProject,
  IWorker,
  ITechnology,
  ITestimonial,
  IFeaturedTechnology,
  IArticle,
} from "app/components/Admin/types";
import SloganForm from "app/components/Admin/Slogan/SloganForm";

import WorkerForm from "app/components/Admin/Worker/WorkerForm";
import Projects from "app/components/Admin/Project/Project";
import ProjectForm from "../../components/Admin/Project/ProjectForm";
import Technology from "../../components/Admin/Technology/Technology";
import TechnologyForm from "../../components/Admin/Technology/TechnologyForm";
import Testimonial from "app/components/Admin/Testimonial/Testimonial";
import FeaturedTechnology from "app/components/Admin/FeaturedTechnology/FeaturedTechnology";
import Article from "../../components/Admin/Article/Article";
import FeaturedTechnologyForm from "app/components/Admin/FeaturedTechnology/FeaturedTechnologyForm";
import TestimonialForm from "app/components/Admin/Testimonial/TestimonialForm";
import ArticleForm from "app/components/Admin/Article/ArticleForm";
import ImagesPage from "app/components/Admin/ImagesPage/ImagesPage";
import IMAGES from "consts/Images";
import Footer from "app/components/shared/Footer/footer.component";
import SectionLayout from "app/components/Admin/SectionLayout/sectionLayout.component";
import { AdminNav } from "../../../consts/lists";
import { v4 as uuidv4 } from "uuid";
import { getSpinner } from "../../../helpers/spinner";
import Router from "next/router";

const AdminPage: React.FC = () => {
  const [token, setToken] = useLocalStorageState("token", "");
  const [slogan, setSlogan] = useState<ISlogan[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [workers, setWorkers] = useState<IWorker[]>([]);
  const [facts, setFacts] = useState<IFact[]>([]);
  const [steps, setSteps] = useState<IStep[]>([]);
  const [stepsToEarn, setStepsToEarn] = useState<IStepToEarn[]>([]);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [featuredTechnologies, setFeaturedTechnologies] = useState<IFeaturedTechnology[]>([]);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [categoryOpen, setCategoryOpen] = useState<string | any>(null);
  const [editItem, setEditItem] = useState<any>(null);
  const [tokenIsLoaded, setIsLoaded] = useState<any>(false);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  const apiParams = {
    stepToEarn: setStepsToEarn,
    facts: setFacts,
    step: setSteps,
    slogan: setSlogan,
    worker: setWorkers,
    project: setProjects,
    testimonial: setTestimonials,
    technology: setTechnologies,
    featuredTechnology: setFeaturedTechnologies,
    article: setArticles,
  };

  const openModal = (id: string): void => {
    setIsModal(true);
    setEditItem(id);
  };

  const deleteItem = (route: string, id: string) => {
    console.log(route, id);

    deleteAdminData(route, id).then(() => loadData(route));
  };

  const handleOpenMenu = (event) => {
    setIsModal(false);
    const id = event.target.id;
    setCategoryOpen(id);
  };

  const closeModal = () => {
    setIsModal(false);
    setEditItem(null);
  };

  const renderMenuItems = (id, name) => {
    return (
      <Styled.MenuListItem
        key={uuidv4()}
        id={id}
        onClick={(event) => {
          handleOpenMenu(event);
          closeModal();
        }}
        active={categoryOpen === id}
      >
        {name}
      </Styled.MenuListItem>
    );
  };

  const renderFactItem = (fact) => {
    return <Fact key={uuidv4()} fact={fact} openModal={openModal} deleteItem={deleteItem} />;
  };

  const renderStepItem = (step: IStep) => (
    <Step step={step} openModal={openModal} deleteItem={deleteItem} />
  );

  const renderStepToEarnItem = (stepToEarn: IStepToEarn) => (
    <StepToEarn stepToEarn={stepToEarn} openModal={openModal} deleteItem={deleteItem} />
  );

  const renderSloganItem = (slogan) => {
    return <Slogan key={uuidv4()} slogan={slogan} openModal={openModal} deleteItem={deleteItem} />;
  };

  const renderWorkerItem = (worker) => {
    return <Worker key={uuidv4()} openModal={openModal} worker={worker} deleteItem={deleteItem} />;
  };
  const renderProjectItem = (project) => {
    return (
      <Projects key={uuidv4()} openModal={openModal} project={project} deleteItem={deleteItem} />
    );
  };

  const renderTestimonialItem = (testimonial) => {
    return (
      <Testimonial
        key={uuidv4()}
        openModal={openModal}
        testimonial={testimonial}
        deleteItem={deleteItem}
      />
    );
  };
  const renderTechnologyItem = (technology) => {
    return (
      <Technology
        key={uuidv4()}
        openModal={openModal}
        technology={technology}
        deleteItem={deleteItem}
      />
    );
  };
  const renderArticleItem = (article) => {
    return (
      <Article key={article.id} openModal={openModal} article={article} deleteItem={deleteItem} />
    );
  };

  const renderFeaturedItem = (featuredTechnology) => {
    return (
      <FeaturedTechnology
        key={uuidv4()}
        openModal={openModal}
        featuredTechnology={featuredTechnology}
        deleteItem={deleteItem}
      />
    );
  };

  useEffect(() => {
    if (token) {
      setIsLoaded(true);

      return;
    } else {
      Router.push("/admin/login");
    }
  }, []);

  useEffect(() => {
    if (!tokenIsLoaded) {
      return;
    }

    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }, [token, tokenIsLoaded]);

  const loadData = async (category: string) => {
    setDataIsLoading(true);

    const setResponse = apiParams[category];

    if (!setResponse) {
      return;
    }

    const response = await getAdminData(category);

    if (category === "project") {
      await getAdminData("technology").then(setTechnologies);
    }

    setResponse(response);
    setDataIsLoading(false);
  };

  useLayoutEffect(() => {
    if (!tokenIsLoaded) {
      return;
    }

    if (isModal) {
      return;
    }

    loadData(categoryOpen);
  }, [categoryOpen, tokenIsLoaded, isModal]);

  if (!tokenIsLoaded) {
    return null;
  }

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
            <h2>Admin Page</h2>
          </Styled.HeaderItem>
        </Styled.HeaderWrapper>
        <Styled.Sidebar>
          <Styled.Menu>
            <h3>Items</h3>
            <Styled.MenuList>
              {AdminNav.map(({ id, name }) => renderMenuItems(id, name))}
            </Styled.MenuList>
          </Styled.Menu>
        </Styled.Sidebar>

        <Styled.InfoWrapper>
          {isModal && categoryOpen === "facts" && <FactsForm fact={editItem} close={closeModal} />}

          {categoryOpen === "facts" && facts && !isModal && (
            <SectionLayout title="Facts" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : facts.map((fact) => renderFactItem(fact))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "slogan" && (
            <SloganForm slogan={editItem} close={closeModal} />
          )}

          {categoryOpen === "slogan" && slogan && !isModal && (
            <SectionLayout title="Slogan" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : slogan.map((slogan) => renderSloganItem(slogan))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "worker" && (
            <WorkerForm worker={editItem} close={closeModal} />
          )}

          {categoryOpen === "worker" && workers && !isModal && (
            <SectionLayout title="Workers" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : workers.map((worker) => renderWorkerItem(worker))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "project" && (
            <ProjectForm project={editItem} technologies={technologies} close={closeModal} />
          )}

          {categoryOpen === "project" && projects && !isModal && (
            <SectionLayout title="Projects" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : projects.map((project) => renderProjectItem(project))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "testimonial" && (
            <TestimonialForm testimonial={editItem} close={closeModal} />
          )}

          {categoryOpen === "testimonial" && testimonials && !isModal && (
            <SectionLayout title="Testimonials" setIsModal={setIsModal}>
              {dataIsLoading
                ? getSpinner()
                : testimonials.map((testimonial) => renderTestimonialItem(testimonial))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "technology" && (
            <TechnologyForm technology={editItem} close={closeModal} />
          )}

          {categoryOpen === "technology" && technologies && !isModal && (
            <SectionLayout title="Technologies" setIsModal={setIsModal}>
              {dataIsLoading
                ? getSpinner()
                : technologies.map((technology) => renderTechnologyItem(technology))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "article" && (
            <ArticleForm article={editItem} close={closeModal} />
          )}

          {categoryOpen === "article" && articles && !isModal && (
            <SectionLayout title="Article" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : articles.map((article) => renderArticleItem(article))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "featuredTechnology" && (
            <FeaturedTechnologyForm featuredTechnology={editItem} close={closeModal} />
          )}

          {categoryOpen === "featuredTechnology" && featuredTechnologies && !isModal && (
            <SectionLayout title="Featured Techologies" setIsModal={setIsModal}>
              {dataIsLoading
                ? getSpinner()
                : featuredTechnologies.map((featuredTechnology) =>
                    renderFeaturedItem(featuredTechnology)
                  )}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "step" && <StepForm step={editItem} close={closeModal} />}

          {categoryOpen === "step" && !isModal && (
            <SectionLayout title="Steps" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : steps.map((step) => renderStepItem(step))}
            </SectionLayout>
          )}

          {isModal && categoryOpen === "stepToEarn" && (
            <StepToEarnForm stepToEarn={editItem} close={closeModal} />
          )}

          {categoryOpen === "stepToEarn" && !isModal && (
            <SectionLayout title="Steps to Earn" setIsModal={setIsModal}>
              {dataIsLoading ? getSpinner() : stepsToEarn.map(renderStepToEarnItem)}
            </SectionLayout>
          )}

          {categoryOpen === "images" && <ImagesPage />}
        </Styled.InfoWrapper>
      </Styled.ContentWrapper>
      <Footer />
    </Styled.Wrapper>
  );
};

export default AdminPage;
