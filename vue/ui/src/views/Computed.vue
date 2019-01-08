<template>
    <div class="about">
        <h2>计算属性和侦听器</h2>
        <h4>基础例子</h4>
        <div class="index-show-p">
            {{message}}
        </div>

        <div class="index-show-p">
            {{reverseMessage}}
        </div>

        <h4>计算属性缓存 vs 方法</h4>
        <div class="index-show-p">
            直接调用methods里面的方法也能获取到，计算属性是基于它们的依赖进行缓存的，只有依赖发现变化才会重新求值。
        </div>

        <div class="index-show-p">
            <p>{{currentDate}}</p>
            <p>{{now()}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'message.split("").reverse("")'
            }
        },
        computed: {
            reverseMessage() {
                return this.message.split('').reverse().join('')
            },
            currentDate() {
                return Date.now()
            }
        },
        methods: {
            now() {
                return Date.now();
            }
        }
    }
</script>

