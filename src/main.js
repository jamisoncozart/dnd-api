import { dnd_Service } from './dnd-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Character } from './character.js';
import { Descriptions } from './charDescriptions.js';

$(document).ready(function() {
  const character = new Character();
  const dndObject = new dnd_Service();
  const descriptions = new Descriptions();
  const classDiv = $("#classes");
  const raceDiv = $("#races");
  // Classes
  dndObject.getClasses().then(function(data) {
    let appendString = "";
    for(let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].name);
      appendString += `<div id="${data.results[i].index}" class='charClass card card-default'><div class="card-header"><h2>${data.results[i].name}</h2></div><div class="card-body"><p>${descriptions[data.results[i].index]}</p></div></div>`;
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
    $("#name").show();
  });
  
  $("#formName").submit(function(event) {
    event.preventDefault();
    let name = $("#inputName").val();
    character.addName(name);
    $("#formName").hide();
    $("#charSheet").show();
    $("#charName").html(character.name);
    $("#charClass").html(character.charClass);
    $("#charRace").html(character.race);
    // stats //
  });
  $("#skillPoints").on('click', '.stat', function(event) {
    event.preventDefault();
    if(character.skillPoints > 0) {
      character[this.id]++;
      character.skillPoints--;
      console.log(character);
    } else {
      alert("You've used all your skill points!");
    }
  })
});