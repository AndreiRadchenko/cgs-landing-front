const setMessageTime = (): string => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const convertedHours = hours > 12 ? hours - 12 : hours;

  const formatedTime = `${
    convertedHours < 10 ? `0${convertedHours}` : convertedHours
  }:${minutes < 10 ? `0${minutes}` : minutes} ${hours > 12 ? `PM` : `AM`}`;

  return formatedTime;
};

export default setMessageTime;
