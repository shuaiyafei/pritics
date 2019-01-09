<template>
    <div class="about">
        <h2>事件处理</h2>
        <h4>监听事件</h4>
        <div class="index-show-p">
            <p><button @click="count+=1">count</button> {{count}}</p>
        </div>
        <h4>事件处理方法</h4>
        <div class="index-show-p">
            <button @click="greet">greet</button>
        </div>
        <h4>内联处理器中的方法</h4>
        <div class="index-show-p">
            <button @click="say('hi')">hi</button>
            <button @click="say('heelo')">hello</button>
            <button @click="warn($event, 'tianfen')">tianfeng</button>
        </div>
        <h4>事件修饰符</h4>
        <div class="index-show-p">
            <pre>
                <a href="//www.baidu.com" @click="prevent" target="_black">prevent</a>  阻止事件的默认行为 <br>
                <a href="//www.baidu.com" @click.prevent="warn" target="_black">prevent修饰符</a><br><br>
                <p @click.self="propagation('p')">
                    <span @click.self="propagation('span')">
                        <a @click.once="propagation('a')">stopPropagation</a> 阻止冒泡
                    </span>
                </p>
            </pre>
        </div>
        <div class="index-show-p">
            <pre>
                //e.stopPropagation()<br>
                .stop<br><br><br>
                //e.preventDefault()<br>
                .prevent<br><br><br>
                //事件捕获模式<br>
                //自身触发情况优先处理 然后再交到内部处理<br>
                .capture<br><br><br>
                //事件从自己内部触发<br>
                .self<br><br><br>
                //事件只触发一次f<br>
                .once<br><br><br>   
                //滚动事件的默认行为 (即滚动行为) 将会立即触发 <br>
                .passive    
            </pre>
        </div>
        <div class="index-show-p scroll" @scroll.passive="scroll" ref="scroll">
            <div class="index-show-scroll"></div>
        </div>
        <h4>按键修饰符</h4>
        <div class="index-show-p">
            <button @keyup.13="keyup($event)">keyup</button>
        </div>
        <h4>自动匹配按键修饰符</h4>
        <h4>系统修饰键</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            current: 0,
            timeout: null
        }
    },
    methods: {
        greet(e) {
            console.log(e.target.tagName);
            alert(`hello world`);
        },
        say(message) {
            alert(message)
        },
        warn(e, msg) {
            console.log(e);
            console.log(msg);
        },
        prevent(e) {
            e.preventDefault();
        },
        propagation(msg) {
            alert(`tag ${msg}`);
        },
        scroll() {
            this.current = this.$refs.scroll.scrollTop;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                alert(this.current)
            }, 500);
        },
        keyup(e) {
            console.log(e)
        }
    }
}
</script>

<style>
    .index-show-p.scroll {
        height: 200px;
        overflow: scroll;
        position: relative;
        top: 0;
    }
    .index-show-scroll {
        height: 500px;
    }
    .index-show-position {
        position: absolute;
        top: 10px;
    }
</style>

