import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    const word = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
    function getElements(response) {
      $('.definition1').text(`The definition of ${word} is ${response[0].meanings[0].definitions[0].definition}`);
      $('.definition2').text(`In other words ${word} is ${response[0].meanings[0].definitions[1].definition}`);
      $('.synonyms').text(`the synonym of ${word} is ${response[0].meanings[1].synonyms[0]}`);
      $('.antonyms').text(`the antonym of ${word} is ${response[0].meanings[0].antonyms[0]}`);
      $('.example1').text(`an example of ${word} is ${response[0].meanings[0].definitions[0].example}`);
      $('.example2').text(`another example of ${word} is ${response[0].meanings[0].definitions[1].example}`);
      $('.partOfSpeech').text(`the part of speech of ${word} is ${response[0].meanings[1].partOfSpeech}`);
    }
  });
});