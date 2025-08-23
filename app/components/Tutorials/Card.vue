<template>
    <!-- 2 types of building components -->
     <!-- using Array or this method below -->
    <v-card elevation="2" class="ma-4" :to="toRouter">
        <v-card-text>
            <v-img
                :aspect-ratio="1"
                class="bg-white"
                :src="source"
                width="150"
                cover
            />
            <p class="text-center text-subtitle-1 opacity-60">{{ title }}</p>
                
        </v-card-text>
    </v-card>
</template>

<script setup>

defineProps({
    title: String,
    source: String,
    toRouter: String
})

</script>