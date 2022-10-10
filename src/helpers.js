import moment from 'moment';

export const formatDate = (value) => {
  /* Takes the date and returns it in this format 'Mar 21' */
  return moment(value).format('MMM D, YYYY  hh:mm A');
};
