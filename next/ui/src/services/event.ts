import ReactGA from 'react-ga';

if (typeof window !== "undefined") {
  ReactGA.initialize('UA-175242489-1', {
    debug: true,
  });

  ReactGA.pageview(window.location.pathname + window.location.search);
}

export function scrollEA(data: string) {
  const scrollToBlockEA = (block) => {
    ReactGA.event({
      category: "Scroll Block",
      action: "ScrollToBlock",
      label: `Scroll to ${block}`,
    });
  };

  const bloks: Array<{ nameBlock: string | null; distanceToTop: number }> = [];

  document.querySelectorAll(`[${data}]`).forEach((e) => {
    bloks.push({
      nameBlock: e.getAttribute(data),
      distanceToTop: e.getBoundingClientRect().top,
    });
  });

  document.addEventListener("scroll", () => {
    bloks.forEach((element, index) => {
      if (
        element &&
        window.scrollY > element.distanceToTop - window.scrollY / 8
      ) {
        scrollToBlockEA(element.nameBlock);
        delete bloks[index];
      }
    });
  });
}

export const clickSocialLinkEA = (link) => {
  ReactGA.event({
    category: "Social Link",
    action: "clickToSocialLink",
    label: `${link}`,
  });
};

export const onChangeSlideEA = (sliderInfo) => {
  ReactGA.event({
    category: `Slider ${sliderInfo.sliderName}`,
    action: "onSLideChange",
    label: `Current slide ${sliderInfo.slide + 1}`,
  });
};

export const startProjectEA = () => {
  ReactGA.event({
    category: "Start Project",
    action: "Click the button",
    label: "Click start project button",
  });
};

export const sendFormEA = (values) => {
  ReactGA.event({
    category: "Send Form",
    action: "Send Form",
    label: `Validation was successful`,
  });
};

export const clickDiscussTheDitails = (link) => {
  ReactGA.event({
    category: "Click details",
    action: "Click details",
    label: `${link}`,
  });
};

export const clickNavLinks = (link) => {
  ReactGA.event({
    category: "Click navlink",
    action: "Click navlink",
    label: `${link}`,
  });
};

export const clickProgectLinks = (link) => {
  ReactGA.event({
    category: "Click projects button",
    action: "Click projects button",
    label: `${link}`,
  });
};

export const clickFeedbackButtons = (link) => {
  ReactGA.event({
    category: "Click Read more button",
    action: "Click Read more button",
    label: `${link}`,
  });
};