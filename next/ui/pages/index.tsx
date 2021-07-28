import { HomePage } from "../src/app/containers/HomePage";
import { SpinnerPage } from "../src/app/components/SpinnerPage";
import { getData } from "../src/services/api/api";

const categories = [
  "slogan",
  "projects",
  "workers",
  "facts",
  "technologies",
  "testimonials",
  "featuredTechnologies",
  "gallery",
];

export const getStaticProps = async () => {
  const props: Record<string, any> = {};

  const responses = await Promise.all(categories.map((name) => getData(name)));

  categories.forEach((category, index) => {
    props[category] = responses[index];
  });

  return {
    props,
    revalidate: 30,
  };
};

const Home = (props) => (
  <>
    <SpinnerPage />
    <HomePage props={props} />
  </>
);

export default Home;
