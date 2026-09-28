/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
     let a = command.replaceAll("()","o");
     let b = a.replaceAll("(al)","al");
  return b;
};