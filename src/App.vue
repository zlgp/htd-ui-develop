<template>
  <div id="app">
    <!-- type属性 -->
    <div class="row">
      <htd-button @click="handleClick($event)">默认</htd-button>
      <htd-button type="primary">主要按钮</htd-button>
      <htd-button type="success">成功按钮</htd-button>
      <htd-button type="info">信息按钮</htd-button>
      <htd-button type="warning">警告按钮</htd-button>
      <htd-button type="danger">危险按钮</htd-button>
    </div>
    <!-- plain朴素按钮 -->
    <div class="row">
      <htd-button plain>朴素按钮</htd-button>
      <htd-button type="primary" plain>主要按钮</htd-button>
      <htd-button type="success" plain>成功按钮</htd-button>
      <htd-button type="info" plain>信息按钮</htd-button>
      <htd-button type="warning" plain>警告按钮</htd-button>
      <htd-button type="danger" plain>危险按钮</htd-button>
    </div>
    <!-- round圆角按钮 -->
    <div class="row">
      <htd-button round>圆角按钮</htd-button>
      <htd-button type="primary" round>主要按钮</htd-button>
      <htd-button type="success" round>成功按钮</htd-button>
      <htd-button type="info" round>信息按钮</htd-button>
      <htd-button type="warning" round>警告按钮</htd-button>
      <htd-button type="danger" round>危险按钮</htd-button>
    </div>
    <!-- circle圆形按钮 -->
    <div class="row">
      <htd-button circle icon="htd-icon-search"></htd-button>
      <htd-button type="primary" circle icon="htd-icon-edit"></htd-button>
      <htd-button type="success" circle icon="htd-icon-check"></htd-button>
      <htd-button type="info" circle icon="htd-icon-message"></htd-button>
      <htd-button type="warning" circle icon="htd-icon-delete"></htd-button>
      <htd-button type="danger" circle icon="htd-icon-delete"></htd-button>
    </div>
    <!-- disabled属性 -->
    <div class="row">
      <htd-button disabled>圆角按钮</htd-button>
      <htd-button disabled>主要按钮</htd-button>
      <htd-button disabled>成功按钮</htd-button>
      <htd-button disabled>信息按钮</htd-button>
      <htd-button disabled>警告按钮</htd-button>
      <htd-button disabled>危险按钮</htd-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      console.log(e);

      console.log(123);
    }
  }
};
</script>
<style lang="scss">
.row {
  margin-bottom: 20px;
  .htd-button {
    margin-right: 20px;
  }
}
</style>
