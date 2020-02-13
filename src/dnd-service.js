export class dnd_Service {
  async getClasses() {
    let response = await fetch('http://dnd5eapi.co/api/classes/');
    let postJSON = await response.json();
    return postJSON;
  }
  async getRaces() {
    let response = await fetch('http://dnd5eapi.co/api/races/');
    let postJSON = await response.json();
    return postJSON;
  }
}