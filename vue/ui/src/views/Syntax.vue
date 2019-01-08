<template>
    <div class="syntax">
        <h2>模板语法</h2>
        <div class="index-show-p">
            <p>Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。<br><br>
                所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。
            </p>
            <br>
            <p>在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。<br><br>
                结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。</p>
        </div>

        <h4>文本</h4>
        <div class="index-show-p">
            <pre v-html="msg">
            </pre>
        </div>

        <h4>v-once</h4>
        <div class="index-show-p">
            <pre v-once>
                Message: {{ msg }}
            </pre>
        </div>

        <div class="index-show-p">
            <button @click="updateMsg">u msg</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '{{ msg }}'
        }
    },
    methods: {
        updateMsg() {
            this.msg += `<br><br>{{ msg }}`
        }
    }
}
</script>
