<template>
   <div class="users">
      <div class="users__text">
          Кількість користувачів: <span class="users__count" :class="{'users__count-active' : usersCount != 0}">{{ usersCount }}</span>
      </div>
      <div class="users__buttons">
          <default-button
                  @click="addUser">
              Додати користувача
          </default-button>
          <default-button
                  @click="removeUser">
              Видалити користувача
          </default-button>
      </div>
   </div>

</template>

<script>
   import DefaultButton from "@/components/ui/DefaultButton";

   export default {
       components: {DefaultButton},
      data ()  {
         return {
            usersCount: 3,
         }
      },
      created() {
      },

      mounted() {
      },
      methods: {
         addUser() {
            if(this.usersCount >= 0) this.usersCount++;

         },
         removeUser() {
            if(this.usersCount > 0) this.usersCount--;
         }
      }

   }
</script>

<style>
*,
*::before,
*::after {
   box-sizing: border-box;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
address,
small,
strong,
ol,
ul,
form,
button,
label,
caption,
article,
aside,
details,
figure,
figcaption,
nav,
time {
   margin: 0;
   padding: 0;
}

blockquote,
q {
   quotes: none;
}

table {
   border-collapse: collapse;
   border-spacing: 0;
}

button {
   outline: none;
   border: none;
   cursor: pointer;
}

input,
textarea {
   outline: none;
   border-radius: 0;
   border: none;
   box-shadow: none;
   &::placeholder {
      opacity: 1;
   }
}

a:not([class]) {
   text-decoration-skip-ink: auto;
}

img {
   max-width: 100%;
   display: block;
}

input,
button,
textarea,
select {
   font: inherit;
}

ul,
ol {
   list-style: none;
   padding: 0;
   margin: 0;
}

a {
   text-decoration: none;
   &:focus {
      text-decoration: none;
      outline: none;
   }
}

body{
   padding: 20px;
}
.users{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #b0b0b0;
    border-radius: 10px;
}
.users__text{
   font-size: 40px;
}
.users__count{
   font-size: 60px;
   color: red;
}
.users__count-active{
   color: green;
}
.users__buttons{
    display: flex;
    align-items: center;
    gap: 10px;
}
.users__button{
    background-color: transparent;
    color: cyan;
    padding: 10px 20px;
    font-size: 24px;
    border: 2px solid cyan;
    border-radius: 5px;
}
</style>

