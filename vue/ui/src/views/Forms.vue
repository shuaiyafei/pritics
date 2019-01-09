<template>
    <div class="form">
        <h2>表单输入绑定</h2>
        <h4>基础用法</h4>
        <div class="index-show-p">
            <input type="password" v-model="value" placeholder="edit" /> <br><br>
            <p>message is {{value}}</p>
        </div>
        <h4>多行文本</h4>
        <div class="index-show-p">
            <textarea v-model="textValue" placeholder="edit"></textarea> <br><br>
            <p>message is {{textValue}}</p>
        </div>
        <h4>复选框</h4>
        <div class="index-show-p">
            <input type="checkbox" id="checkbox" v-model="checkSingle" />
            <label for="checkbox"> checkSingle </label>
            <p>{{checkSingle}}</p>
        </div>
        <div class="index-show-p">
            <input type="checkbox" id="checkbox1" value="checkbox1" v-model="checkComplexe" />
            <label for="checkbox1"> checkbox1 </label>
            <input type="checkbox" id="checkbox2" value="checkbox2" v-model="checkComplexe" />
            <label for="checkbox2"> checkbox2 </label>
            <input type="checkbox" id="checkbox3" value="checkbox3" v-model="checkComplexe" />
            <label for="checkbox3"> checkbox3 </label>
            <p>{{checkComplexe}}</p>
        </div>
        <h4>单选按钮</h4>
        <div class="index-show-p">
            <input type="radio" id="radio1" value="radio1" v-model="radio">
            <label for="radio1">radio1</label>
            <input type="radio" id="radio2" value="radio2" v-model="radio">
            <label for="radio2">raido2</label>
            <p>{{radio}}</p>
        </div>
        <h4>选择框</h4>
        <div class="index-show-p">
            <select multiple v-model="select">
                <option value="" disabled>请选择</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <p>{{select}}</p>
        </div>
        <div class="index-show-p">
            <select v-model="cir">
                <option value="" disabled>请选择</option>
                <option v-for="(item, index) in selectData" :key="index" :value="item.value">{{item.text}}</option>
            </select>
            <p>
                {{cir}}
            </p>
        </div>
        <h4>值绑定</h4>
        <h4>复选框</h4>
        <h4>单选按钮</h4>
        <h4>选择框的选项</h4>
        <h4>修饰符</h4>
        <div class="index-show-p">
            <input type="text"  v-model.trim="msg">
            {{msg}}
        </div>
        <div class="index-show-p">
            <pre>
                - .lazy change 事件进行同步 <br><br>
                - .number 转整数类型    <br><br>
                - .trim 去空格
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            textValue: '',
            checkSingle: true,
            checkComplexe: [],
            radio: '',
            select: '',
            selectData: [
                {
                    text: 'A', value: 'A'
                },
                {
                    text: 'B', value: 'B'
                },
                {
                    text: 'C', value: 'C'
                }
            ],
            cir: '',
            msg: ''
        }
    }
}
</script>
