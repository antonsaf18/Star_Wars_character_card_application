import characterCardComponent from '../../components/character-card-component/character-card-component'

export default {
    name: 'main-content-component',
    props: {

    },
    components: {
        characterCardComponent,
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