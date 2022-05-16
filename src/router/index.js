import VueRouter from "vue-router"
import Home from "../pages/Home"
import Todos from "../pages/Todos"

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/todos",
            component: Todos
        }
    ]
})