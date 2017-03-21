function firstVowel(string){
  var firstVowelIndex = string.search(/[AEIOU]/i);
  return firstVowelIndex;
}

function pigLatin(string) {
  var sentence = [];
  var words = [];
  var translated = [];

  // Check if the string is valid
  if (string === "" || typeof string !== "string") {
    throw new Error("Please enter a valid string.");
  }

  // create an array "sentence" where each element is a word of the sentence
  sentence = string.split(" ");

  for (var i = 0; i < sentence.length; i++ ){

  // Goes over all the words into the sentence, put them in lowercase and split each letter in an array.
  words[i] = sentence[i].toLowerCase().split("");

  // First case where the word starts with a vowel
    if (words[i].join("").search(/[AEIOU]/i) === 0) {
      words[i] = words[i].join("") + "-ay";
    }

  // Second case where the word starts with a consonant
    else{
      var min = firstVowel(words[i].join(""));
      var start = words[i].slice(min,words[i].length).join("");
      var end = words[i].slice(0,min).join("");
      words[i] = start + "-" + end + "ay";

    }

  // Pushes the word modified in the translated array

    translated.push(words[i]);
  }

  return translated.join(" ");
}



function pigLatinReverse(piggedWord) {
  if (piggedWord.search(/-?ay/g) <= 0) {
      throw new Error("Not a valid Pig-Latin string");
    }
  return piggedWord.slice(piggedWord.search('-') + 1, -2 ) + piggedWord.slice( 0, piggedWord.search('-'));
}

console.log(pigLatinReverse("anana-bay"));


