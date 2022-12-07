export const formalizeData = (
  oldData: {
    type: string;
    label: string;
  }[]
) => {
  return oldData
    .map(
      (option) =>
        `<p><label class=${
          option.type === "radio"
            ? "__se__t-radio-input"
            : "__se__t-checkbox-input"
        }>${option.label}</label></p>`
    )
    .join("");
};
