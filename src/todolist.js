function toggleTodos(e) {
    const spanText = e.innerText;
    const todo_list = document.getElementById("todo_list");
    if (spanText === "展开") {
        e.innerText = "收起";
        todo_list.hidden = false;
    } else {
        e.innerText = "展开";
        todo_list.hidden = true;
    }
}

function addNewTodo(e) {
    const value = e.value;
    if (event.keyCode === 13) {
        const new_todo_li = document.createElement("li");
        new_todo_li.setAttribute("class", "items");
        const complete = document.createElement("div");
        complete.setAttribute("class", "complete");
        complete.setAttribute("onclick", "completeTodo(this)");
        const todo = document.createElement("div");
        todo.setAttribute("class", "todo");
        todo.innerText = value;
        const deleteTodo = document.createElement("div");
        deleteTodo.setAttribute("class", "delete");
        deleteTodo.setAttribute("onclick", "deleteTodo(this)");
        new_todo_li.appendChild(complete);
        new_todo_li.appendChild(todo);
        new_todo_li.appendChild(deleteTodo);

        document.getElementById("todo_list").appendChild(new_todo_li);
    }
    countLeftTodo();
}

function completeTodo(e) {
    if (currentStyle(e).backgroundImage === "none") {
        e.style.backgroundImage = "url(\"../picture/gou.png\")";
        e.nextElementSibling.style.textDecoration = "line-through";
    } else {
        e.style.backgroundImage = "";
        e.nextElementSibling.style.textDecoration = "";
    }
    countLeftTodo();
}

function deleteTodo(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
    countLeftTodo();
}

function showAll() {
    const cNode = document.getElementById('todo_list').getElementsByTagName('li');
    for (let node of cNode) {
        node.hidden = false;
    }
}

function showActive() {
    const cNode = document.getElementById('todo_list').getElementsByTagName('li');
    for (let node of cNode) {
        node.hidden = currentStyle(node.children[0]).backgroundImage !== "none";
    }
}

function showCompleted() {
    const cNode = document.getElementById('todo_list').getElementsByTagName('li');
    for (let node of cNode) {
        node.hidden = currentStyle(node.children[0]).backgroundImage === "none";
    }
}

function clearCompleted() {
    const cNode = document.getElementById('todo_list').getElementsByTagName('li');
    for (let node of cNode) {
        if(currentStyle(node.children[0]).backgroundImage !== "none"){
            node.parentNode.removeChild(node);
        }
    }
}

function currentStyle(element) {
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
}

function countLeftTodo(){
    const cNode = document.getElementById('todo_list').getElementsByTagName('li');
    let count = 0;
    for (let node of cNode) {
        if(currentStyle(node.children[0]).backgroundImage === "none"){
            count += 1;
        }
    }
    document.getElementById("left_item").innerText = count + " item left";
}

window.onload = function(){
    countLeftTodo();
};
