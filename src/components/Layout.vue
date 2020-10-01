<template>
    <div>
        <div class="nav-wrapper">

            <div class="content" :class="`${classPrefix}-content`">
                <slot></slot>
            </div>

            <Nav></Nav>

        </div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout',
    props:['classPrefix']
  };
</script>

<style scoped lang="scss">
    .nav-wrapper{

        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;

    }

</style>