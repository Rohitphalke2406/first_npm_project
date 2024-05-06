// const a = "Rohit";
// console.log(a);


// A simple String manipulator which can make the text into uppercase, lowercase many other stuffs.


function toUpperCase(text) {
  return text.toUpperCase();
}


function toLowerCase(text) {
  return text.toLowerCase();
}


function toTitleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}


function reverseString(text) {
  return text.split('').reverse().join('');
}

module.exports = {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  reverseString
};
