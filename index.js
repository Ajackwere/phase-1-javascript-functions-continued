// code your solution here
function saturdayFun(target = "roller-skate") {
  return `This Saturday, I want to ${target}!`;
}
function mondayWork(target = "go to the office") {
  return `This Monday, I will ${target}.`;
}
// function wrapAdjective(flair = "*", string2 = "a dedicated programmer") {
//   return function (adjective = "special") {
//     return `You are ${flair}${adjective}${flair}${string2}${flair}!`;
//   };
// }
function wrapAdjective(flair = "*", string2 = "a dedicated programmer") {
  const part1 = "You are";
  return function (adjective = "special") {
    return `${part1} ${flair}${adjective}${flair}!`;
  };
}
