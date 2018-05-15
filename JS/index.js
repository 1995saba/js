var createButton = document.getElementById('button');
var parentDiv = document.createElement('div');
var childDiv = document.createElement('div');
var editButton = document.createElement('button');
editButton.innerText='edit';
var deleteButton = document.createElement('button');
deleteButton.innerText='delete';
var saveButton=document.createElement('button');
saveButton.innerText='save';
var input=document.createElement('input');
input.setAttribute("type", "text");

function createWord(){
    var mainInput = document.getElementById("text").value;
    childDiv.innerText=mainInput;
    document.body.appendChild(parentDiv);
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(editButton);
    parentDiv.appendChild(deleteButton);
}

function editWord(){
    debugger
    var div=this.parentElement;
    var textDiv=div.querySelector('div');
    input.value=textDiv.value;
    var newDiv=div;
    newDiv.replaceChild(input, textDiv);
    newDiv.replaceChild(saveButton, editButton);
    document.body.replaceChild(newDiv, div);
}

function saveWord(){
    var div=this.parentElement;
    var input=div.querySelector('input');
    childDiv.innerText=input.value;
    var newDiv=div;
    newDiv.replaceChild(childDiv, input);
    newDiv.replaceChild(editButton, saveButton);
    document.body.replaceChild(newDiv, div);
}

function deleteWord(){
    var div=this.parentElement;
    var newDiv=div;
    newDiv.appendChild(childDiv);
    newDiv.appendChild(editButton);
    document.body.removeChild(div);
}

createButton.onclick=createWord;
saveButton.onclick=saveWord;
editButton.onclick=editWord;    
deleteButton.onclick=deleteWord;