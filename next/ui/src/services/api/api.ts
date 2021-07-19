import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.params = {};
axios.defaults.headers = {};

const API_ROUTES = {
  featuredTechnologies: "/home/get-featured-technologies",
  workers: "/home/get-workers",
  projects: `/home/get-projects`,
  facts: "/home/get-facts",
  technologies: "/home/get-technologies",
  testimonials: "/home/get-testimonials",
  slogan: `/home/get-slogan`,
  articles: "/blog/",
  article: "/blog/",
  similarArticles: "/blog/similar-articles/",
  steps: "/partners/get-steps",
  stepsToEarn: "/partners/get-steps-to-earn",
};

export const getData = async (route: string, id?: string | undefined) => {
  try {
    const { data } = await axios.get(API_ROUTES[route] + (id ? id : ""));
    const response = data.response;
    return response;
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};
