function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
    console.log(array)
  return array;
}
}
function johnLennonFacts(facts){
  var excitingFacts = []
  while (facts.length >0){
    excitingFacts.push(facts.pop() + "!!!")
  }
  return excitingFacts
}
function iLoveTheBeatles(number){
  var statements =[]
  var iteration = 0
  do{
    statements.push("I love the Beatles!")
    iteration++
  } while(iteration < 15)
  return statements
}