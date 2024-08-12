<script setup >
import IconButton from '@/components/IconButton.vue'

defineProps({
    itemName: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="todo-list-item" >
                <div class="todo-list-item-name" >
                    <p 
                    class="todo-title" >
                      <!-- {{ item }} -->

                      {{ itemName }}
                    </p>
                </div>
                <div class="button-group" >
                    <IconButton iconClass="fa-pencil" />            
                    <IconButton iconClass="fa-trash" />            
                    <!-- <IconButton icon-class="fa-trash" /> -->
                </div>
                <!-- <div>
                    <button @click="editItem(index)" id="edit" class="icon edit">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button v-on:click="deleteItem(index)" id="delete" class="icon delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div> -->
            </div>
</template>

<style scoped>
.button-group {
    display: flex;
}
</style>