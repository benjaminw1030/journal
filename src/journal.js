export default function Entry(title, body, date) {
  this.title = title;
  this.body = body;
  this.date = date;
}

Entry.prototype.wordCount = function() {
  let bodyWords = this.body.split(" ");
  let titleWords = this.title.split(" ");
  return bodyWords.length + titleWords.length;
}

Entry.prototype.vowelCount = function() {
  const vowels = ["a","e","i","o","u"];
  let bodyLetters = this.body.toLowerCase().split("");
  let titleLetters = this.title.toLowerCase().split("");
  let bodyVowels = bodyLetters.filter(letter => vowels.includes(letter));
  let titleVowels = titleLetters.filter(letter => vowels.includes(letter));
  return bodyVowels.length + titleVowels.length;
}

Entry.prototype.consonantCount = function() {
  const vowels = ["a","e","i","o","u"];
  let bodyOnlyLetters = this.body.replace(/[^a-z]/gi, "");
  let titleOnlyLetters = this.title.replace(/[^a-z]/gi, "");
  let bodyLetters = bodyOnlyLetters.toLowerCase().split("");
  let titleLetters = titleOnlyLetters.toLowerCase().split("");
  let bodyConsonant = bodyLetters.filter(letter => !vowels.includes(letter));
  let titleConsonant = titleLetters.filter(letter => !vowels.includes(letter)); 
  return bodyConsonant.length + titleConsonant.length;
}

Entry.prototype.getTeaser = function() {
  return "I can't answer that yet!";
}