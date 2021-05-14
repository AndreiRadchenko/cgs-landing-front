import { HomePage } from '../src/app/containers/HomePage/';
import { getData } from '../src/services/api/api';
import {
  IProject,
  IFact,
  ISlogan,
  ITechnology,
  ITestimonial,
  IWorker,
  IFeaturedTechnology,
} from '../src/types/components/index';

export async function getServerSideProps() {
  try {
    const featuredTechnologies: IFeaturedTechnology[] = await getData(
      'featuredTechnologies'
    );
    const testimonials: ITestimonial[] = await getData('testimonials');
    const facts: IFact[] = await getData('facts');
    const technologies: ITechnology[] = await getData('technologies');
    const slogan: ISlogan[] = await getData('slogan');
    const projects: IProject[] = await getData('projects');
    const workers: IWorker[] = await getData('workers');
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
