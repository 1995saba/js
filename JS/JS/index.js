var createButton = document.getElementById('button');

function createWord(){
    var parentDiv = document.createElement('div');
    var childDiv = document.createElement('div');
    var editButton = document.createElement('button');
    editButton.innerText='edit';
    editButton.type='editButton';
    editButton.onclick=editWord;
    var deleteButton = document.createElement('button');
    deleteButton.innerText='delete';
    deleteButton.type='deleteButton';
    deleteButton.onclick=deleteWord;
    var mainInput = document.getElementById("text").value;
    childDiv.innerText=mainInput;
    document.body.appendChild(parentDiv);
    parentDiv.appendChild(childDiv);
    parentDiv.appendChild(editButton);
    parentDiv.appendChild(deleteButton);
}

function editWord(){
    var div=this.parentElement;
    var saveButton=document.createElement('button');
    saveButton.innerText='save';
    saveButton.onclick=saveWord;
    var input=document.createElement('input');
    input.setAttribute("type", "text");
    var editButton=div.querySelector('button');
    var textDiv=div.querySelector('div');
    input.value=textDiv.innerText;
    var newDiv=div;
    newDiv.replaceChild(input, textDiv);
    newDiv.replaceChild(saveButton, editButton);
    document.body.replaceChild(newDiv, div);
}

function saveWord(){
    var div=this.parentElement;
    var editButton = document.createElement('button');
    editButton.innerText='edit';
    editButton.onclick=editWord;
    var saveButton=div.querySelector('button');
    
    var input=div.querySelector('input');
    var childDiv = document.createElement('div');
    childDiv.innerText=input.value;
    var newDiv=div;
    newDiv.replaceChild(childDiv, input);
    newDiv.replaceChild(editButton, saveButton);
    document.body.replaceChild(newDiv, div);
}

function deleteWord(){
    var div=this.parentElement;
    document.body.removeChild(div);
}

createButton.onclick=createWord;