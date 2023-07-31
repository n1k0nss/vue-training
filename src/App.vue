<template>
   <div class="todo">
      <todo-header
          :task-count="tasksCounter"
      />
   </div>

   <task-list :tasks="tasks"></task-list>
</template>

<script>

   import TodoHeader from "@/components/TodoHeader.vue";
   import TaskItem from "@/components/TaskItem.vue";
   import TaskList from "@/components/TaskList.vue";

   export default {
      components: { TodoHeader, TaskItem, TaskList},
      data ()  {
         return {

         }
      },
      created() {
         this.tasksCounter = this.tasks.length;
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

