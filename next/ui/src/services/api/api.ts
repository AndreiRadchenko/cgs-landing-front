import axios from 'axios';

import {
  IProject,
  IFact,
  ISlogan,
  ITechnology,
  ITestimonial,
  IWorker,
  IFeaturedTechnology,
} from '../../types/components/index';
const BASE_URL: string = 'https://cg-landing-backend.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};
axios.defaults.headers = {};

export const getHomeDetails = async () => {
  try {
    const { data } = await axios.get(`/home/get-slogan`);
    const slogan: ISlogan = data.response;
    return slogan;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};
export const getTestimonials = async () => {
  try {
    const { data } = await axios.get(`/home/get-testimonials`);
    const testimonials: ITestimonial[] = [
      ...data.response,
      ...data.response,
      ...data.response,
    ];
    return testimonials;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getTechnologies = async () => {
  try {
    const { data } = await axios.get(`/home/get-technologies`);
    const technologies: ITechnology[] = data.response;
    return technologies;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getFacts = async () => {
  try {
    const { data } = await axios.get(`/home/get-facts`);
    const facts: IFact[] = [
      ...data.response,
      ...data.response,
      ...data.response,
      ...data.response,
      ...data.response,
      ...data.response,
    ];
    return facts;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getProjects = async () => {
  try {
    const { data } = await axios.get(`/home/get-projects`);
    const projects: IProject[] = data.response;
    return projects;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getWorkers = async () => {
  try {
    const { data } = await axios.get(`/home/get-workers`);
    const workers: IWorker[] = data.response;
    return workers;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getFeaturedTechnologies = async () => {
  try {
    const { data } = await axios.get(`/home/get-featured-technologies`);
    const featuredTechnologies: IFeaturedTechnology[] = data.response;
    return featuredTechnologies;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};
