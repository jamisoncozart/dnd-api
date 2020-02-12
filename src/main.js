import { dnd_Service } from './dnd-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './character.js';


$(document).ready(function() {
  const character = new Character();
  const dndObject = new dnd_Service();
  const classDiv = $("#classes");
  const raceDiv = $("#races");
  // Classes
  dndObject.getClasses().then(function(data) {
    let appendString = "";
    for(let i = 0; i < data.results.length; i++) {
      appendString += `<div id="${data.results[i].index}" class='charClass card card-default'><div class="card-header"><h2>${data.results[i].name}</h2></div><div class="card-body"><p>${data.results[i].url}</p></div></div>`;
    }
    classDiv.append(appendString);
  });
  classDiv.on('click', '.charClass', function() {
    character.addClass(this.id);
    classDiv.hide();
    raceDiv.show();
  });
  // Races
  dndObject.getRaces().then(function(data) {
    let appendString = "";
    for(let i = 0; i < data.results.length; i++) {
      appendString += `<div id="${data.results[i].index}" class='race card card-default'><div class="card-header"><h2>${data.results[i].name}</h2></div><div class="card-body"><p>${data.results[i].url}</p></div></div>`;
    }
    raceDiv.append(appendString);
  });
  raceDiv.on('click', '.race', function() {
    character.addRace(this.id);
    raceDiv.hide();
    console.log(character);
  });
});