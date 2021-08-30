import $ from 'jquery';
import Entry from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#journal-entry-form').submit(function(event) {
    event.preventDefault();
    const title = $('#title').val();
    const body = $('#body').val();
    const date = $('#date').val();
    const entry = new Entry(title, body, date)
    const entryDate = entry.date;
    const entryTitle = entry.title;
    const entryBody = entry.body;
    $('#journal').append("<p>" + entryDate + "</p>");
    $('#journal').append("<p>" + entryTitle + "</p>");
    $('#journal').append("<p>" + entryBody + "</p>");
    $('#journal').append("<p>" + entry.wordCount() + "</p>");
    $('#journal').append("<p>" + entry.vowelCount() + "</p>");
    $('#journal').append("<p>" + entry.consonantCount() + "</p>");
  });
});