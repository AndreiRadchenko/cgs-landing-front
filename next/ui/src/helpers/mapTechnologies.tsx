export const mapTechnologies = (technologies) => {
  return technologies.map((_, i, arr) => {
    if (i === 0) {
      return arr.find((el) => el.type === "web");
    }
    if (i === 1) {
      return arr.find((el) => el.type === "mobile");
    }
    if (i === 2) {
      return arr.find((el) => el.type === "backend");
    }
    if (i === 3) {
      return arr.find((el) => el.type === "ui_ux");
    }
  });
};
