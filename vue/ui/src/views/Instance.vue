<template>
    <div class="instance">
        <h2>Vue 实例</h2>
        <h4>创建一个 Vue 实例</h4>
        <div class="instance-show-p">
            <pre>
                var vm = new Vue({<br>
                // 选项 <br>
                })
            </pre>
        </div>

        <h4>数据与方法</h4>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home",
    components: {
    }
};
</script>

<style>
    .instance-show-p {
        margin: 20px 0;
        background: #eee;
        padding: 20px 40px;
    }
    .instance-show-block {
        margin-top: 20px;
        padding: 20px 40px;
    }
    pre {
        line-height: 11px;
        font-family: "Roboto Mono", Monaco, courier, monospace;
    }
</style>