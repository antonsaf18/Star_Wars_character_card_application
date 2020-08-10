import homePage from "../home-page/home-page";
import headerComponent from "../../components/header-component/header-components";
import mainContentComponent from "../../components/main-content-component/main-content-component";

export default {
    name: ' favorite-heroes',
    props: {

    },
    components: {
        homePage,
        headerComponent,
        mainContentComponent,
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