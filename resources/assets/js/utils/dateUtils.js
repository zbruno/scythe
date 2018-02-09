import moment from 'moment';

export function momentOrNull(date) {
  if (!date) {
    return null;
  }
  return moment(date);
}
