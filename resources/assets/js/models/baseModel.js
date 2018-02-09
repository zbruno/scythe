import { v4 } from 'uuid';
import { extendObservable } from 'mobx';
import { momentOrNull } from 'js/utils/dateUtils';
import convertToCamelCase from 'js/utils/convertCamelCase';

export default class Model {
  constructor(rawObject, dateKeys = [], id = `model__${v4()}`) {
    this.id = rawObject.id || id;
    dateKeys.forEach(date => rawObject[date] = momentOrNull(rawObject[date]));
    extendObservable(this, convertToCamelCase(rawObject));
  }
}
