<template>
    <div class="task">
        <div class="task__data">
            <span class="task__user">User: {{this.task.userId}}</span>
            <span class="task__title">{{this.task.title}}</span>
            <span class="task__title">Id = {{this.task.id}}</span>
        </div>
        <div class="task__actions">
            <default-button class="task__button">
                Edit
            </default-button>
            <default-button class="task__button">
                Delete
            </default-button>
        </div>
        <div class="task__status">
            <div v-if="task.completed" id="tick-mark"></div>
            <div v-else id="closeModal"></div>
        </div>
        <edit-task-form v-if="false">
            <template v-slot:title>Edit task</template>
            <template v-slot:button>
                <default-button>
                    Edit
                </default-button>
            </template>
        </edit-task-form>
    </div>
</template>

<script>

export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.task{
    width: 100%;
    height: 300px;
    border: 3px aqua dotted;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    &__data{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    &__user{
        font-size: 60px;
        color: #4b5b5b;
    }
    &__title{
        color: #b0b0b0;
        font-size: 22px;
        max-width: 350px;
        &::first-letter{
            font-size: 24px;
            text-transform: uppercase;
        }
    }
    &__status{
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;
    }
    &__actions{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }
    &__button{
        &:first-child{
            border: 2px solid #d5a100;
            color: #d5a100;
        }
        &:last-child{
            border: 2px solid #8f0000;
            color: #8f0000;
        }
    }
}

#tick-mark {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    &::after{
        position: absolute;
        left: 25%;
        bottom: 10%;
        height: 6px;
        width: 100%;
        background-color: lawngreen;
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }
    &::before{
        position: absolute;
        left: 25%;
        top: 40%;
        height: 50%;
        width: 6px;
        background-color: lawngreen;
        content: "";
        transform: translateX(10px) rotate(-45deg);
        transform-origin: left bottom;
    }

}

#closeModal {
    position: relative;
    width: 100px;
    height: 100px;
    opacity: 1;

}

#closeModal::before,
#closeModal::after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    width: 100px;
    height: 4px;
    background: red;
}

#closeModal::before {
    transform: rotate(45deg);
}

#closeModal::after {
    transform: rotate(-45deg);
}

</style>