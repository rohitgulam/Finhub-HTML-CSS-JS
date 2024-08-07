const form = document.getElementById('input-form');
const input = document.getElementById('input');

// THE PARENT FOR ALL ITEMS 
const listItems = document.getElementById('todo-list-items');

const todoItems = [];

var deleteBtns = []
var editBtns = []

// console.log(listItems);


form.addEventListener('submit', saveItem);


displayItems()

function saveItem (e) {
    e.preventDefault()
    todoItems.push(input.value)
    input.value = '';
    console.log(todoItems)
    displayItems()
    updateDeleteBtns()
    
}




function displayItems(){
    // Clear the list 
    listItems.innerText = ''

    
    for (var i = 0; i <= todoItems.length - 1; i++) {

        // Div for Item (The PARENT ITEM)
        var itemDiv = document.createElement('div');
        itemDiv.classList.add('todo-list-item');
        
        // Div for item name 
        var todoListItemNameDiv = document.createElement('div')
        todoListItemNameDiv.classList.add('todo-list-item-name')
        
        // Paragraph for item title (Child of Item NAme )
        var todoTitleParagraph = document.createElement('p')
        todoTitleParagraph.classList.add('todo-title')
        
        // Change it's text
        todoTitleParagraph.innerText = todoItems[i]
        
        todoListItemNameDiv.appendChild(todoTitleParagraph)
        
        // console.log(todoListItemNameDiv);
        
        
        
        
        
        // Div for actions/buttons (THE PARENT FOR BUTTONS)
        var actionsDiv = document.createElement('div')
        
        
        // Buttons 
        var editButton = document.createElement('button')
        editButton.classList.add('icon')
        editButton.classList.add('edit')
        editButton.id = `edit-${i}`;
        
        // Child of Button
        var editIcon = document.createElement('i');
        editIcon.classList.add('fa-solid')
        editIcon.classList.add('fa-pencil')
        
        editButton.appendChild(editIcon);
        
        
        
        var deleteButton = document.createElement('button')
        deleteButton.classList.add('icon')
        deleteButton.classList.add('delete')
        deleteButton.id = `delete-${i}`;

        
        var deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid')
        deleteIcon.classList.add('fa-trash')
        
        deleteButton.appendChild(deleteIcon);
        
        // Append buttons to actionsDiv
        actionsDiv.appendChild(editButton)
        actionsDiv.appendChild(deleteButton)
        
        // Append divs to todo list item
        itemDiv.appendChild(todoListItemNameDiv)
        itemDiv.appendChild(actionsDiv)
        
        
        
        listItems.appendChild(itemDiv);
        
    }
    
}

function updateDeleteBtns () {
    deleteBtns = document.querySelectorAll('.delete');

    console.log('deleteBtns');
    console.log(deleteBtns);
    

    for (i = 0; i <= deleteBtns.length - 1; i++){
        deleteBtns[i].addEventListener('click', deleteItem)
    }
}

function updateEditBtns () {
    editBtns = document.querySelectorAll('.edit');

    // console.log('deleteBtns');
    // console.log(deleteBtns);
    

    for (i = 0; i <= editBtns.length - 1; i++){
        editBtns[i].addEventListener('click', editItem)
    }
}


function deleteItem(e){

    const clickedItem = e.target.id

    const itemIndex = clickedItem.split('-')[1]

    todoItems.splice(itemIndex, 1);
    
    displayItems()
    updateDeleteBtns()
    
}

function editItem(e){

    const clickedItem = e.target.id

    const itemIndex = clickedItem.split('-')[1]

    todoItems[itemIndex]

    console.log(itemIndex);
    
    
}


