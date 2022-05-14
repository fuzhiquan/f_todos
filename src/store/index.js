import Vue from "vue"
import Vuex, {Store} from "vuex"
import todosAbout from "./todos"
Vue.use(Vuex)

export default new Store({
    modules: {
        todosAbout
    }
})