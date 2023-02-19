const formatNumber = (numberString: string, precision: number,  addSign: boolean, currencySymbol?: string ) => {
  let numStr = null as (string | null)
  const makeNegative = parseFloat(numberString) < 0 && parseFloat(numberString) < -0.0000000001

  // round and format to local format e.g. 1000.2312 = 1000.23 || 1000,23
  if (parseFloat(numberString) || parseFloat(numberString) == 0) {
    numStr = Math.abs(parseFloat(numberString)).toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: precision })
  } else {
    return null
  }

  // in step one we convert numbers to positive for the sake of adding currency symbols, now is the time
  // to add back the '-' symbol if the number was indeed negative
  if (makeNegative)
    numStr = '-' + numStr

  // Add '+' sign to string if number is positive
  if (addSign) {
    if (parseFloat(numberString) > 0)
      numStr = '+' + numStr
  }

  return numStr
}



var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num: number) {
  let numString
  let n
  if ((numString = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + numString).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n)
    return;
  let str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
  return str;
};

export { formatNumber, inWords }