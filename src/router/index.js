import VueRouter from "vue-router"
import Home from "../pages/Home"
import Todos from "../pages/Todos"
import User from "../pages/User"
import Salary from "../pages/Salary"

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "user",
                    component: User
                },
                {
                    name: "salary",
                    path: "salary",
                    component: Salary,
                    //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
					// props:{a:1,b:'2'}

					//props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
					// props:true

					//props的第三种写法，值为函数
                    props($route){
                        return {
                            userName: $route.params.name
                        }
                    }
                }
            ]
        },
        {
            path: "/todos",
            component: Todos
        }
    ]
})