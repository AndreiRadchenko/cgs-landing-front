export const getInputsFromLabels = (options: string) => {
  const isRadio = options.includes("__se__t-radio-input");

  const separators = [
    isRadio
      ? '<label class="__se__t-radio-input">'
      : '<label class="__se__t-checkbox-input">',
    isRadio
      ? "<label class=__se__t-radio-input>"
      : "<label class=__se__t-checkbox-input>",
    "</label>",
  ];

  return options
    .split(new RegExp(separators.join("|"), "g"))
    .filter((el) => !el.includes("p>"))
    .map((label) => {
      return {
        type: isRadio ? "radio" : "checkbox",
        label,
        price: 0,
        percInTheEnd: 0,
        hours: 0,
        uxui: 0,
        pm: 0,
        qa: 0,
      };
    });
};
