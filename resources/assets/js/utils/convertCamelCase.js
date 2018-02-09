import { camelCase, isArray, isPlainObject, forEach } from 'lodash';

export default function convertToCamelCase(object) {
  const camelCased = {};
  let tempValue;

  if (isPlainObject(object)) {
    forEach(object, (value, key) => {
      tempValue = value;

      if (isArray(value)) {
        tempValue = value.map(item => convertToCamelCase(item));
      } else if (isPlainObject(value)) {
        tempValue = convertToCamelCase(value);
      }

      camelCased[camelCase(key)] = tempValue;
    });

    return camelCased;
  } else if (isArray(object)) {
    return object.map(value => {
      if (isArray(value)) {
        tempValue = value.map(item => convertToCamelCase(item));
      } else if (isPlainObject(value)) {
        tempValue = convertToCamelCase(value);
      } else {
        tempValue = value;
      }

      return tempValue;
    });
  }

  return object;
}
