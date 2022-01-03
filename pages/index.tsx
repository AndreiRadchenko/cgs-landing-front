import { getPlaiceholder } from "plaiceholder";

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

// const injectPlaceholderImage = async (object: Record<string, any>, imageKey: string) => {
//   const imageUrl = object[imageKey];

//   const placeholder = await getPlaiceholder(imageUrl, {
//     size: 20,
//   });

//   delete object[imageKey];

//   Object.assign(object, {
//     image: {
//       url: placeholder.img.src,
//       width: placeholder.img.width,
//       height: placeholder.img.height,
//     },
//   });
// };

// export const getStaticProps = async () => {
//   const props: Record<string, any> = {};

//   const responses = await Promise.all(categories.map((name) => getData(name)));
  
//   categories.forEach((category, index) => {
//     props[category] = responses[index];
//   });

//   await Promise.all(props.projects.map((project) => (
//     injectPlaceholderImage(project, 'imageUrl')
//   )));

//   return {
//     props,
//     revalidate: 30,
//   };
// };

const Home = (props) => (
  <>
    <SpinnerPage />
    <HomePage props={props} />
  </>
);

export default Home;
