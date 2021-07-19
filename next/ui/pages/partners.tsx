import { PartnersPage } from "../src/app/containers/PartnersPage";

import { getData } from "../src/services/api/api";

const Partners = (props) => <PartnersPage {...props} />;

const categories = ["steps", "stepsToEarn"];

export const getServerSideProps = async () => {
  const props: Record<string, any> = {};

  const responses = await Promise.all(categories.map((name) => getData(name)));

  categories.forEach((category, index) => {
    props[category] = responses[index];
  });

  return { props };
};

export default Partners;
