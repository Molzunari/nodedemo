// DECLARITIVE
const text = "Kevin ";

age = 16

AGE_CAN_DRIVE = 16

// CONDITIONAL OPERATOR, WITH BOOLEAN EXPRESSION, BRANCHING
if(age >= AGE_CAN_DRIVE){
  console.log("Can Drive: ZOOM ZOOM"); // IF TRUE
}else{
  console.log("Can't Drive. So Sorry!"); // IF FALSE
}
// FUNCTION
function showName(name, number){
  return name + " " + number;
}

// LOOPS - REPEAT # iterations
for(i = 0; i < 5; i++ ){ // i++ is same as i = i + 1
console.log(text + i);
  result = showName(text, i);
  console.log(result);
}
console.log("i is now not less than 5")