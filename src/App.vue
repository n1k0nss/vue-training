<template>
   <div class="todo">
      <todo-header
          :task-count="tasksCounter"
      />
   </div>

   <task-list  :tasks="tasks"></task-list>
</template>

<script>

   import TodoHeader from "@/components/TodoHeader.vue";
   import TaskItem from "@/components/TaskItem.vue";
   import TaskList from "@/components/TaskList.vue";

   export default {
      components: { TodoHeader, TaskItem, TaskList},
      data ()  {
         return {
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
         }
      },
      created() {
         this.tasksCounter = this.tasks.length;
      },

      mounted() {
         this.$root.$on('createTask', (task) => {
            this.tasks.push(task);
         })
      },

      methods: {
      },

   }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
*,
*::before,
*::after {
   box-sizing: border-box;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   margin: 0;
   padding: 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
}
a{
   text-decoration: none;
}
img{
   width: 100%;
   height: 100%;
}
*:focus{
   outline: none;
}

body{
   padding: 20px;
   font-family: 'Montserrat', sans-serif;
}
.todo{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #b0b0b0;
    border-radius: 10px;
}


</style>

