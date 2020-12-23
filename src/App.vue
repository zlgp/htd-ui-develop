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

    <!-- 对话框 -->
    <!-- sync其实是个语法糖:粗略可以理解为父子组件双向数组绑定 -->
    <!-- 详细来说就是:子组件要更新父组件传过来的值,本来应该在父组件中添加自定义事件,然后子组件触发父组件中的事件,传递参数 -->
    <!-- 父组件中的值会更新,sync就是让父组件省略掉注册自定义事件 -->
    <!-- visible.sync="visible"这一句相当于  1.visible="visible 2@update:visible="close"-->
    <htd-dialog title="温馨提示" width="20%" top="30px" :visible.sync="visible">
      <ul>
        <li>aaa</li>
      </ul>
      <template v-slot:footer>
        <htd-button @click="visible=false">确定</htd-button>
        <htd-button @click="visible=false" type="primary">取消</htd-button>
      </template>
    </htd-dialog>
    <!-- 具名插槽 -->
    <!-- <htd-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </htd-dialog>-->

    <!--input  -->
     <!-- v-model实质是个语法糖,
    本质是注册:value="value" 注册@input事件, -->
    <htd-input type="password" placeholder="请输入内容" name="username" v-model="username" clearable showPassword></htd-input>
     <br>

     <!-- 开关 -->
     <htd-switch name="username" v-model="active" active-color="#000000" inactive-color="#ff0000"></htd-switch>
  
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      username: "",
      active:false
    };
  },
  methods: {
    // 按钮
    handleClick(e) {
      console.log(e);
      console.log(123);
    }
    // 弹窗框
    // close(value) {
    //   this.visible = value;
    // }
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
.htd-input {
  width: 180px !important;
  
}
</style>
