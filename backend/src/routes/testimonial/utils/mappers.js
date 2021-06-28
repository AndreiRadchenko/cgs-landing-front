const mapPlatformToResponse = (platform) => ({
  id: platform.id,
  type: platform.type,
  rate: platform.rate,
  link: platform.link ?? null,
});

exports.mapPlatformToResponse = mapPlatformToResponse;

const mapTestimonialToResponse = (testimonial) => ({
  id: testimonial.id,
  customerName: testimonial.customerName,
  countryCode: testimonial.countryCode,
  companyName: testimonial.companyName,
  customerPosition: testimonial.customerPosition,
  feedback: testimonial.feedback,
  platforms: testimonial.platforms.map(mapPlatformToResponse),
  createdAt: testimonial.createdAt,
  updatedAt: testimonial.updatedAt,
});

exports.mapTestimonialToResponse = mapTestimonialToResponse;
