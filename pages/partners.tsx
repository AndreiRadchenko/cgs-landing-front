import { PartnersPage } from "../src/app/containers/PartnersPage";
import { SpinnerPage } from "../src/app/components/SpinnerPage";

import { getData } from "../src/services/api/api";

const Partners = (props) => (
  <>
    <SpinnerPage />
    <PartnersPage {...props} />;
  </>
);

const categories = ["steps", "stepsToEarn"];

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

export default Partners;
