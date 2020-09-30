<template>
    <div>
        <Layout>
            <div class="tags">
                <div class="current">
                    <ul>
                        <li>衣</li>
                        <li>食</li>
                        <li>住</li>
                        <li>行</li>
                    </ul>
                </div>
                <div class="new">
                    <button>新增标签</button>
                </div>
            </div>
            <div class="notes">
                <label>
                    <span>备注</span>
                    <input type="text"/>
                </label>

            </div>
            <div class="type">
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </div>
            <div class="output"></div>
            <div class="numberpad">
                <div class="buttonList">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>.</button>
                    <button>%</button>
                    <button>OK</button>
                </div>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Money'
  };
</script>

<style scoped lang="scss">


</style>