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
  technologies: project.technologies.map((technology) => ({
    id: technology.id,
    name: technology.name,
    iconUrl: technology.iconFile?.s3FileUrl ?? null,
  })),
  link: project.link ?? null,
  imageUrl: project.imageFile?.s3FileUrl ?? null,
});

exports.mapProjectToResponse = mapProjectToResponse;

const mapWorkerToResponse = (worker) => ({
  id: worker.id,
  name: worker.name,
  position: worker.position,
  text: worker.text,
  imageUrl: worker.imageFile?.s3FileUrl ?? null,
});

exports.mapWorkerToResponse = mapWorkerToResponse;

const mapFactToResponse = (fact) => ({
  id: fact.id,
  title: fact.title,
  text: fact.text,
  iconUrl: fact.iconFile?.s3FileUrl ?? null,
});

exports.mapFactToResponse = mapFactToResponse;

const mapCategoryToResponse = (category) => ({
  type: category.type,
  technologies: category.technologies,
});

exports.mapCategoryToResponse = mapCategoryToResponse;

const mapTestimonialToResponse = (testimonial) => ({
  id: testimonial.id,
  customerName: testimonial.customerName,
  countryCode: testimonial.countryCode,
  companyName: testimonial.companyName,
  customerPosition: testimonial.customerPosition,
  feedback: testimonial.feedback,
  platforms: testimonial.platforms.map((platform) => ({
    id: platform.id,
    type: platform.type,
    rate: platform.rate,
    link: platform.link ?? null,
  })),
});

exports.mapTestimonialToResponse = mapTestimonialToResponse;

const mapFeaturedTechnologyToResponse = (featuredTechnology) => ({
  id: featuredTechnology.id,
  name: featuredTechnology.name,
  text: featuredTechnology.text,
  imageUrl: featuredTechnology.imageFile?.s3FileUrl ?? null,
  label: featuredTechnology.label,
});

exports.mapFeaturedTechnologyToResponse = mapFeaturedTechnologyToResponse;
