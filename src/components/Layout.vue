<template>
    <div>
        <div class="nav-wrapper">

            <div class="content">
                <slot></slot>
            </div>

            <Nav></Nav>

        </div>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Layout'
  };
</script>

<style scoped lang="scss">
    .nav-wrapper{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        border: 1px solid blue;
    }

</style>