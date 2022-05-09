export default {
    install(Vue) {
        Vue.directive("inFocus", {
            inserted(element) {
                element.focus()
            }
        })

        Vue.filter("sp2", function(value) {
            return value.slice(0, 2)
        })
    }
}