export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
    }

    marcarCompletado(id) {
        let codId = parseInt(id, 10);

        for (const todo of this.todos) {
            if (todo.id === codId) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
    }

    setLocalStorage() {

    }

    getLocalStorage() {
        
    }
}