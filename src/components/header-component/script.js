export default {
    name: 'header-component',
    props: {

    },
    data: function () {
        return {

        }
    },
    created() {
    },

    methods: {
        goTo(whereTo) {
            this.$router.push({name:whereTo})
        }
    }
}