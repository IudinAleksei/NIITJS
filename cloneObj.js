const cloneObj = (sourceObj) => {
  if(typeof sourceObj !== 'object') {
    console.error('The argument must be object');
    return;
  }

  const targetObj = Object.assign({}, sourceObj);

  for (prop in targetObj) {
    if (typeof targetObj[prop] === 'object') {
      targetObj[prop] = cloneObj(targetObj[prop]);
    }
  };

  return targetObj;
}

// export default cloneObj;
