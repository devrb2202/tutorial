<template>
    <v-container fluid class="pa-0">   
      <p class="text-h6">{{ courseSubtitle }}</p>
      <!-- bullet point -->
      <p class="text-subtitle-1">{{ courseDetails }}</p>
       <ul class="ml-5 text-subtitle-1" 
            v-for="(x, index) in courseBulletPoint" 
            :key="index"
        >
            <li>{{ x }}</li>
       </ul>
       <p class="text-h5 opacity-80">{{ courseSubject }}</p>
       <slot name="snippets"></slot>
    </v-container>
</template>

<script setup>

defineProps({
    courseSubtitle: {
        type: String,
        default: 'Course Subtitle'
    },
    courseDetails: {
        type: String,
        default: 'Course Details'
    },
    courseBulletPoint: {
        type: Array,
        default: ['Helloworld','dlrowolleh','lorem']
    },
    courseSubject: {
        type: String,
        default: 'Course Subject'
    }
})

</script>