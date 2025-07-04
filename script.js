/* English to Pig Latin Translator
Description: Create a program that translates English text to Pig Latin.
Requirements:
The program should take an English phrase as an input from process.argv.
Convert each word to Pig Latin:
If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
Example: Happy = appyh + ay = appyhay
If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
Example: Child = Ildch + ay = Ildchay
If a word starts with a vowel add the word “way” at the end of the word.
Example: Awesome = Awesome +way = Awesomeway
Output the translated phrase to the console.
Example: node pigLatin.js "Pig Latin is hard to speak" # Output: Igpay Atinlay isway ardhay otay eakspay
 */
console.log(process.argv); //[nodePath,scriptPath,arg1,arg2,...]
const text = process.argv.slice(2).join(" ");
console.log(text);

const translate = text => {
  // turn the text into an array of words
  const words = text.split(" ");

  console.log(words);

  const vowels = ["a", "e", "i", "o", "u"];

  const translatedWords = [];

  for (let word of words) {
    if (!vowels.includes(word.charAt(0)) && vowels.includes(word.charAt(1))) {
      word = word.substring(1, word.length) + word.slice(0, 1) + "ay";
      translatedWords.push(word);
      continue; //check the next word
    }

    if (!vowels.includes(word.charAt(0)) && !vowels.includes(word.charAt(1))) {
      word = word.substring(2, word.length) + word.slice(0, 2) + "ay";
      translatedWords.push(word);
      continue; //check the next word
    }
    if (vowels.includes(word.charAt(0))) {
      word = word + "way";
      translatedWords.push(word);
      continue; //check the next word
    }
  }

  return translatedWords.join(" ");
};
console.log(translate(text));
// test1: node script.js  with cours lade stop aude
//result2: ourscay adelay opstay audeway

//test2: node script.js "Pig Latin is hard to speak"
//result2: Igpay Atinlay isway ardhay otay eakspay
