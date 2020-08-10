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
        goTo(whereTo) {
            this.$router.push({name:whereTo})
            // this.$store.commit('setMessageForm', '');
            // window.scrollTo(0,0)
        }
    }
}