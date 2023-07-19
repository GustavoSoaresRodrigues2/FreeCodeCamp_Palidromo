function palindrome(str) {

  str = str.toLowerCase().replace(/[\W_]/g, '');
  return str === str.split('').reverse().join('');
}
palindrome("1 eye for of 1 eye.");