/*
 * 描述: 封装组件库
 * 作者: lwy
 * 日期: 2021-7-10
 */
import userRetention from "@/components/echart/userRetention/index.vue"; //用户留存率

const components = { userRetention };

const install = (Vue = {}) => {
    if (install.installed) return;
    Object.keys(components).forEach((component) => {
        Vue.component(components[component].name, components[component]);
    });

    install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
    install.installed = true;
}

const Vcomp = {
    ...components,
    install,
};

export default Vcomp;