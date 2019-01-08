<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">介绍</router-link>
            <router-link to="/instance">Vue 实例</router-link>
            <router-link to="/syntax">模板语法</router-link>
            <router-link to="/computed">计算属性和侦听器</router-link>
            <router-link to="/class-and-style">Class 与 Style 绑定</router-link>
            <router-link to="/conditional">条件渲染</router-link>
            <router-link to="/list">列表渲染</router-link>
            <router-link to="/events">事件处理</router-link>
            <router-link to="/forms">表单输入绑定</router-link>
            <router-link to="/components">组件基础</router-link>
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    margin: 30px;
}
#nav {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    a {
        font-weight: bold;
        color: #2c3e50;
        font-size: 14px;
        padding: 6px;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.content {
    flex: 1;
}

/** * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/) * http://cssreset.com */
html,
body,
div,
span,
applet,
object,
iframe,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
} /* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

.index-show-p {
    margin: 20px 0;
    background: #eee;
    padding: 20px 40px;
}
.index-show-block {
    margin-top: 20px;
    padding: 20px 40px;
}
pre {
    line-height: 11px;
    font-family: "Roboto Mono", Monaco, courier, monospace;
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
