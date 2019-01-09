<template>
    <div class="about">
        <h2>条件渲染</h2>
        <h4>v-if</h4>
        <div class="index-show-p">
            <!-- Handlebars 模板 -->
            <pre v-html="handleBar">
            </pre>
        </div>

        <div class="index-show-p">
            <pre>
                {{vContent}}
            </pre>
        </div>

        <div class="index-show-p">
            <pre>
                {{vEContent}}
            </pre>
        </div>

        <h4>在 template 元素上使用 v-if 条件渲染分组</h4>
        <div class="index-show-p">
            <pre>
                {{message}}
            </pre>
        </div>

        <h4>用 key 管理可复用的元素</h4>
        <div class="index-show-p"></div>

        <h4>v-show</h4>
        <div class="index-show-p"></div>

        <h4>v-if vs v-show</h4>
        <div class="index-show-p"></div>

        <h4>v-if 与 v-for 一起使用</h4>
        <div class="index-show-p"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            handleBar: `{{#if ok}}<br><br><p>Yes</p><br>{{/if}}`,
            vContent: `<h1 v-if="ok">Yes</h1>`,
            vEContent: `<h1 v-if="ok">Yes</h1>

            <h1 v-else>No</h1>`,
            message: `<template v-if="ok">

                <h1>Title</h1>

                <p>Paragraph 1</p>

                <p>Paragraph 2</p>

            </template>`

        }
    }
}
</script>
