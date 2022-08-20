export const stringTest = (string) => {
  const regex = string.match(/^[가-힣|a-z|A-Z|0-9|]+$/);
  if (regex !== null) {
    return false;
  } else {
    return true;
  }
};
