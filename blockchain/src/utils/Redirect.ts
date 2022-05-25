import { GetServerSideProps } from "next";

const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  if (req.headers.host === "cg-blockchain-fe.herokuapp.com") {
    res.setHeader("location", "https://blockchain.cgsteam.io/");
    res.statusCode = 301;
  }

  return { props: {} };
};

export default getServerSideProps;
