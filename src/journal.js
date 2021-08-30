export default function Entry(title, body, date) {
  this.title = title;
  this.body = body;
  this.date = date;
}

Entry.prototype.wordCount = function() {
  return "I can't answer that yet!";
}

Entry.prototype.vowelCount = function() {
  return "I can't answer that yet!";
}

Entry.prototype.consonantCount = function() {
  return "I can't answer that yet!";
}

Entry.prototype.getTeaser = function() {
  return "I can't answer that yet!";
}