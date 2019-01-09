<template>
    <div class="about">
        <h2>Class 与 Style 绑定</h2>
        <div class="index-show-p">
            使用v-bind处理class和style
        </div>

        <h4>绑定 HTML Class</h4>
        <div v-bind:class="{ lgray : 'isBind'}">
            <pre>
                {{objectGram}}
            </pre>
        </div>

        <div v-bind:class="{ danger: isDanger, large: isLarge}" class="index-show-p">
            error
        </div>

        <h4>数组语法</h4>
        <div class="index-show-p">
            <pre>
                {{arrGram}}
            </pre>
        </div>

        <h4>用在组件上</h4>
        <div class="index-show-p">
            <pre>
                Vue.component('my-component', { <br><br>
                    template: <span class="foo bar">Hi</span><br><br>
                })
            </pre>
        </div>

        <h4>绑定内联样式</h4>
        <div class="index-show-p">
            <pre>
                {{styleGram}}
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBind: true,
            objectGram: '<div v-bind:class="{ lgray : isBind}" v-text="objectGram"></div>',
            isDanger: true,
            isLarge: true,
            arrGram: '<div v-bind:class="[isActive ? activeClass : "", errorClass]"></div>',
            styleGram: '<div v-bind:style="{ color: activeColor, fontSize: fontSize + "px" }"></div>'
        }
    }
}
</script>

<style>
    .lgray {
        background: lightgray;
        min-height: 50px;
    }

    .lgray pre {
        padding-top: 20px;
    } 

    .danger {
        color: red;
    }
    .large {
        font-weight: bold;
        font-size: 20px;
    }
</style>


