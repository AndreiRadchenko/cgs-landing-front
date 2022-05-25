﻿import { GetServerSideProps } from "next";

const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const arrOfHosts = ["cg-landing-frontend.herokuapp.com", "codegeneration.cc"];

  if (req.headers.host && arrOfHosts.includes(req.headers.host)) {
    res.setHeader("location", "https://www.cgsteam.io/");
    res.statusCode = 301;
  }

  return { props: {} };
};

export default getServerSideProps;
