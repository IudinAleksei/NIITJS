const cloneObj = (sourceObj) => {
  const targetObj = Object.assign({}, sourceObj);

  for (prop in targetObj) {
    if (typeof targetObj[prop] === 'object') {
      targetObj[prop] = cloneObj(targetObj[prop]);
    }
  };

  return targetObj;
}

export default cloneObj;
