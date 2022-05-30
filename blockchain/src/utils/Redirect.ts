import { GetServerSideProps } from "next";

const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  const arrOfHosts = ["cg-blockchain-fe.herokuapp.com"];

  if (req.headers.host && arrOfHosts.includes(req.headers.host)) {
    res.setHeader("location", "https://cgs-blockchain.io/");
    res.statusCode = 301;
  }

  return { props: {} };
};

export default getServerSideProps;
