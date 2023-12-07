import { urlPattern } from "../consts";

const containsLink = (text: string) => {
  return text.match(urlPattern);
};

export const makeLinksClickable = (text: string) => {
  let links = containsLink(text);
  if (links) {
    links.forEach((link) => {
      const formattedLink =
        '<a href="' + link + '" target="_blank">' + link + "</a>";
      text = text.replace(link, formattedLink);
    });
  }
  return text;
};
