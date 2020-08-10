export default {
    name: 'character-card-component',
    props: {

    },
    data: function () {
        return {

        }
    },
    created() {
    },

    methods: {
        inputting(event) {
            this.$emit('typing', event.target.value)
        }
    }
}