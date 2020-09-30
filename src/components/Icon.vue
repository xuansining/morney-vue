<template>
    <div>
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#'+name"></use>
        </svg>
    </div>
</template>

<script lang="ts">

  const importAll=(requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
  try{
    importAll(require.context('../assets/icons',true,/\.svg$/))
  }catch (e) {
    console.log(e);
  }

  export default {
    name: 'Icon',
    props:['name']


  };
</script>

<style scoped lang="scss">
    .icon {
        width:100% ; height: 100%;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>