
// interface Nigga {
//     id: number
//     title: string
//     description: string
// }

// export const useCrud = () => {
//     // Create
//     const title = ref('')
//     const description = ref('')
//     const updateLock = ref(true)
//     const database = ref<Nigga[]>([])

//     const create = () => {
//         if(title.value.trim() && description.value.trim()){
//              database.value.push({
//                 id: Date.now(),
//                 title: title.value,
//                 description: description.value
//             })
//             alert('Success!')
//         }
//         title.value = ''
//         description.value = ''

//     }
//     //  Read
//     const read = () => {
//         return database.value
//     }
    
//     //  Update
 
    
//     //  Delete
//     const del = (index: number) => {
//         alert('Successfully Deleted!')
//         database.value.splice(index, 1)
//     }

//     return { 
//         title,
//         description,
//         database,
//         updateLock,
//         read,
//         create,
//         del,
//      }
// }