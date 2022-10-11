import moment from 'moment';

export const formatDate = (value) => {
  /* Takes the date and returns it in this format 'Mar 21' */
  return moment(value).format('MMM D, YYYY  hh:mm A');
};

export const formatAmount = (amount) => {
  if(!amount) return ''

   if (typeof amount === 'number') amount = amount.toString();
  // format number 1000000 to 1,234,567
  return '₦' + amount.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

 export function formatNumber(number){
  if (!number) return ""
  if (typeof number === 'number') number = number.toString()
  // return   number.substr(0,3)+"-"+number.substr(3,3)+"-"+number.substr(6,3);
   return number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

formatNumber()




