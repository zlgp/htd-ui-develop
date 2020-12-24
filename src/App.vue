<template>
  <div id="app">
    <!-- 下划线 -->
    <h2>下划线</h2>
    <div style="margin-bottom:100px">
      <htd-link underline>主要链接</htd-link>
      <htd-link type="primary" underline>主要链接</htd-link>
      <htd-link type="success" underline>成功链接</htd-link>
      <htd-link type="warning" underline>警告链接</htd-link>
      <htd-link type="danger" underline>危险链接</htd-link>
      <htd-link type="info" underline>信息链接</htd-link>
    </div>
    <!-- 是否禁用 -->
    <div style="margin-bottom:100px">
      <htd-link disabled>主要链接</htd-link>
      <htd-link type="primary" href="https://element.eleme.io">主要链接</htd-link>
      <htd-link type="success">成功链接</htd-link>
      <htd-link type="warning">警告链接</htd-link>
      <htd-link type="danger">危险链接</htd-link>
      <htd-link type="info">信息链接</htd-link>
    </div>
    <!-- 加图标 -->
    <div style="margin-bottom:100px">
      <htd-link disabled>主要链接</htd-link>
      <htd-link type="primary" href="https://element.eleme.io" icon="htd-icon-close">主要链接</htd-link>
      <htd-link type="success">成功链接</htd-link>
      <htd-link type="warning">警告链接</htd-link>
      <htd-link type="danger" icon="htd-icon-search">警告链接</htd-link>
      <htd-link type="info">
        <i class="htd-icon-search"></i>
        信息链接
      </htd-link>
    </div>
    <!-- 按钮 -->
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
    本质是注册:value="value" 注册@input事件,-->
    <htd-input
      type="password"
      placeholder="请输入内容"
      name="username"
      v-model="username"
      clearable
      showPassword
    ></htd-input>
    <br />

    <!-- 开关 -->
    <htd-switch name="username" v-model="active" active-color="#000000" inactive-color="#ff0000"></htd-switch>
    <br />
    <!-- radio -->
    <div>
      <htd-radio label="1" v-model="gender">男</htd-radio>
      <htd-radio label="0" v-model="gender">女</htd-radio>
    </div>
    <!-- radio组 -->
    <div>
      <h1>radio组</h1>
      <htd-radio-group v-model="genderGroup">
        <htd-radio label="1">男</htd-radio>
        <htd-radio label="0">女</htd-radio>
      </htd-radio-group>
    </div>

    <div>
      <htd-checkbox label="1" v-model="checked"></htd-checkbox>
    </div>

    <div>
      <htd-checkbox-group v-model="checkList">
        <htd-checkbox label="复选框 A"></htd-checkbox>
        <htd-checkbox label="复选框 B"></htd-checkbox>
      </htd-checkbox-group>
    </div>

    <!-- form组件 -->
    <div>
      <htd-form :model="model" label-width="400px">
        <htd-form-item label="用户名">
          <htd-input placeholder="请输入用户名" v-model="model.username"></htd-input>
        </htd-form-item>
        <htd-form-item label="开关">
          <htd-switch v-model="model.active"></htd-switch>
        </htd-form-item>
      </htd-form>
    </div>
    <!-- 步进器 -->
    <h2>步进器</h2>
    <htd-input-number
      v-model="number"
      placeholder="请输入"
      :step="5"
      :min="1"
      :max="20"
      @blur="handleBlur($event)"
      @change="handleChange"
    ></htd-input-number>
    <!-- select -->
    <h2>select</h2>
    <htd-select>
      
    </htd-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      username: "",
      active: false,
      gender: "1",
      genderGroup: "1",
      checked: true,
      checkList: [],
      model: {
        username: "",
        active: true
      },
      number: 1
    };
  },
  methods: {
    // 按钮
    handleClick(e) {
      console.log(e);
      console.log(123);
    },
    // 步进器
    handleBlur(e) {
      console.log(e);
      
    },
    handleChange(currentValue,oldValue){
    console.log(currentValue);
    console.log(oldValue);
    
    
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
.htd-link {
  margin-right: 20px;
}
</style>
