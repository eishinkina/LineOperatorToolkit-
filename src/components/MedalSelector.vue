<template>
  <div class="medalsBtn">
    <MyButton
      v-for="medal in medals"
      :key="medal.id"
      :button-class="'btn-secondary'"
      @click="$emit('selectMedals', medal)"
      :button-text="medal.name"
    />
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";
export default {
  components: {
    MyButton,
  },
  props: ["medals"],
  emits: ["selectMedals"],
};
</script>

<style lang="scss" scoped>
.medalsBtn {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding-bottom: 30px;
}
</style>
