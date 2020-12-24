<template>
  <div>
    <div class="htd-input-number">
      <span
        role="button"
        class="htd-input-number__decrease"
        @click="handleDecrease()"
        :class="{
        'is-disabled':model==min
      }"
      >
        <i class="htd-icon-prevent"></i>
      </span>
      <span
        role="button"
        class="htd-input-number__increase"
        @click="handleIncrease()"
        :class="{
        'is-disabled':model==max||model>max
      }"
      >
        <i class="htd-icon-increase"></i>
      </span>
      <div class="htd-input">
        <!---->
        <input
          type="text"
          class="htd-input__inner"
          v-model="model"
          :placeholder="placeholder"
          :name="name"
          @change="handleChange()"
          @blur="handleBlur($event)"
          @focus="handleFocus($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HtdInputNumber",
  data() {
    return {
      currentVal: 0
    };
  },
  props: {
    value: {
      type: [Number, String],
      required: true,
      default: 0
    },
    // 最小值
    min: {
      type: Number,
      default: -Infinity
    },
    // 最大值
    max: {
      type: Number,
      default: Infinity
    },
    // 步数
    step: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    // 我们要改变value的值,直接用value是不行的,因为value是父组件传过来的,不能修改的
    model: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit("input", value);
      }
    }
  },
  watch: {
    model(newVal,oldVal) {
      this.currentVal = oldVal;
    }
  },

  methods: {
    handleDecrease() {
      if (this.model != this.min) {
        this.model = parseInt(this.model) - this.step;
      }
    },
    handleIncrease() {
      if (this.model < this.max) {
        this.model = parseInt(this.model) + this.step;
      }
    },
    handleChange() {
      this.$emit("change", this.currentVal, this.model);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.htd-input-number {
  position: relative;
  display: inline-block;
  width: 180px;
  line-height: 38px;
}
.htd-input-number__decrease {
  left: 1px;
  border-radius: 4px 0 0 4px;
  border-right: 1px solid #dcdfe6;
}
.htd-input-number__increase {
  right: 1px;
  border-radius: 0 4px 4px 0;
  border-left: 1px solid #dcdfe6;
}
.htd-input-number__increase,
.htd-input-number__decrease {
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 40px;
  height: auto;
  text-align: center;
  background: #f5f7fa;
  color: #606266;
  cursor: pointer;
  font-size: 13px;
}

.htd-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
[class^="htd-icon-"] {
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.htd-input-number .htd-input__inner {
  -webkit-appearance: none;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
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
.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>