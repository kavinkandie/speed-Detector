function myGrading(name, score) {
  let result;

  switch(true) {
      case (score >= 79):
          result = 'A';
          break;
      case (score >= 60):
          result = 'B';
          break; 
      case (score >= 50):
          result = 'C';
          break;
      case (score >= 40):
          result = 'D';
          break;
      default:
          result = 'E';
  }

  return `${name}: ${result}`;
}
console.log(myGrading('sam', 55));   
console.log(myGrading('june', 60));  
console.log(myGrading('mark', 45));   
console.log(myGrading('kiptoo', 71)); 
