let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.onclick = function(){
    let paragraph;
    // verify if the input is not empty
    if(inputField !=""){
        paragraph = document.createElement('p') // create a paragraph
    }
    paragraph.innerText = inputField.value ; //Fill the paragraph with the input's content
    
    // Style the paragraph
    paragraph.classList.add('bg-blue-400','text-black','rounded-lg','pl-2','py-3','px-2','m-2','w-full','relative','-left-2','break-all','cursor-pointer','last:mb-0','animate-anime')



    toDoContainer.appendChild(paragraph) // insert the paragraph into the toDoContainer element

      // Clear the input field after adding the task
    inputField.value = ""

     // Mark task as completed on click
    
    paragraph.addEventListener('click',function(){
        paragraph.classList.remove('bg-blue-400')
        paragraph.classList.add('bg-red-400','line-through')
    })

    // Delete task on double click

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })

}