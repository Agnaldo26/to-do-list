const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', function(e) /* quando um evento ocorre, um objeto de evento é passado para a função como o primeiro parâmetro. O tipo de objeto de evento depende do evento especificado. Por exemplo, o evento "click" pertence ao objeto MouseEvent.*/{
    e.preventDefault();
    const listName = newListInput.value;
    console.log(newListInput.value)
    if(listName === null || listName === '') return;
    const list =  createList(listName);
    newListInput.value = null;
    lists.push(list)
    render();
})

function createList(name){
    return{id: Date.now().toString(), name: name};

}

function render(){
    clearElement(listContainer);
    lists.forEach(function(list){
        const item = document.createElement('li');
        item.classList.add['item'];
        item.innerText = list.name;
        listContainer.appendChild(item)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}