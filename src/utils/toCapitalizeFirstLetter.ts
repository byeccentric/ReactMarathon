const toCapitalizeFirstLetter = (data?: string | null): string => {
  if (data) {
    return data[0].toUpperCase() + data.substring(1).toLowerCase();
  }
  return '';
};

export default toCapitalizeFirstLetter;
