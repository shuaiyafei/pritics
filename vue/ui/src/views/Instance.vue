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
        <div class="instance-show-p">
            <pre>
                // 我们的数据对象<br>
                var data = { a: 1 }<br>

                // 该对象被加入到一个 Vue 实例中<br>
                var vm = new Vue({<br>
                    data: data<br>
                })<br>

                // 获得这个实例上的属性<br>
                // 返回源数据中对应的字段<br>
                vm.a == data.a // => true<br><br><br>

                // 设置属性也会影响到原始数据<br>
                vm.a = 2<br>
                data.a // => 2<br><br><br>

                // ……反之亦然<br>
                data.a = 3<br>
                vm.a // => 3
            </pre>
        </div>
        <div class="instance-show-p">
            <p>在data中存在的属性才是响应式的</p><br>
            <p>Object.freeze()可以修改现有属性，系统无法再追踪变化</p>
            
        </div>

        <h4>实例生命周期钩子</h4>
        <div class="instance-show-p">
            <pre>
                new Vue({<br>
                    data: {<br>
                        a: 1<br>
                    },<br>
                    created: function () {<br>
                        // `this` 指向 vm 实例<br>
                        console.log('a is: ' + this.a)<br>
                    }<br>
                })<br>
                // => "a is: 1"
            </pre>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home",
    components: {}
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