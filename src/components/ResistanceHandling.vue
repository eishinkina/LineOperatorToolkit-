<template>
  <div class="opposition">
    <h3 class="oppositionTitle">Отработка контактного сопротивления</h3>
    <div class="oppositionBtn">
      <MyButton
        v-for="res in resistance"
        :key="res.id"
        :buttonText="res.name"
        :buttonClass="'btn-danger'"
        @click="handleClick(res)"
      />
    </div>
  </div>
  <div v-if="randomResponse">
    <b>{{ savedName }}</b> {{ randomResponse }}
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";

export default {
  name: "ResistanceHandling",
  components: {
    MyButton,
  },
  props: {
    resistance: Array,
    savedName: String,
    handleClick: Function,
    randomResponse: String,
  },
};
</script>

<style lang="scss" scoped>
.opposition {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  .oppositionBtn {
    display: flex;
    white-space: nowrap;
    gap: 20px;
  }
}
</style>
