let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTMl = document.getElementById('new-start-date').value;
    console.log(document.getElementById('new-start-date').value);
    row.insertCell(3).innerHTMl = document.getElementById('new-end-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});
//creates a button find a method to the button on clicks property so that when its clicked it will delete the row the button is assigned to.
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id:item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
};