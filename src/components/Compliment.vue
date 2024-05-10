<template>
  <div class="compliment">
    <p>
      <b>{{ savedName || "ИО" }}</b
      >, в качестве комплимента дарим бесплатную электронную книгу о нумизматике
      и коллекционировании. Скачать книгу вы сможете по ссылке, которую вам
      направим по смс. Вам нужно будет просто указать адрес электронной почты и
      наслаждаться чтением.
    </p>
  </div>
</template>

<script>
export default {
  name: "Compliment",
  props: {
    savedName: String,
  },
};
</script>

<style lang="scss" scoped></style>
