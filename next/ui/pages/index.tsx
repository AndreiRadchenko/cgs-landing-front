import { HomePage } from "../src/app/containers/HomePage/";
import { getData } from "../src/services/api/api";

const categories = [
  "slogan",
  "projects",
  "workers",
  "facts",
  "technologies",
  "testimonials",
  "featuredTechnologies",
];

export const getServerSideProps = async () => {
  try {
    const props: Record<string, any> = {};

    const responses = await Promise.all(categories.map((name) => getData(name)));

    categories.forEach((category, index) => {
      props[category] = responses[index];
    });

    return { props };
  } catch (error) {
    console.log("error", { error });
    return null;
  }
};

const Home = (props) => {
  return <HomePage props={props} />;
};

export default Home;
