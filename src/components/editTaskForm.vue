<template>
    <div class="dropdown">
        <form class="task-form" @submit.prevent>
            <span class="task-form__title"><slot name="title"></slot></span>
            <div class="task-form__inputs">
                <input class="task-form__input" type="number" placeholder="User id">
                <input class="task-form__input" type="text" placeholder="Task title">
                <label class="task-form__label" for="checkbox">
                    <input id="checkbox" type="checkbox">
                    Task completed
                </label>
            </div>
            <default-button>
                Edit
            </default-button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'editTaskForm',

}
</script>

<style lang="scss" scoped>
.dropdown{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  padding: 0 15px 45px;
  background-color: rgba(0,0,0,.5);
  overflow: auto;
}
.task-form{
  max-width: 440px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &__title{
    display: block;
    letter-spacing: 2px;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
  }
  &__inputs{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
  }
  &__input{
    width: 100%;
    height: 45px;
    padding: 0 15px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 300;
    border: 1px solid #d6d6d6;
  }
}
</style>