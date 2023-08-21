// const publickDomainList = ["gmail", "yahoo", "outlook", "icloud"];
const publickDomainList: string[] = [];

export const isEmailDomainPublic = (email: string) => {
  return publickDomainList.some((e) => email?.toLowerCase().includes(`@${e}.`));
};
