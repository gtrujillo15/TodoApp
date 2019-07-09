// If item is entered, add item
function checkEnter(event) {
    event.code === 'Enter' ? addItem() : console.log('press enter')
    if (event.code === 'Enter') {
        console.log(event, 'event');
        addItem();
    }
}

// If button is pressed and nothing is entered, do not add
function addItem() {
    const itemInput = document.getElementById('newItemInput');
    if (!itemInput.value) {
        return;
    }

    console.log('new item', itemInput.value);
    const newItem = create();
    const deleteButton = createDelete();
    deleteButton.innerText = " " + 'Complete';
    newItem.innerText = itemInput.value;
    newItem.innerText = itemInput.value;
    const ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(newItem);
    itemInput.value = '';
    newItem.appendChild(deleteButton);
    document.getElementById(deleteButton).style.paddingLeft = "20px";

}

function create() {
    return document.createElement('li');
}

function createDelete() {
    return document.createElement('button');
}

// query
/*completeItem.addEventListener("click", function() {
   // querySelector
    if (deleteButton === 'click') {
        // move li to completed ul list
    }   return;
        display hidden (make class and when it clicks, the class will be applied to make it hidden) if clicked, add item to completedul
})
*/


/// commented items are me trying to figure out the addeventlistener
// query selector for the ul

