export const parseHtml = (str: string) =>
  str.replace(/<[^>]+>/g, "").replaceAll(/&lt;|&gt;/g, "");
