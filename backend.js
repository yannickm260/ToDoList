let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.onclick = function(){
    let paragraph;
    // verifier si l'input n'est pas vide
    if(inputField !=""){
        paragraph = document.createElement('p') // creer un paragraphe
    }
    paragraph.innerText = inputField.value ; //valoriser ce paragraphe avec le contenu de l'input
    
    //styliser le paragraphe
    paragraph.classList.add('bg-blue-400','text-black','rounded-lg','pl-2','py-3','px-2','m-2','w-full','relative','-left-2','break-all','cursor-pointer','last:mb-0','animate-anime')



    toDoContainer.appendChild(paragraph) // inserer le paragraphe dans l'element toDoContainer

    // vider l'input quand le paragraphe est ajoutE
    inputField.value = ""

    // barrer le paragraphe apres avoir clique dessus
    
    paragraph.addEventListener('click',function(){
        paragraph.classList.remove('bg-blue-400')
        paragraph.classList.add('bg-red-400','line-through')
    })

    // supprimer le paragraphe

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })

}