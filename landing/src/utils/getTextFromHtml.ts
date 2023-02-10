export const getTextFromHtml = (str: string) =>
  str.replace(/<[^>]+>/g, "").replaceAll(/&lt;|&gt;/g, "");
