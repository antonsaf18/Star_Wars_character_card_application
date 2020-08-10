export default {
    name: ' favorite-heroes',
    props: {
        msg: String
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