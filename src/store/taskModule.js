import axios from "axios";

export const taskModule = {
    state: () => ({
        tasksCounter: 0,
        tasks: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 2,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 3,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": true
            },
            {
                "userId": 4,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
        ]
    }),
    getters: {

    },
    mutations: {
        setTasks(state, tasks){
            state.tasks = tasks;
        },
        setTasksCounter(state, tasksCounter){
            state.tasksCounter = tasksCounter;
        }
    },
    actions: {
        async fetchTasks({state, commit}) {
            const response  = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                    params: {
                        _limit: 30,
                    }
                });
            commit('setTasks', response.data)
        }
    }
}