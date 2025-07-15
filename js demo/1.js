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
// Example 6

document.getElementById("teaList").addEventListener('click', function(event){
//  console.log(event.target);
if(event.target && event.target.matches('.teaItem')){
    alert("You selected "+ event.target.textContent);
}
});

// EXAMPLE 7
document.getElementById("feedback").addEventListener('submit', function(event){
    alert("submitted");
    event.preventDefault();
    let f= document.getElementById("feedbackInput").value;
    console.log(f);
    document.getElementById("feedbackDisplay").textContent=`Feedback is: ${f}`;
})

// EXAMPLE 8
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domstatus').textContent="DOM fully loaded";
});

// EXAMPLE 9
document.getElementById("togglehighlight").addEventListener('click', function(){
    let text= document.getElementById("destext");
    // text.classList.add("highlight");
    text.classList.toggle("highlight");
});
// let v=document.getElementsByTagName('a')-> to get anchor elements
