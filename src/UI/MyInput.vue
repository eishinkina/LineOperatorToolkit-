<template>
  <div class="input-group mb-3">
    <input
      v-model="localUserName"
      type="text"
      class="form-control"
      :placeholder="placeholder"
      aria-label="Имя пользователя получателя"
      aria-describedby="button-addon2"
    />
    <button
      @click="submitUserName"
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    userName: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Введите имя клиента",
    },
  },
  data() {
    return {
      localUserName: this.userName,
    };
  },
  methods: {
    submitUserName() {
      this.$emit("update:userName", this.localUserName);
      this.localUserName = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
