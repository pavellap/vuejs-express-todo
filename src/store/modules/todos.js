import Axios from "@/Utils/Axios";

export default {
    actions: {
        async fetchTodos(ctx, data) {
            console.log("Got data: ", data)
            // ctx stands for context
            try {
                const response = await Axios.get('/todos');
                const {todos} = response.data
                console.log("Fetched todos: ", todos)
                // заносим в state
                ctx.commit('setTodos', todos);
            }
            catch (e) {
                console.log("Error while fetching todos is occurred...", e)
            }
        },
        async removeTodo(ctx, todoID) {
            try {
                await Axios.delete('/todo/' + todoID);
                const response = await Axios.get('/todos');
                ctx.commit('setTodos', response.data.todos);
            }
            catch (e) {
                console.log("Error while removing todos is occurred...", e)
            }
        },
        async addTodo(ctx, title) {
            try {
                const response = await Axios.post('/todo', {title});
                console.log("Response: ", response);
                ctx.commit("addTodo", response.data.todo)
            }
            catch (e) {
                console.log("Error while adding todo is occurred...", e)
            }
        }
    },
    mutations: {
        setTodos(state, payload) {
            state.todos = payload;
        },
        addTodo(state, payload) {
            state.todos.push(payload);
        }
    },
    state: {
        todos: [],
    },
    getters: {
        getTodos(state) {
            return state.todos
        },
        todosCount(state) {
            return state.todos.length
        },
    },
}
