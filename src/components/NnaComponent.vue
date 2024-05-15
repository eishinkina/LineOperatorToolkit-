<template>
  <div class="nna">
    <h2 class="title">Презентация NNA</h2>
    <PresentationNNA
      :selectedMedal="selectedMedal"
      :isMedal="isMedal"
      :savedName="savedName"
    />
    <ResistanceHandling
      :resistance="resistance"
      :savedName="savedName"
      :handleClick="selectResistanceBlock1"
      :randomResponse="randomResponseBlock1"
    />
    <div class="root">
      <h3 class="rootTitle">Выявление причин</h3>
      <div class="rootBtn">
        <MyButton
          :onClick="handleClick"
          v-for="res in root"
          :key="res.id"
          :buttonClass="'btn-info'"
          :buttonText="res.name"
          @click="$emit('selectedRootBlock1', $event)"
        />
      </div>
    </div>
    <div v-if="randomRootBlock1">
      <b>{{ savedName || "ИО" }}</b> {{ randomRootBlock1 }}
    </div>
    <div class="objectionsNNA">
      <h3 class="title">Работа с возражениями х2 попытки</h3>
      <div class="objectionNNAbtn">
        <MyButton
          v-for="res in workingNna"
          :key="res.id"
          :buttonText="res.name"
          :buttonClass="'btn-primary'"
          @click="$emit('selectedNna', $event)"
        />
      </div>
    </div>
    <div v-if="randomNna">
      <b>{{ savedName || "ИО" }}</b> {{ randomNna }}
    </div>
  </div>
</template>

<script>
import PresentationNNA from "@/components/PresentationNNA.vue";
import ResistanceHandling from "@/components/ResistanceHandling.vue";
import MyButton from "@/UI/MyButton.vue";

export default {
  components: {
    PresentationNNA,
    ResistanceHandling,
    MyButton,
  },
  props: {
    selectedMedal: Object,
    isMedal: Boolean,
    savedName: String,
    resistance: Array,
    handleClick: Function,
    randomResponse: String,
    root: Array,
    randomRootBlock1: String,
    workingNna: Array,
    randomNna: String,
  },
};
</script>

<style lang="scss" scoped></style>
