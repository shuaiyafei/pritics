<template>
    <div class="index">
        <div>
            <h2>{{title}}</h2>
            <h4>声明式渲染</h4>
            <div
                class="index-show-p"
                :title="message"
            >
                <p>
                    鼠标悬停几秒钟查看此处动态绑定的提示信息！
                </p>
            </div>

            <h4>条件与循环</h4>
            <div class="index-show-p">
                <p v-if="seen">现在可以看到了</p>
            </div>

            <div class="index-show-p">
                <button @click="show">show</button>
                <button @click="hide">hide</button>
            </div>

            <div class="index-show-p">
                <p
                    v-for="(item, index) in items"
                    :key="index"
                >
                    {{index+1}}. {{item.text}}
                </p>
                <h4>使用v-for key值必须</h4>
            </div>

            <div class="index-show-p">
                <button @click="add">add</button>
                <button @click="remove">remove</button>
            </div>

            <h4>处理用户输入</h4>
            <div class="index-show-p">
                <p>{{reverseMessage}}</p>
            </div>
            <div class="index-show-p">
                <button @click="reverse">reverse</button>
            </div>

            <div class="index-show-p">
                <p>{{value}}</p>
            </div>
            <div class="index-show-p">
                <input v-model="value">
            </div>
            <div class="index-show-p">
                <p>
                    method需要调用 并且如果有多个使用method的方法则会多次调用
                </p>
                <p>
                    computed计算属性 生成缓存 依赖data的依赖项 只计算一次
                </p>
            </div>

            <h4>组件化应用构建</h4>
            <div class="index-show-p">
                <todo-item v-for="(item, index) in msgList" :key="index" :single="item"></todo-item>
            </div>
        </div>
    </div>
</template>

<script>
import todoItem from "@/components/todoItem.vue";

export default {
    data() {
        return {
            title: "介绍",
            message: "",
            seen: true,
            items: [
                { text: "学习 JavaScript" },
                { text: "学习 Vue" },
                { text: "整个牛项目" }
            ],
            reverseMessage: "Hello Vue.js!",
            value: "Hello Vue!",
            msgList: [
                { id: 0, text: "蔬菜" },
                { id: 1, text: "奶酪" },
                { id: 2, text: "随便其它什么人吃的东西" }
            ]
        };
    },
    components: {
        "todo-item": todoItem
    },
    mounted() {
        this.message = this.getCurrentTime();
        console.log(this);
    },
    methods: {
        getCurrentTime() {
            return new Date().toLocaleString();
        },
        show() {
            this.seen = true;
        },
        hide() {
            this.seen = false;
        },
        add() {
            this.items.push({
                text: "学习 Vue"
            });
        },
        remove() {
            this.items.splice(this.items.length - 1, 1);
        },
        reverse() {
            this.reverseMessage = this.reverseMessage
                .split("")
                .reverse()
                .join("");
        },
        test() {
            return 1;
        }
    }
};
</script>

<style>
.index-show-p {
    margin: 20px 0;
    background: #eee;
    padding: 20px 40px;
}
.index-show-block {
    margin-top: 20px;
    padding: 20px 40px;
}
button {
    width: 60px;
    height: 20px;
    border-radius: 4px;
    margin-right: 30px;
    border: none;
    background: #fff;
    outline: none;
}
</style>
