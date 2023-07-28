<template>
    <button
    class="default__button"
    >
        <slot></slot>
    </button>
</template>


<script>
export default {
    name: "DefaultButton",
}
</script>



<style scoped>
.default__button{
    cursor: pointer;
    background-color: transparent;
    color: cyan;
    padding: 10px 20px;
    font-size: 24px;
    border: 2px solid cyan;
    border-radius: 5px;
    width: 240px;
}
</style>