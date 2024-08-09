<script setup>
import {ref} from 'vue';

var taskInput = ref('');


// console.log(input.value);

function submitForm() {
console.log(taskInput.value);

}


</script>

<template>

<div class="main-container" >
<div class="container" >
        <h1>To Do App</h1>

        <form v-on:submit.prevent="submitForm" id="input-form">
            <input v-model="taskInput" type="text" name="input" id="input" placeholder="Enter your task here.....">
            <button type="submit">
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>

        <hr >
        <div id="todo-list-items" >
            <!-- <div class="todo-list-item" >
                <div class="todo-list-item-name" >
                    <p class="todo-title" >Create a new desing</p>
                </div>
                <div>
                    <button id="edit" class="icon edit">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button id="delete" class="icon delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div> -->
        </div>
    </div>
  </div>

</template>

<style>

* {
    padding: 0;
    margin: 0;
}

.main-container{
    background-color: #3F72AF;
    height: 100vh;
    display: flex;
    /* flex-direction: co; */
    justify-content: center;  /* align horizontally */
    align-items: center; /* align vertically */

}

.container{
    background-color: #fff;
    width: 50%;
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;  /* align horizontally */
}

hr{
    width: 100%;
    margin: 30px 0;
}

h1 {
    color: #112D4E;
    font-size: 40px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px 0;
}

#input-form {
    display: flex;

}

#input-form input{
    border: 1px solid #B1B1B1;
    padding: 10px 6px;
    font-size: 22px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: #DBE2EF;
}

#input-form button{
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #AAAAAA;
    cursor: pointer;
}

#todo-list-items {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.todo-list-item{
    background-color: #DBE2EF;
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

}

.todo-list-item-name{
    display: flex;
    align-items: center;
    gap: 20px;

}

.checkbox{
    height: 20px;
    width: 20px;
}

.todo-title{
    font-size: 22px;
}

.icon{
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0px 10px;
}



.fa-trash{
    color: red;
}



</style>