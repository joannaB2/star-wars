export const extractIdFromUlr = (url: string): number => {
  const splited = url.split("/");
  return +splited[splited.length - 1];
};
