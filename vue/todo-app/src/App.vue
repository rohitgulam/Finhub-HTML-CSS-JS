<script setup>
import { ref, onMounted, reactive } from "vue";
import ListItem from "./components/ListItem.vue";
import ListItemCard from "./components/ListItemCard.vue";


// Vue JS
var taskInput = ref('');

var itemsArray = ref([]);

async function getItems() {
    const response = await fetch('http://localhost:5001/items');

    itemsArray.value = await response.json();
}

async function getItem(id){
    const response = await fetch(`http://localhost:5001/items/${id}`);
    const data = await response.json();
    return data
}

var itemToEdit = ref(null);

async function saveItem() {
    if (itemToEdit.value !== null) {
    //    Code to update
        const body = {
            title: taskInput.value
        }

        const response = await fetch(`http://localhost:5001/items/${itemToEdit.value}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(body)
        });

        itemToEdit.value = null;
    } else {
        const body = {
            title: taskInput.value
        }

        const response = await fetch('http://localhost:5001/items', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(body)
        });

        console.log(response.json());
        }
        taskInput.value = '';
}

async function deleteItem(id) {
    const response = await fetch(`http://localhost:5001/items/${id}`,{
        method: "DELETE"
    });
}

async function editItem(id) {
    const item = await getItem(id);
    itemToEdit.value = item.id
    taskInput.value = item.title
    
//   taskInput.value = itemsArray.value[index];
//   itemToEdit.value = index
  // console.log(itemToEdit.value);
  
}


onMounted( () => {
    getItems();
})


</script>

<template>

    <div class="main-container">
        <div class="container">
            <h1>To Do App</h1>

            <form v-on:submit.prevent="saveItem" id="input-form">
                <input v-model="taskInput" type="text" name="input" id="input" placeholder="Enter your task here.....">
                <button type="submit">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </form>

            <hr>
            <div style="width: 100%;">


                <ListItemCard v-if="itemsArray.length > 0">
                    <ListItem 
                        v-for="(item) in itemsArray" 
                        :key="item.id" 
                        :itemName="item.title"
                        @edit="editItem(item.id)" 
                        @delete="deleteItem(item.id)" />
                </ListItemCard>
                <p v-else>
                    You have nothing in your list
                </p>

                <!-- <ListItem></ListItem> -->


                <!-- <div class="todo-list-item"  >
                <div class="todo-list-item-name" >
                    <p 
                    class="todo-title" >
                      {{ item }}
                      {{ index }}
                    </p>
                </div>
                <div>
                    <button @click="editItem(index)" id="edit" class="icon edit">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button v-on:click="deleteItem(index)" id="delete" class="icon delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div> -->




                <!-- <div :class="className" v-for="(num, index) in nums" :key="index" >
              {{ num }}

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

.main-container {
    background-color: #3F72AF;
    height: 100vh;
    display: flex;
    /* flex-direction: co; */
    justify-content: center;
    /* align horizontally */
    align-items: center;
    /* align vertically */

}

.container {
    background-color: #fff;
    width: 50%;
    border-radius: 20px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* align horizontally */
}

hr {
    width: 100%;
    margin: 30px 0;
}

h1 {
    color: #112D4E;
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px 0;
}

#input-form {
    display: flex;

}

#input-form input {
    border: 1px solid #B1B1B1;
    padding: 10px 6px;
    font-size: 22px;
    border-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: #DBE2EF;
}

#input-form button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #AAAAAA;
    cursor: pointer;
}


.icon {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0px 10px;
}



.fa-trash {
    color: red;
}
</style>