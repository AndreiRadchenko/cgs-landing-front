import { GetServerSideProps } from "next";

const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  if (
    req.headers.host === "cg-landing-frontend.herokuapp.com" ||
    req.headers.host === "codegeneration.cc"
  ) {
    res.setHeader("location", "https://www.cgsteam.io/");
    res.statusCode = 301;
  }

  return { props: {} };
};

export default getServerSideProps;
