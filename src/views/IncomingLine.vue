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
    <div class="medalsBtn">
      <MyButton
        v-for="medal in medals"
        :key="medal.id"
        :button-class="'btn-secondary'"
        @click="selectedMedal = medal"
        :button-text="medal.name"
      />
    </div>
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
          Вас есть возможность заказать улучшенную версию медали с покрытием
          чистым золотом 999 пробы. Это не только красиво, также важно, что
          чистое золото не окисляется, а значит сохраняет свой благородный блеск
          на столетия! Стоимость Премиум-версии медали всего
          {{ selectedMedal.prices.upgrade }} рублей. А так же, вместе с медалью,
          мы отправим Вам сертификат подлинности, который подтверждает качество
          и оригинальность медали.
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
        медаль также действует спец.предложение на коллекцию
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
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Бесплатная</th>
              <th>Бесплатная + кросс</th>
              <th>Премиум</th>
              <th>Премиум + кросс</th>
            </tr>
          </thead>
          <tbody v-if="selectedMedal.name">
            <tr>
              <td>
                {{
                  `${this.savedName || "ИО"}, вы заказали бесплатную медаль ${
                    selectedMedal.name
                  }. В сумму вашего заказа входит 349 руб. за
                доставку.`
                }}
              </td>
              <td>
                {{
                  `${
                    this.savedName || "ИО"
                  }, в сумму Вашего заказа входит: бесплатная медаль плюс 349р. за доставку. - стоимость первой медали коллекции со скидкой ${
                    selectedMedal.collections.discountPrice
                  } р.  и сбор почты.- а следующие по ${
                    selectedMedal.collections.price
                  } р. и плюс 349 р. за доставку  Итого - …р.Оплачиваете наложенным платежом, который составляет примерно 2,8%`
                }}
              </td>
              <td>
                {{
                  `${
                    this.savedName || "ИО"
                  }, в сумму Вашего заказа входит:- стоимость медали со скидкой ${
                    selectedMedal.prices.upgradeDiscount
                  }/ ${
                    selectedMedal.prices.upgrade
                  }. и плюс 349 р за доставку Итого -1344р./ 2048р Оплачиваете наложенным платежом, который составляет примерно 2,8%,`
                }}
              </td>
              <td>
                {{
                  `${
                    this.savedName || "ИО"
                  }, в сумму Вашего заказа входит:- стоимость медали со скидкой ${
                    selectedMedal.prices.upgradeDiscount
                  }/ ${
                    selectedMedal.prices.upgrade
                  } и плюс 349 р за доставку и сбор почты. - стоимость первой медали коллекции со скидкой${
                    selectedMedal.collections.discountPrice
                  }р.  и сбор почты.- а следующие по ${
                    selectedMedal.collections.price
                  } р. и плюс …р. Оплачиваете наложенным платежом, который составляет примерно 2,8%а доставку.  Итого - …р.`
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
    <div class="edingCall">
      <h2 class="title">Завершение разговора</h2>
      <table>
        <thead>
          <tr>
            <th>Бесплатная</th>
            <th>Бесплатная + кросс</th>
            <th>Премиум</th>
            <th>Премиум + кросс</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="offerEdit in offersEdit" :key="offerEdit.idEdit">
            <td>{{ `${this.savedName || "ИО"}${offerEdit.freeEdit}` }}</td>
            <td>{{ `${this.savedName || "ИО"}${offerEdit.freeCrossEdit}` }}</td>
            <td>{{ `${this.savedName || "ИО"}${offerEdit.premiumEdit}` }}</td>
            <td>{{ `${this.savedName || "ИО"}${offerEdit.premiumCrossEdit}` }}</td>
          </tr>
        </tbody>
      </table>
      <div class="edit">
        <p>Скажите, пожалуйста, остались ли у вас какие-то вопросы?</p>
        <p>Благодарим Вас за выбор хорошего Вам дня, до свидания!</p>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/UI/MyButton.vue";
import MyInput from "@/UI/MyInput";
export default {
  components: {
    MyButton,
    MyInput,
  },
  name: "IncomingLine",

  data() {
    return {
      myName: "Екатерина",
      userName: "",
      savedName: "",
      medals: [],
      selectedMedal: {},

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
      offersEdit: [
        {
          idEdit: 1,
          freeEdit:
            ", заказ ваш передан на сборку, заранее поздравляю Вас, уверен(а) медаль вам безумно понравится! Бесплатная медаль поступит в почтовый ящик вместе с квитанцией, произведите оплату в ближайшие дни.  Сроки поступления зависят от региона,  в среднем это 10 дней.   Для удобства отслеживания посылки, на ваш мобильный номер телефона поступит СМС с трек-номером. , скажите, пожалуйста, по этому номеру отправляем СМС оповещение?",
          freeCrossEdit:
            " Обратите внимание, что  медали серии и бесплатная медаль проходят разную систему проверки и отправляются отдельно. Бесплатная медаль поступит в почтовый ящик вместе с квитанцией, произведите оплату в ближайшие дни. А медаль серии  необходимо будет забрать с почтового отделения, сразу как получите уведомление.  Сроки поступления зависят от региона,  в среднем это 10 дней, заказ ваш передан на сборку,  Обратите внимание, почта России сократила сроки хранения посылок, поэтому рекомендуем забрать медаль сразу, как только получите почтовое уведомление. Для удобства отслеживания посылки, на ваш мобильный номер телефона поступит СМС с трек-номером, скажите, пожалуйста, по этому номеру отправляем СМС оповещение?",
          premiumEdit:
            " , заказ ваш передан на сборку,  Обратите внимание, почта России сократила сроки хранения посылок, поэтому рекомендуем забрать медаль сразу, как только получите почтовое уведомление. Для удобства отслеживания посылки, на ваш мобильный номер телефона поступит СМС с трек-номером, скажите, пожалуйста, по этому номеру отправляем СМС оповещение?",
          premiumCrossEdit:
            " , обратите внимание, что  медали серии и покрытая золотом медаль проходят разную систему проверки и отправляются отдельно, поэтому уведомлений у Вас будет два, и, соответственно, за посылками возможно нужно будет тоже сходить два раза, заказ ваш передан на сборку,  Обратите внимание, почта России сократила сроки хранения посылок, поэтому рекомендуем забрать медаль сразу, как только получите почтовое уведомление. Для удобства отслеживания посылки, на ваш мобильный номер телефона поступит СМС с трек-номером, скажите, пожалуйста, по этому номеру отправляем СМС оповещение?",
        },
      ],
    };
  },

  computed: {},

  watch: {
    selectedMedal: {
      deep: true,
      handler() {
        this.showCollectionsReserve = false;
      },
    },
  },
  methods: {
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

    async getMedals() {
      const { data } = await this.$http.get(`/api/medals.json`);
      this.medals = data;
    },
    async getResistanse() {
      const { data } = await this.$http.get(`/api/resistance.json`);
      this.resistance = data;
    },
    async getRoot() {
      const { data } = await this.$http.get(`/api/root.json`);
      this.root = data;
    },
    async getNna() {
      const { data } = await this.$http.get(`/api/workingNna.json`);
      console.log(data);
      this.workingNna = data;
    },
    async getCollection() {
      const { data } = await this.$http.get(`/api/workingCollection.json`);
      console.log(data);
      this.workingCross = data;
    },

    selectedRootBlock1(res) {
      this.selectedRootBlock1Data = res;
      this.randomRootBlock1 = this.randomRoot(res.responses);
    },
    selectedRootBlock2(res) {
      this.selectedRootBlock2Data = res;
      this.randomRootBlock2 = this.randomRoot(res.responses);
    },

    randomRoot(responses) {
      return responses[Math.floor(Math.random() * responses.length)];
    },

    selectResistanceBlock1(res) {
      this.selectedResistanceBlock1 = res;
      this.randomResponseBlock1 = this.randomResponse(res.responses);
    },

    selectResistanceBlock2(res) {
      this.selectedResistanceBlock2 = res;
      this.randomResponseBlock2 = this.randomResponse(res.responses);
    },

    randomResponse(responses) {
      return responses[Math.floor(Math.random() * responses.length)];
    },
    selectedNna(res) {
      this.selectedNnaData = res;
      this.randomNna = this.getRandomNna(res.responses);
    },
    getRandomNna(responses) {
      return responses[Math.floor(Math.random() * responses.length)];
    },
    selectedCross(res) {
      this.selectedCrossData = res;
      this.randomCross = this.getRandomCross(res.responses);
    },
    getRandomCross(responses) {
      return responses[Math.floor(Math.random() * responses.length)];
    },
  },

  created() {
    this.getMedals();
    this.getResistanse();
    this.getRoot();
    this.getNna();
    this.getCollection();
  },
};
</script>

<style lang="scss">
.contentIncommingLine {
  .nna {
    .objectionsNNA {
      .objectionNNAbtn {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        padding-bottom: 30px;
      }
    }
    .opposition {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      padding-bottom: 20px;
      align-items: flex-start;
      .oppositionBtn {
        display: flex;
        white-space: nowrap;
        gap: 20px;
      }
    }
    .root {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      padding-top: 20px;
      .rootBtn {
        display: flex;
        gap: 20px;
      }
    }
  }
  .collection {
    .objectionsCollection {
      .objectionsCollectionBtn {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        padding-bottom: 30px;
      }
    }
    &-reserve {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    .opposition {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      align-items: flex-start;
      .oppositionBtn {
        display: flex;
        gap: 20px;
        white-space: nowrap;
      }
    }
    .root {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      padding-top: 20px;
      .rootBtn {
        display: flex;
        gap: 20px;
      }
    }
  }

  .medalsBtn {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-bottom: 30px;
  }
  .title {
    text-align: center;
    margin: 0;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .greetings {
    text-align: center;
    padding-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border: 1px solid black;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
  }

  thead {
    background-color: #f2f2f2;
  }
  .compliment {
    border: 1px solid black;
    border-top: none;
    p {
      padding: 20px;
    }
  }
  .edit {
    border: 1px solid black;
    border-top: none;
    p {
      padding: 20px;
    }
    margin-bottom: 50px;
  }
}
</style>
