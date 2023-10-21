export const isDisabled = (
  str1: string | undefined,
  str2: string | undefined
) => {
  return str1?.length && str2?.length ? true : false;
};
