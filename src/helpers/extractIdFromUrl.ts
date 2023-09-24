export const extractIdFromUlr = (url: string): number => {
  const splited = url.split("/").filter((string: string) => string !== "");
  return +splited[splited.length - 1];
};
