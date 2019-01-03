<template>
    <p>{{single.id+1}}.{{single.text}}</p>
</template>

<script>
export default {
    props: {
        single: {
            default: {},
            type: Object
        }
    }
}
</script>

<style>

</style>
