fetch('http://dnd5eapi.co/api/classes/')
.then(function(response) {
  return response.json();
})
.then(function(jsonifiedResponse) {
  getElements(jsonifiedResponse);
});

const getElements = function(response) {
  console.log(response);
}