interface Nigga {
    id: number
    title: string
    description: string
}

export const useCrud = () => {
    // Create
    const title = ref('')
    const description = ref('')
    const updateLock = ref(true)
    const database = ref<Nigga[]>([])
    const editingId = ref<number | null>(null) // Idagdag ito para sa editing state

    const create = () => {
        if(title.value.trim() && description.value.trim()){
            // Kung nasa update mode, gamitin ang update function
            if (editingId.value !== null) {
                update(editingId.value)
                return
            }
            
            database.value.push({
                id: Date.now(),
                title: title.value,
                description: description.value
            })
            alert('Success!')
        }
        title.value = ''
        description.value = ''
        editingId.value = null // I-reset ang editing state
        updateLock.value = true // I-lock ulit ang update button
    }
    
    // Read
    const read = () => {
        return database.value
    }
    
    // Update - Prepare for editing
    const prepareUpdate = (id: number) => {
        const item = database.value.find(item => item.id === id)
        if (item) {
            title.value = item.title
            description.value = item.description
            editingId.value = id
            updateLock.value = false // I-unlock ang update button
        }
    }
    
    // Update - Actual update function
    const update = (id: number) => {
        if (title.value.trim() && description.value.trim()) {
            const index = database.value.findIndex(item => item.id === id)
            if (index !== -1) {
                database.value[index] = {
                    ...database.value[index],
                    title: title.value,
                    description: description.value
                }
                alert('Update Success!')
                
                // I-reset ang form at editing state
                title.value = ''
                description.value = ''
                editingId.value = null
                updateLock.value = true
            }
        }
    }
    
    // Delete
    const del = (index: number) => {
        alert('Successfully Deleted!')
        database.value.splice(index, 1)
    }

    return { 
        title,
        description,
        database,
        updateLock,
        read,
        create,
        del,
        update: prepareUpdate, // I-expose ang prepareUpdate bilang update
        editingId // Optional: kung gusto mong i-track sa UI
     }
}