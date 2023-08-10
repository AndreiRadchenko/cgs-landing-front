import * as yup from 'yup';

export const AdminCvValidation = yup.object().shape({
  image: yup.object().shape({
    url: yup.string().url().required(),
  }),
  category: yup.string().required(),
  personal: yup.object().shape({
    name: yup.string().required(),
    summary: yup.string().required(),
    role: yup.string().required(),
  }),
  info: yup.object().shape({
    title: yup.string().required(),
    content: yup
      .array()
      .of(
        yup.object().shape({
          subtitle: yup.string().required(),
          text: yup
            .string()
            .transform((value) => value.replace(/<[^>]+>|&nbsp;/g, ""))
            .max(62)
            .required(),
        })
      )
      .required(),
  }),
  skills: yup.object().shape({
    title: yup.string().required(),
    card: yup
      .array()
      .of(
        yup.object().shape({
          subtitle: yup.string(),
          stack: yup.array().of(yup.string()),
        })
      )
      .test(function (cards) {
        if (!cards) return false;
        return cards.some((card) => !!card.subtitle?.trim());
      })
      .required(),
  }),
  projects: yup.object().shape({
    title: yup.string().required(),
    project: yup
      .array()
      .of(
        yup.object().shape({
          projectName: yup.string().required(),
          role: yup.string().required(),
          date: yup.string().required(),
          summary: yup.string().required(),
          achievements: yup
            .array()
            .of(
              yup.string().required()
            )
            .required(),
          technology: yup
            .array()
            .of(
              yup.object().shape({}).required()
            )
            .required(),
        })
      )
      .required(),
  }),
});