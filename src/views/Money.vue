<template>
    <div>
        <Layout :class-prefix="'layout'">
           <Tags></Tags>
            <Notes></Notes>
            <Types :xxx=" 3333 " :yyy="'hi'"></Types>
            <NumberPad></NumberPad>
        </Layout>
    </div>
</template>

<script lang="ts">
  import Numberpad from '@/components/money/Numberpad.vue';
  import Tags from '@/components/money/Tags.vue';
  import Types from '@/components/money/Types.vue';
  import Notes from '@/components/money/Notes.vue';

  export default {
    name: 'Money',
    components:{
      NumberPad:Numberpad,
      Tags:Tags,
      Types:Types,
      Notes:Notes
    }
  };
</script>
<style lang="scss">
    .layout-content{

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>

