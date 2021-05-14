import axios from 'axios';

const BASE_URL: string = 'https://cg-landing-backend.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};
axios.defaults.headers = {};

const API_ROUTES = {
  featuredTechnologies: '/home/get-featured-technologies',
  workers: '/home/get-workers',
  projects: `/home/get-projects`,
  facts: '/home/get-facts',
  technologies: '/home/get-technologies',
  testimonials: '/home/get-testimonials',
  slogan: `/home/get-slogan`,
};

export const getData = async (route) => {
  try {
    const { data } = await axios.get(API_ROUTES[route]);
    const response = data.response;
    return response;
  } catch (error) {
    console.log('error', { error });
    return null;
  }
};
