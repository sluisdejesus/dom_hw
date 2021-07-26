document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const plantListItem = createPlantListItem(event.target);
    const plantList = document.querySelector('#plant-list');
    plantList.appendChild(plantListItem);
  
    event.target.reset();
  }
  
  const createPlantListItem = function (form) {
    const plantListItem = document.createElement('li');
    plantListItem.classList.add('plant-list-item');
  
    const plant = document.createElement('h2');
    plant.textContent = form.plant.value;
    plantListItem.appendChild(plant);
  
    const latin_name = document.createElement('h3');
    latin_name.textContent = form.latin_name.value;
    plantListItem.appendChild(latin_name);
  
    const family = document.createElement('p');
    family.textContent = form.family.value;
    plantListItem.appendChild(family);
  
    return plantListItem;
  }
  
  const handleDeleteAllClick = function () {
    const plantList = document.querySelector('#plant-list');
    plantList.innerHTML = '';
  }