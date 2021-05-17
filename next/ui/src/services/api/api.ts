import axios from 'axios';

const BASE_URL: string | undefined = process.env.BASE_URL;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};
axios.defaults.headers = {};
// axios.defaults.timeout = 1000;

const API_ROUTES = {
  featuredTechnologies: '/home/get-featured-technologies',
  workers: '/home/get-workers',
  projects: `/home/get-projects`,
  facts: '/home/get-facts',
  technologies: '/home/get-technologies',
  testimonials: '/home/get-testimonials',
  slogan: `/home/get-slogan`,
  articles: '/blog/',
  article: '/blog/id',
};

export const getData = async (route: string) => {
  try {
    const { data } = await axios.get(API_ROUTES[route]);
    const response = data.response;
    return response;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getArticlesData = async () => {
  try {
    const { data } = await axios.get(`/blog/`);
    const response = data.response;
    return response;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getArticleData = async (id: string) => {
  try {
    const { data } = await axios.get(`/blog/${id}`);
    const response = data.response;
    return response;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};

export const getSimilarArticlesData = async (id: string) => {
  try {
    const { data } = await axios.get(`/blog/similar-articles/${id}`);
    const response = data.response;
    return response;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};
