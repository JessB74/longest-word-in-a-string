/*Tuesday: Find the longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms, you are allowed to use the split() method.



findLongestWord("The quick brown fox jumped over the lazy dog")  // should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog"). // should return 6.
findLongestWord("May the force be with you")  // should return 5.


 */


// let mainString = "Jessica is learning JavaScript"
// mainString = mainString.split(" ")

function longWord(String){
  let mainString = String.split(" ")
  // mainString = let mainString = "Jessica is learning JavaScript"


 let longestWord = 0
 for(let i = 0; i<mainString.length;i++){
   if(mainString[i].length>longestWord){
     longestWord = mainString[i].length
  
   }
 
 }

   return longestWord
}
