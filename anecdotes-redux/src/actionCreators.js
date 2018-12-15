export default {
    /*
    anecdoteCreation(content) {
        return {
            type: 'NEW_NOTE',
            data: {
                content,
                important: false,
                id: generateId()
            }
        }
    },
    */
    vote(id) {
        return {
            type: 'VOTE',
            data: { id }
        }
    }
}