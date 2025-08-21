<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
<!-- <template>
  <v-container fluid class="pa-0 h-screen d-flex align-center">
    <v-row class="justify-center">
      <v-col cols="12" sm="3">
        <p>User Input</p>
        <v-text-field label="Title" placeholder="Title" v-model="tle"/>
        <v-text-field label="Description" placeholder="Description" v-model="des"/>
        <v-btn color="primary" @click="create" block text="create now" class="mb-2"/>
        <v-btn color="pink" @click="" block text="update now" :disabled="updateLock"/>
  
      </v-col>
      <v-col cols="12" sm="5">
        <p>Data Output</p>
          <v-table height="200">
            <thead>
              <tr>
                <th class="text-left">
                  Id
                </th>
                 <th class="text-left">
                  Title
                </th>
                <th class="text-left">
                  Description
                </th>
                <th class="text-left">
                  Actions
                </th>

              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in database"
                :key="index"
              >
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
                <td>
                  <v-btn color="red" size="small" @click="del(index)">Delete</v-btn>
                
                </td>
              </tr>
            </tbody>
          </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCrud } from './composables/crud'


const { 
  create, 
  title, 
  description, 
  database, 
  updateLock,
  del,
} = useCrud()

const tle = title
const des = description

console.log(del)

</script>

 -->
