export const mapTechnologies = (technologies) => {
  return technologies.map((_, i, arr) => {
    if (i === 0) {
      return arr.find((el) => el.type === "web") ?? _;
    }

    if (i === 1) {
      return arr.find((el) => el.type === "mobile") ?? _;
    }

    if (i === 2) {
      return arr.find((el) => el.type === "backend") ?? _;
    }

    if (i === 3) {
      return arr.find((el) => el.type === "ui_ux") ?? _;
    }

    return _;
  });
};
