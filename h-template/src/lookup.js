export default function lookup(dataObj, keyName) {
  if (keyName.includes(".") && keyName !== ".") {
    const keys = keyName.split(".");
    let temp = dataObj;
    for (let i = 0; i < keys.length; i++) {
      temp = temp[keys[i]];
    }
    return temp;
  }
  // no dot
  return dataObj[keyName];
}
