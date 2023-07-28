<template>
    <div class="tasks">
        <h1 class="tasks__title">Tasks</h1>
        <task-item
            v-for="(task, index) in tasks"
            :task="task"
            :key="index"
        ></task-item>
    </div>

</template>

<script>
import TaskItem from "@/components/TaskItem.vue";
import DefaultButton from "@/components/ui/DefaultButton.vue";
export default {
    components: {DefaultButton, TaskItem},
    props:{
        tasks: {
            type: Array,
        }
    }
}
</script>

<style lang="scss" scoped>
h1{

}
.tasks{
    display: flex;
    flex-direction: column;
    gap: 50px;
    &__title{
        text-transform: uppercase;
        font-size: 60px;
        font-style: italic;
        color: cadetblue;
        text-align: center;
        margin-top: 40px;
    }
}
</style>