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
    const editingId = ref<number | null>(null)

    const create = () => {
        if(title.value.trim() && description.value.trim()){
            // Kung nasa update mode, gamitin ang update function
            if (editingId.value !== null) {
                update()
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
        editingId.value = null
        updateLock.value = true
    }
    
    // Read
    const read = () => {
        return database.value
    }
    
    // Prepare for editing
    const prepareUpdate = (id: number) => {
        const item = database.value.find(item => item.id === id)
        if (item) {
            title.value = item.title
            description.value = item.description
            editingId.value = id
            updateLock.value = false
        }
    }
    
    // Actual update function - FIXED
    const update = () => {
        if (title.value.trim() && description.value.trim() && editingId.value !== null) {
            const index = database.value.findIndex(item => item.id === editingId.value)
            if (index !== -1) {
                // Gumawa ng bagong object na may tamang types
                const updatedItem: Nigga = {
                    id: editingId.value, // Gamitin ang existing ID
                    title: title.value,
                    description: description.value
                }
                
                database.value[index] = updatedItem
                alert('Update Success!')
                
                // I-reset ang form
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
        update: prepareUpdate,
        editingId
     }
}



