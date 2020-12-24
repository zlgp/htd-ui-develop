<template>
  <div>
    <div class="htd-select">
      <!---->
      <div class="htd-input htd-input--suffix">
        <!---->
        <input
          type="text"
          readonly="readonly"
          autocomplete="off"
          placeholder="请选择"
          class="htd-input__inner"
        />
        <!---->
        <span class="htd-input__suffix">
          <span class="htd-input__suffix-inner">
            <i class="htd-select__caret htd-input__icon htd-icon-down"></i>
          </span>
        </span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "HtdSelect"
};
</script>

<style lang="scss">
.htd-select {
  display: inline-block;
  position: relative;
  width: 240px;
}
.htd-select > .htd-input {
  display: block;
}
.htd-input--suffix .htd-input__inner {
  padding-right: 30px;
  cursor: pointer;
}
.htd-input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.htd-input__suffix {
  position: absolute;
  height: 100%;
  right: 5px;
  top: 0;
  text-align: center;
  color: #c0c4cc;
  transition: all 0.3s;
  pointer-events: none;
}
.htd-input__suffix-inner {
  pointer-events: all;
}
.ehtd-select .ehtd-input .htd-select__caret {
  color: #c0c4cc;
  font-size: 14px;
  transition: transform 0.3s;
  transform: rotate(180deg);
  cursor: pointer;
}
.htd-input__icon {
  width: 25px;
  line-height: 40px;
  height: 100%;
  text-align: center;
}
</style>