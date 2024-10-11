class Todo{
    static #nextId = 1
    constructor (description){
        this.id = Todo.#nextId++
        this.description = description
    }

    getTodo(){
        return {id: this.id, description: this.description}
    }

    setDescription(newDescription){
        this.description = newDescription
    }
}

function todoListManagemennt(){
    const todos = []

    function addTodo(desc = 'empty task'){
        const todo = new Todo(desc)
        todos.push(todo);
        return todos.length
    }

    function findTodo(searchId){
        return todos.find((todo) => todo.id === searchId) ?? `Cannot find this task id: ${searchId}`
    }

    function findIndexTodo(searchId){
        return todos.findIndex((todo) => todo.id === searchId)
    }

    function removeTodo(removeId){
        const id = findIndexTodo(removeId)
        if(id === -1){
            return `Cannot find this task id: ${removeId}`
        }
        return todos.splice(id, 1)
    }

    function updateTodo(id, newDescription){
        const todo = todos[findIndexTodo(id)]
        if(!todo) return `Cannot find this task id: ${id}`
        todo.setDescription(newDescription)
        return todo
    }

    function getTodos(){
        return todos
    }

    return {addTodo, findTodo, findIndexTodo, removeTodo, updateTodo, getTodos}
}

const {addTodo, findTodo, findIndexTodo, removeTodo, getTodos, updateTodo} = todoListManagemennt()

addTodo("JS homework")
addTodo("Stat homework")
addTodo("Gen homework")
addTodo("LNG homework")
addTodo()
console.log(getTodos());
console.log('----------------');
console.log(findTodo(1));
console.log(findTodo(3));
console.log('----------------');
console.log(findIndexTodo(1)); //id1: index 0
console.log(findIndexTodo(3)); //id3: index 2
console.log('----------------');
console.log(removeTodo(1));
console.log(getTodos());
console.log('----------------');
console.log(removeTodo(10));
console.log(getTodos());
console.log('----------------');
console.log(updateTodo(5, "Luandry"));
console.log(updateTodo(10, "test non-exist id"));
console.log(getTodos());
