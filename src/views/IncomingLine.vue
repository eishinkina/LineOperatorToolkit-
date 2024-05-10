<template>
  <div class="contentIncommingLine">
    <ContactIntroduction
      :myName="myName"
      :userName="userName"
      :savedName="savedName"
      :medals="medals"
      @update:userName="handleUserNameUpdate"
      @selectMedals="selectMedals"
    />
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
            v-for="res in root"
            :key="res.id"
            :buttonClass="'btn-info'"
            :buttonText="res.name"
            @click="selectedRootBlock1(res)"
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
            @click="selectedNna(res)"
          />
        </div>
      </div>
      <div v-if="randomNna">
        <b>{{ savedName || "ИО" }}</b> {{ randomNna }}
      </div>
    </div>
    <div class="collection">
      <h2 class="title">Презентация коллекции.</h2>
      <div class="collection-presentation">
        <b>{{ savedName || "ИО" }}</b
        >, пока формирую заказ, расскажу Вам, что для тех, кто заказывает эту
        {{ isMedal ? `медаль` : `банкноту` }} также действует спец.предложение
        на коллекцию
        {{ selectedMedal.collections?.descriptions }}
        <div class="collection-reserve">
          <button
            type="button"
            class="btn btn-secondary"
            @click="showCollectionsReserve = !showCollectionsReserve"
          >
            Резервная коллекция
          </button>
          <p v-if="showCollectionsReserve">
            {{ selectedMedal.collectionsReserve?.descriptions }}
          </p>
        </div>
      </div>
      <ResistanceHandling
        :resistance="resistance"
        :savedName="savedName"
        :handleClick="selectResistanceBlock2"
        :randomResponse="randomResponseBlock2"
      />
      <div class="root">
        <h3 class="rootTitle">Выявление причин</h3>
        <div class="rootBtn">
          <MyButton
            v-for="res in root"
            :key="res.id"
            :buttonClass="'btn-info'"
            :buttonText="res.name"
            @click="selectedRootBlock2(res)"
          />
        </div>
      </div>
      <div v-if="randomRootBlock2">
        <b>{{ savedName || "ИО" }}</b> {{ randomRootBlock2 }}
      </div>
      <div class="objectionsCollection">
        <h3 class="title">Работа с возражениями х1 попытка</h3>
        <div class="objectionsCollectionBtn">
          <MyButton
            v-for="res in workingCross"
            :key="res.id"
            :buttonText="res.name"
            :buttonClass="'btn-primary'"
            @click="selectedCross(res)"
          />
        </div>
        <div v-if="randomCross">
          <b>{{ savedName || "ИО" }}</b> {{ randomCross }}
        </div>
      </div>
    </div>
    <OrderPlacement
      :savedName="savedName"
      :selectedMedal="selectedMedal"
      :isMedal="isMedal"
    />
    <Compliment :savedName="savedName" />
    <EndOfCall :name="savedName" :is-medal="isMedal" />
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";
import EndOfCall from "@/components/EndOfCall.vue";
import apiService from "@/services/apiService";
import PresentationNNA from "@/components/PresentationNNA.vue";
import ResistanceHandling from "@/components/ResistanceHandling.vue";
import Compliment from "@/components/Compliment.vue";
import OrderPlacement from "@/components/OrderPlacement";
import ContactIntroduction from "@/components/ContactIntroduction.vue";

export default {
  components: {
    MyButton,
    EndOfCall,
    PresentationNNA,
    ResistanceHandling,
    Compliment,
    OrderPlacement,
    ContactIntroduction,
  },
  name: "IncomingLine",

  data() {
    return {
      myName: "Екатерина",
      userName: "",
      savedName: "",
      medals: [],
      selectedMedal: {},
      isMedal: true,

      workingNna: [],
      selectedNnaData: {},
      randomNna: "",

      workingCross: [],
      selectedCrossData: {},
      randomCross: "",

      resistance: [],
      selectedResistanceBlock1: {},
      selectedResistanceBlock2: {},
      randomResponseBlock1: "",
      randomResponseBlock2: "",

      root: [],
      selectedRootBlock1Data: {},
      selectedRootBlock2Data: {},
      randomRootBlock1: "",
      randomRootBlock2: "",

      isReserveCollectionShown: false,
      showCollectionsReserve: false,
    };
  },

  computed: {},

  watch: {
    selectedMedal: {
      deep: true,
      handler(value) {
        this.showCollectionsReserve = false;

        if (value.name === "1р 1961г") {
          this.isMedal = false;
        } else {
          this.isMedal = true;
        }
      },
    },
  },

  methods: {
    async getMedals() {
      try {
        const { data } = await apiService.getMedals();
        this.medals = data;
      } catch (e) {
        console.error("Ошибка при загрузке медалей:", e);
      }
    },
    async getResistance() {
      try {
        const { data } = await apiService.getResistance();
        this.resistance = data;
      } catch (e) {
        console.error("Ошибка при загрузке сопротивлений:", e);
      }
    },
    async getRoot() {
      try {
        const { data } = await apiService.getRoot();
        this.root = data;
      } catch (error) {
        console.error("Ошибка при загрузке корневых данных:", error);
      }
    },
    async getNna() {
      try {
        const { data } = await apiService.getWorkingNna();
        this.workingNna = data;
      } catch (error) {
        console.error("Ошибка при загрузке данных NNA:", error);
      }
    },
    async getCollection() {
      try {
        const { data } = await apiService.getWorkingCollection();
        this.workingCross = data;
      } catch (error) {
        console.error("Ошибка при загрузке коллекции:", error);
      }
    },

    capitalizeFirstLetter(string) {
      return string
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },

    handleUserNameUpdate(newUserName) {
      this.userName = newUserName;
      this.savedName = this.capitalizeFirstLetter(newUserName.trim() || "ИО");
    },

    selectMedals(medal) {
      this.selectedMedal = medal;
    },

    getRandomElement(items) {
      return items[Math.floor(Math.random() * items.length)];
    },

    selectedRootBlock1(res) {
      this.selectedRootBlock1Data = res;
      this.randomRootBlock1 = this.getRandomElement(res.responses);
    },

    selectedRootBlock2(res) {
      this.selectedRootBlock2Data = res;
      this.randomRootBlock2 = this.getRandomElement(res.responses);
    },
    selectResistanceBlock1(res) {
      this.selectedResistanceBlock1 = res;
      this.randomResponseBlock1 = this.getRandomElement(res.responses);
    },

    selectResistanceBlock2(res) {
      this.selectedResistanceBlock2 = res;
      this.randomResponseBlock2 = this.getRandomElement(res.responses);
    },
    selectedNna(res) {
      this.selectedNnaData = res;
      this.randomNna = this.getRandomElement(res.responses);
    },
    selectedCross(res) {
      this.selectedCrossData = res;
      this.randomCross = this.getRandomElement(res.responses);
    },
  },

  created() {
    this.getMedals();
    this.getResistance();
    this.getRoot();
    this.getNna();
    this.getCollection();
  },
};
</script>

<style lang="scss"></style>
