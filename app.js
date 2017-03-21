function pigLatin(string) {
  var sentence = [];
  var words = [];
  var translated = [];
  var indexFirstVowel = [];

  // create an array where eahc element is a word of the sentence
  sentence = string.split(" ");

  for (var i = 0; i < sentence.length; i++ ){

  // Goes over all the words into the sentence, put them in lowercase and split each letter in an array.
  words[i] = sentence[i].toLowerCase().split("");

  if (words[i].indexOf("a") >= 0){
    indexFirstVowel.push(words[i].indexOf("a"));
  }
  if (words[i].indexOf("e") >= 0){
    indexFirstVowel.push(words[i].indexOf("e"));
  }
  if (words[i].indexOf("i") >= 0){
    indexFirstVowel.push(words[i].indexOf("i"));
  }
  if (words[i].indexOf("u") >= 0){
    indexFirstVowel.push(words[i].indexOf("u"));
  }
  if (words[i].indexOf("o") >= 0){
    indexFirstVowel.push(words[i].indexOf("o"));
  }

  mini = Math.min.apply(null, indexFirstVowel);

  console.log(words[i]);
  console.log(indexFirstVowel);

    if (words[i][0] === "a" || words[i][0] === "e" || words[i][0] === "i" || words[i][0] === "o" || words[i][0]=== "u") {
      words[i] = words[i].join("") + "ay";
      translated.push(words[i]);
      indexFirstVowel = [];
    }
    else{
      var start = words[i].slice(mini,words[i].length).join("");
      var end = words[i].slice(0,mini).join("");
      words[i] = start + end + "ay";
      translated.push(words[i]);
      indexFirstVowel = [];
    }

  }

  return translated;
}

console.log(pigLatin("omo hjjaa llele"));

