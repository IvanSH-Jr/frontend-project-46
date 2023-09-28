const fileParser = (fileData, extention) => {
  switch (extention) {
    case 'json':
      return JSON.parse(fileData);
      break;
    case 'yaml':
      return 'yaml';
      break;
    default:
      throw Error(`This type is unknown - ${extention}!`);
  }
};

export { fileParser };
