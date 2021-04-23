const mapSloganToResponse = (slogan) => ({
  title: slogan.title,
  text: slogan.text,
});

exports.mapSloganToResponse = mapSloganToResponse;

const mapProjectToResponse = (project) => ({
  id: project.id,
  name: project.name,
  countryCode: project.countryCode,
  shortDescription: project.shortDescription,
  fullDescription: project.fullDescription,
  // eslint-disable-next-line no-use-before-define
  technologies: project.technologies.map(mapTechnologyToResponse),
  projectLink: project.projectLink,
  imageFileSavedAs: project.imageFile.savedAs,
});

exports.mapProjectToResponse = mapProjectToResponse;

const mapFactToResponse = (fact) => ({
  id: fact.id,
  title: fact.title,
  text: fact.text,
  iconFileSavedAs: fact.iconFile.savedAs,
});

exports.mapFactToResponse = mapFactToResponse;

const mapTechnologyToResponse = (technology) => ({
  id: technology.id,
  name: technology.name,
  category: technology.category,
  iconFileSavedAs: technology.iconFile.savedAs,
});

exports.mapTechnologyToResponse = mapTechnologyToResponse;

const mapTestimonialToResponse = (testimonial) => ({
  id: testimonial.id,
  customerName: testimonial.customerName,
  countryCode: testimonial.countryCode,
  companyName: testimonial.companyName,
  customerPosition: testimonial.customerPosition,
  feedback: testimonial.feedback,
  sites: testimonial.sites.map((site) => ({
    id: site.id,
    name: site.name,
    rate: site.rate,
    link: site.link,
  })),
});

exports.mapTestimonialToResponse = mapTestimonialToResponse;
