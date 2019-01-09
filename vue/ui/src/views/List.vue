<template>
    <div class="about">
        <h2>列表渲染</h2>
        <h4>用 v-for 把一个数组对应为一组元素</h4>
        <div class="index-show-p">
            <p v-for="(item, index) in items" :key="index">
                {{index}} {{item.text}}
            </p>
        </div>

        <h4>一个对象的 v-for</h4>
        <div class="index-show-p">
            <p v-for="(value, key, index) in object" :key="index">
                <pre>
                    <em>value: {{value}}<br></em>
                    <em>key: {{key}}<br></em>
                    <em>index: {{index}}<br><br></em>
                </pre>
            </p>
        </div>

        <h4>key</h4>
        <div class="index-show-p">
            <p>在使用v-for更新渲染的元素列表时，如果数据项的顺序被改变，Vue不会移动DOM元素来匹配数据项的顺序</p>
        </div>

        <h4>数组更新检测</h4>
        <div class="index-show-p">
            <pre>
                push()<br>
                pop()<br>
                shift()<br>
                unshift()<br>
                splice()<br>
                sort()<br>
                reverse()
            </pre>
        </div>

        <div class="index-show-p">
            <ul>
                <li v-for="(item, index) in arr" :key="index" @click="deleteItem(index)">
                    {{item.message}}
                </li>
            </ul>
        </div>

        <div class="index-show-p">
            <a @click="filter">filter index > 2</a>
            <br><br>
            <a @click="concat">concat</a>
        </div>

        <div class="index-show-p">
            <input type="file" @change="upload" ref="upload" />
        </div>
        
        <div class="index-show-p">
            <p v-for="(item, index) in result" :key="index">
                {{item}}
            </p>
        </div>

        <div class="index-show-p">
            <p v-for="(value, key, index) in object" :key="index">
                {{value}}
            </p>
        </div>
        <h4>对象更改检测注意事项</h4>
        <h4>显示过滤/排序结果</h4>
        <h4>一段取值范围的 v-for</h4>
        <h4>v-for on a </h4>
        <h4>v-for with v-if</h4>
        <h4>一个组件的 v-for</h4>
        <div class="index-show-p">
            <p class="whole">Add a todo <input type="text" v-model="value" /> <a @click="add">Add</a></p>
            <ul>
                <li v-for="(item, index) in todos" :key="index">
                    {{item}}
                    <a class="remove-btn" @click="remove(index)">remove</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'first message',
                },
                {
                    text: 'second message'
                }
            ],
            object: {
                name: 'nichlas',
                age: '20',
                public: 'public'
            },
            arr: [
                {
                    message: '0'
                },
                {
                    message: '1'
                },
                {
                    message: '2'
                },
                {
                    message: '3'
                }
            ],
            result: [1,2,3],
            object: {
                name: '1',
                age: '2',
                sex: 'female'
            },
            todos: [
                'todo',
                'do some thing',
                'do not thing'
            ],
            value: ''
        }
    },
    mounted() {
        setTimeout(() => {
            // this.arr[0] = { message: '555'};
            // this.arr.length = 10;
            this.arr[0].message = 22222;
            this.result[0] = {a: 1};
            console.log(this.arr);
            Object.assign(this.object, {test: 1, favoriteColor: 'Vue Green'});
            // this.object.name = '444'
            console.log(this.object);
        }, 2000);
    },
    methods: {
        deleteItem(k) {
            this.arr.splice(k, 1);
        },
        filter() {
            this.arr = this.arr.filter((item, index) => {
                return index > 2;
            });
        },
        concat() {
            this.arr = this.arr.concat([
                {
                    message: parseInt(typeof (this.arr[this.arr.length - 1]) == 'undefined' ? -1 : this.arr[this.arr.length - 1].message) + 1
                }
            ])
        },
        upload() {
            const file = this.$refs.upload.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                console.log(reader)
            }
            reader.readAsDataURL(file);
            console.info(window.URL.createObjectURL(file))
        },
        add() {
            this.todos.push(this.value);
        },
        remove(key) {
            this.todos.splice(key, 1);
        }
    }
}
</script>

<style>
    li {
        background: #ccc;
        height: 50px;
        margin: 20px 0;
        text-align: center;
        line-height: 50px;
    }
    .whole {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
    }
    .whole > input {
        width: 80%;
        font-size: 16px;
        padding: 10px;
    }
    .remove-btn {
        position: absolute;
        right: 7vw;
    }
</style>

