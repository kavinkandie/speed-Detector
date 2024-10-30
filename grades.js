function myGrading(score) {
    let result
  
    switch(true) {
      case (score >=79):
         result ='distinction';
          break;
      case (result <= 78 && score >= 60):
          result = 'credit';
           break; 
      case (score <= 59 && score>=50):
          result = 'pass';
           break;
         case (score <= 49 && score >= 40):
          result = 'fail';
        break;
      default: (score <= 39)
          result = 'invalid score';
         
  
   }
   return result;
   }
   console.log(myGrading(55));
  