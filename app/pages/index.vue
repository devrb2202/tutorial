<template>
  <v-container fluid class="pa-0 h-screen d-flex align-center">
    <v-row class="justify-center">
      <v-col cols="12" sm="3">
        <p>User Input</p>
        <v-text-field label="Title" placeholder="Title" v-model="tle"/>
        <v-text-field label="Description" placeholder="Description" v-model="des"/>
        <v-btn color="primary" @click="create" block :text="editingId !== null ? 'Update Now' : 'Create Now'" class="mb-2"/>
        <v-btn color="pink" @click="cancelEdit" block text="Cancel" :disabled="updateLock" v-if="editingId !== null"/>
      </v-col>
      <v-col cols="12" sm="5">
        <p>Data Output</p>
          <v-table height="200">
            <thead>
              <tr>
                <th class="text-left">Id</th>
                <th class="text-left">Title</th>
                <th class="text-left">Description</th>
                <th class="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in database" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.description }}</td>
                <td>
                  <v-btn color="red" size="small" @click="del(index)">Delete</v-btn>
                  <v-btn color="green" size="small" @click="update(item.id)">Update</v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
          <!-- <v-container class="bg-black">
              <pre class="bg-black"><code class="language-vue">{{ sample }}</code></pre>
          </v-container> -->
         
           <!-- <code>
            {{  sample }}
           </code> -->

            <v-sheet 
              class="overflow-x-auto rounded-lg" 
              color="grey-darken-4" 
              style="max-width: 100%"
            >
              <pre class="pa-4 ma-0 text-white font-weight-regular"><code>{{ sample }}</code></pre>
            </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
pre {
  font-family: 'Monaco', 'Consolas', monospace !important;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre;
  word-wrap: normal;
}

code {
  background: transparent !important;
  color: inherit !important;
  padding: 0 !important;
}
</style>

<script setup lang="ts">

const { 
  create, 
  title, 
  description, 
  database, 
  updateLock,
  del,
  update,
  editingId
} = useCrud()

const tle = title
const des = description

// Optional: cancel edit function
const cancelEdit = () => {
  title.value = ''
  description.value = ''
  editingId.value = null
  updateLock.value = true
}


const sample = ref(`
  <template>
  <v-row>
    <v-col cols="auto">
      <v-card class="overflow-auto" height="200" width="200">
        <v-card-text>
          <h3>Overflow Auto</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis dicta esse molestias vero hic laudantium provident nisi eos
          quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
          voluptates?
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card class="overflow-hidden" height="200" width="200">
        <v-card-text>
          <h3>Overflow Hidden</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis dicta esse molestias vero hic laudantium provident nisi eos
          quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
          voluptates?
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="auto">
      <v-card class="overflow-visible" height="200" width="200">
        <v-card-text>
          <h3>Overflow visible</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          facilis dicta esse molestias vero hic laudantium provident nisi eos
          quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum
          voluptates?
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
`)
</script>