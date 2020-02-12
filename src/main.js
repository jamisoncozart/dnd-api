import { dnd_Service } from './dnd-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './character.js';


$(document).ready(function() {
  const character = new Character();
  const dndObject = new dnd_Service();
  dndObject.getClasses().then(function(data) {
    let appendString = "";
    for(let i = 0; i < data.results.length; i++) {
      appendString += `<div id="${data.results[i].index}" class='charClass card card-default'><div class="card-header"><h2>${data.results[i].name}</h2></div><div class="card-body"><p>${data.results[i].url}</p></div></div>`;
    }
    $("#classes").append(appendString);
  });
  $("#classes").on('click', '.charClass', function() {
    character.addClass(this.id);
    console.log(character);
  })
});