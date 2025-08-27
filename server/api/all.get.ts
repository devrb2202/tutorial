import layout from '../data/nuxt/layout.json'
import solution from '../data/nuxt/solution.json'
import components from '../data/nuxt/components.json'


export default defineEventHandler(async () => {
    return {
        layout,
        solution,
        components,
    }

})