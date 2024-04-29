<template>
  <button :class="`btn ${buttonClass}`" :type="buttonType" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      default: "button",
    },
    buttonClass: {
      type: String,
      default: "btn-secondary",
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
