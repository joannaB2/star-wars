export const getInitials = (name: string): string => {
  const splitedNames = name.split("");
  let initials = splitedNames[0].substring(0, 1).toLocaleUpperCase();
  if (splitedNames.length > 1) {
    initials += splitedNames[splitedNames.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
