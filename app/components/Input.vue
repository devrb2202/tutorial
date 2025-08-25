<template>
    <div class="flex pa-2 justify-center align-center" style="width: 300; height: 300;">
         <input
            :placeholder="placeholder"
            :type="type"
            class="pa-2"
            :v-model="model"
        />
    </div>
</template>

<script setup>

defineProps({
    label: String,
    placeholder: String,
    type: 'text' | 'number' | 'date' | 'password',
    model: String
})

</script>


<style scoped>
.flex {
    display: flex;
}
.justify-center {
    justify-content: center;
}
.align-center {
    align-items: center;
}
.text-white {
    color: white;
}
.pa-2 {
    padding: 2px;
}
.p-12 {
    padding: 12px;
}
.border-bottom {
    border-bottom: 2px solid red;
}

</style>