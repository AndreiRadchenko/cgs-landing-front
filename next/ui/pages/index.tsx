import { HomePage } from '../src/app/containers/HomePage/';
import {
  getFacts,
  getTestimonials,
  getTechnologies,
  getHomeDetails,
  getProjects,
  getWorkers,
  getFeaturedTechnologies,
} from '../src/services/api/api';
export async function getServerSideProps() {
  try {
    const testimonials = await getTestimonials();
    const facts = await getFacts();
    const technologies = await getTechnologies();
    const slogan = await getHomeDetails();
    const projects = await getProjects();
    const workers = await getWorkers();
    const featuredTechnologies = await getFeaturedTechnologies();
    return {
      props: {
        testimonials,
        facts,
        technologies,
        slogan,
        projects,
        workers,
        featuredTechnologies,
      },
    };
  } catch (error) {
    console.log('error', { error });
    return null;
  }
}

export default function Home(props) {
  return <HomePage props={props} />;
}
