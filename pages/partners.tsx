import { PartnersPage } from "../src/app/containers/PartnersPage";

import { getData } from "../src/services/api/api";

const Partners = (props) => <PartnersPage steps={props.steps} />;

export const getServerSideProps = async () => {
  const steps = await getData("steps");

  return {
    props: {
      steps,
    },
  };
};

export default Partners;
