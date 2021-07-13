import { PartnersPage } from "../src/app/containers/PartnersPage";

const PartnerArtticlePage = (props) => <PartnersPage steps={props.steps} />;

export const getServerSideProps = async () => {
  const steps = [
    {
      id: "1",
      title: "Step title 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iconUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/60da194d417d960003e29c77.png",
    },
    {
      id: "2",
      title: "Step title 2",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iconUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/60da196b417d960003e29c85.png",
    },
    {
      id: "3",
      title: "Step title 3",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      iconUrl:
        "https://code-generation-landing-bucket.s3.amazonaws.com/60da1944417d960003e29c70.png",
    },
  ];

  return {
    props: { steps },
  };
};

export default PartnerArtticlePage;
