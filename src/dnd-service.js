// fetch('http://dnd5eapi.co/api/classes/')
// .then(function(response) {
//   return response.json();
// })
// .then(function(jsonifiedResponse) {
//   getElements(jsonifiedResponse);
// });

// const getElements = function(response) {
//   console.log(response);
// }

export class dnd_Service {
  async getClasses() {
    let response = await fetch('http://dnd5eapi.co/api/classes/');
    let postJSON = await response.json();
    return postJSON;
  }
}