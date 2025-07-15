// navigator.userwindow
// location.hostname
// location.href
// EXAMPLE 1
document.getElementById("changeTextButton" )
.addEventListener('click', function(){
   let para= document.getElementById("myparagraph");
   para.innerText="The paragraph is changed";
});

// EXAMPLE 2
document.getElementById("highlightfirstCity").addEventListener("click", function () {
    document.getElementById("citiesList").firstElementChild.classList.add("highlight");
  });

//   EXAMPLE 3
document.getElementById("changeorder").addEventListener('click', function(){
    const coffee = document.getElementById("coffeetype");
    coffee.style.backgroundColor = "brown";
    coffee.textContent = "Order Changed to Espresso";

});

// EXAMPLE 4
document.getElementById("addNewItem").addEventListener('click', function(){
    let newItem= document.createElement('li');
    newItem.textContent="Eggs";
    const item= document.getElementById("shoppingList").appendChild(newItem);
});

// EXAMPLE 5
document.getElementById("rmv").addEventListener('click', function(){
    let taskList= document.getElementById("taskList");
    // taskList.remove();
    taskList.lastElementChild.remove();
})