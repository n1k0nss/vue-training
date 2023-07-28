<template>
    <div class="todo__text">
        Task count: <span class="todo__count" :class="{'todo__count-active' : taskCount != 0}">{{ taskCount }}</span>
    </div>
    <div class="todo__select-wrapper">
        <select class="todo__select">
            <option value="" disabled selected>Filter</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="done">Completed</option>
            <option value="undone">Uncompleted</option>
        </select>
    </div>
    <div class="todo__buttons">
        <default-button>
            Add Task
        </default-button>
    </div>
    <add-task-form
        v-if="true">
        <template v-slot:title>Add task</template>
    </add-task-form>
</template>

<script>



export default {
    name: "TodoHeader",
    props: {
        taskCount: {
            type: Number,
        },
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.todo{
    &__text{
        font-size: 40px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    &__count{
        font-size: 60px;
        color: red;
        &-active{
            color: green;
        }
    }
    &__buttons{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    &__select-wrapper{
        border: 2px cyan solid;
    }
    &__select{
        padding: 10px 20px;
        display: block;
        height: 100%;
        width: 100%;
        background-color: transparent;
        color: cyan;
        border:none;
        font-size: 24px;
    }
}
</style>