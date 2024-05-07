<template>
  <div class="contentIncommingLine">
    <h1 class="title">Установление контакта. Инфоповод.</h1>
    <p class="greetings">
      Здравствуйте, Императорский монетный двор, меня зовут {{ myName }}, как
      могу к Вам обращаться?
    </p>
    <MyInput
      :user-name="userName"
      @update:userName="handleUserNameUpdate"
      placeholder="Введите имя пользователя"
    />
    <p>
      <b>{{ savedName || "ИО" }}</b
      >, спасибо за Ваш звонок. Какую медаль Вы хотели заказать?
    </p>
    <MedalSelector :medals="medals" @selectMedals="selectMedals" />
    <p>
      Продиктуйте пожалуйста КОД резервирования, который указан в буклете.<b>{{
        savedName || "ИО"
      }}</b
      >, подскажите пожалуйста рекламу видели в газете, по ТВ или в буклете?
    </p>
    <p>
      Прекрасный выбор, для оформления заказа необходимы Ваши ФИО полностью и
      номер телефона продиктуйте, пожалуйста. Медаль по какому адресу
      направляем, продиктуйте пожалуйста. (фиксируем адрес : индекс, область,
      район, населенный пункт, улица, номер дома, квартира, эл. почта).
    </p>
    <div class="nna">
      <h2 class="title">Презентация NNA</h2>
      <div class="presentationNna" v-if="selectedMedal && selectedMedal.prices">
        <p>
          <b>{{ savedName || "ИО" }}</b
          >, пока данные загружаются, расскажу, что в рамках нашего разговора у
          Вас есть возможность заказать улучшенную версию
          {{ isMedal ? `медали` : `банкноты` }} с покрытием чистым золотом 999
          пробы. Это не только красиво, также важно, что чистое золото не
          окисляется, а значит сохраняет свой благородный блеск на столетия!
          Стоимость Премиум-версии {{ isMedal ? `медали` : `банкноты` }} всего
          {{ selectedMedal.prices.upgrade }} рублей. А так же, вместе с медалью,
          мы отправим Вам сертификат подлинности, который подтверждает качество
          и оригинальность {{ isMedal ? `медали` : `банкноты` }}.
          <span
            ><b>{{ selectedMedal.presents }}</b></span
          >
        </p>
      </div>
      <div class="opposition">
        <h3 class="oppositionTitle">Отработка контактного сопротивления</h3>
        <div class="oppositionBtn">
          <MyButton
            v-for="res in resistance"
            :key="res.id"
            :buttonText="res.name"
            :buttonClass="'btn-danger'"
            @click="selectResistanceBlock1(res)"
          />
        </div>
      </div>
      <div v-if="randomResponseBlock1">
        <b>{{ savedName || "ИО" }}</b> {{ randomResponseBlock1 }}
      </div>
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
      <div class="opposition">
        <h3 class="oppositionTitle">Отработка контактного сопротивления</h3>
        <div class="oppositionBtn">
          <MyButton
            v-for="res in resistance"
            :key="res.id"
            :buttonText="res.name"
            :buttonClass="'btn-danger'"
            @click="selectResistanceBlock2(res)"
          />
        </div>
      </div>
      <div v-if="randomResponseBlock2">
        <b>{{ savedName || "ИО" }}</b>
        {{ randomResponseBlock2 }}
      </div>
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
      <div class="compliment">
        <p>
          <b>{{ savedName || "ИО" }}</b
          >, в качестве комплимента дарим бесплатную электронную книгу о
          нумизматике и коллекционировании. Скачать книгу вы сможете по ссылке,
          которую вам направим по смс. Вам нужно будет просто указать адрес
          электронной почты и наслаждаться чтением.
        </p>
      </div>
    </div>
    <EndOfCall :name="savedName" :is-medal="isMedal" />
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";
import MyInput from "@/UI/MyInput";
import EndOfCall from "@/components/EndOfCall.vue";
import apiService from "@/services/apiService";
import MedalSelector from "@/components/MedalSelector.vue";
import OrderTable from "@/components/OrderTable.vue";

export default {
  components: {
    MyButton,
    MyInput,
    EndOfCall,
    MedalSelector,
    OrderTable,
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
