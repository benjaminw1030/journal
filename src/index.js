import $ from 'jquery';
import Entry from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#journal-entry-form').submit(function (event) {
  event.preventDefault();
  const title = $('#title').val();
  const body = $('#body').val();
  const date = $('#date').val();
  const entry = new Entry(title, body, date)
  const entryDate = entry.date;
  const entryTitle = entry.title;
  const entryBody = entry.body;
  $('#journal').append("<div class='card'><h4>" + entryDate + "</h4><h4>" + entryTitle + "</h4><h5>" + entry.getTeaser() + "</h5><p>" + entryBody + "</p><p>This entry contains " + entry.wordCount() + " words.</p><p>This entry contains " + entry.vowelCount() + " vowels.</p><p>This entry contains " + entry.consonantCount() + " consonants.</p></div>");
});