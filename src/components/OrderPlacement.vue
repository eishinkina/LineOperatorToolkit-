<template>
  <div class="placingAnOrder">
    <h2 class="title">Оформление заказа</h2>
    <p>
      <b>{{ savedName || "ИО" }}</b> , обращаю ваше внимание , что в рамках
      акции премиум версия приобретается взамен стандартной (бесплатной).
      Поздравляю Вас с таким приобретением.
    </p>
    <OrderTable
      :selectedMedal="selectedMedal"
      :isMedal="isMedal"
      :savedName="savedName"
    />
  </div>
</template>

<script>
import OrderTable from "@/components/OrderTable.vue";
export default {
  name: "OrderPlacement",
  components: {
    OrderTable,
  },
  props: {
    savedName: String,
    selectedMedal: Object,
    isMedal: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>
