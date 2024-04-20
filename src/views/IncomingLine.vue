<template>
  <div class="contentIncommingLine">
    <h1 class="title">Установление контакта. Инфоповод.</h1>
    <p class="greetings">
      Здравствуйте, Императорский монетный двор, меня зовут {{ myName }}, как
      могу к Вам обращаться?
    </p>
    <div class="input-group mb-3">
      <input
        v-model="userName"
        type="text"
        class="form-control"
        placeholder="Имя пользователя"
        aria-label="Имя пользователя получателя"
        aria-describedby="button-addon2"
      />
      <button
        @click="clearInput"
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Кнопка
      </button>
    </div>
    <p>
      <b>{{ savedName || "ИО" }}</b
      >, спасибо за Ваш звонок. Какую медаль Вы хотели заказать?
    </p>
    <div class="medalsBtn">
      <button
        type="button"
        v-for="medal in medals"
        :key="medal.id"
        @click="selectedMedal = medal"
        class="btn btn-secondary"
      >
        {{ medal.name }}
      </button>
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
      <h2 class="title">2. /UPG 1699р. Презентация/</h2>
      <div class="presentationNna">
        <p>
          <b>{{ savedName || "ИО" }}</b
          >, пока данные загружаются, расскажу, что в рамках нашего разговора у
          Вас есть возможность заказать улучшенную версию медали с покрытием
          чистым золотом 999 пробы. Это не только красиво, также важно, что
          чистое золото не окисляется, а значит сохраняет свой благородный блеск
          на столетия! Стоимость Премиум-версии медали всего 1699 рублей. А так
          же, вместе с медалью, мы отправим Вам сертификат подлинности, который
          подтверждает качество и оригинальность медали. Но и это еще не все: с
          памятной медалью, Вы получаете эксклюзивный подарок – это…
          <span
            ><b>{{ selectedMedal.presents }}</b>
          </span>
        </p>
      </div>
      <div class="opposition">
        <h3 class="oppositionTitle">Отработка контактного сопротивления</h3>
        <div class="oppositionBtn">
          <button type="button" class="btn btn-danger">некогда</button>
          <button type="button" class="btn btn-danger">Не интересно</button>
          <button type="button" class="btn btn-danger">Не нужно</button>
          <button type="button" class="btn btn-danger">Нет денег</button>
        </div>
      </div>
      <div class="root">
        <h3 class="rootTitle">Выявление причин</h3>
        <div class="rootBtn">
          <button type="button" class="btn btn-info">Подумаю</button>
          <button type="button" class="btn btn-info">Дорого / нет денег</button>
          <button type="button" class="btn btn-info">
            Нужно посоветоваться
          </button>
          <button type="button" class="btn btn-info">
            Не нужно / не интересно
          </button>
        </div>
      </div>
      <div class="objectionsNNA">
        <h3 class="title">NNA Отработки возражений/ 2 попытки</h3>
        <div class="objectionNNAbtn">
          <button type="button" class="btn btn-primary">Дорого за 1699р</button>
          <button type="button" class="btn btn-primary">
            Предложение за 995р.
          </button>
          <button type="button" class="btn btn-primary">Дорого за 995р.</button>
          <button type="button" class="btn btn-primary">Нет денег NNA</button>
          <button type="button" class="btn btn-primary">
            Не нужно/ не интересно
          </button>
          <button type="button" class="btn btn-primary">
            Доставка дорогая
          </button>
          <button type="button" class="btn btn-primary">
            Сомнения в качестве
          </button>
          <button type="button" class="btn btn-primary">
            посылку подменят
          </button>
          <button type="button" class="btn btn-primary">находится в ДНР</button>
          <button type="button" class="btn btn-primary">
            На сайте посмотрю
          </button>
          <button type="button" class="btn btn-primary">Не люблю золото</button>
          <button type="button" class="btn btn-primary">
            Производство КНР
          </button>
          <button type="button" class="btn btn-primary">
            Не могу забрать посылку
          </button>
          <button type="button" class="btn btn-primary">
            Болен, не ходячий
          </button>
          <button type="button" class="btn btn-primary">
            Бесплатная и премиум
          </button>
          <button type="button" class="btn btn-primary">Две бесплатные</button>
          <button type="button" class="btn btn-primary">3 медали за 995</button>
          <button type="button" class="btn btn-primary">Должник NNA</button>
          <button type="button" class="btn btn-primary">Жалоба клиента</button>
        </div>
      </div>
    </div>
    <div class="collection">
      <h2 class="title">4. / Кросс-продажа. Презентация коллекции.</h2>
      <div class="collection-presentation">
        {{ savedName || "ИО" }}, пока формирую заказ, расскажу Вам, что для тех,
        кто заказывает эту медаль также действует спец.предложение на коллекцию
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
          <button type="button" class="btn btn-danger">некогда</button>
          <button type="button" class="btn btn-danger">Не интересно</button>
          <button type="button" class="btn btn-danger">Не нужно</button>
          <button type="button" class="btn btn-danger">Нет денег</button>
        </div>
      </div>
      <div class="root">
        <h3 class="rootTitle">Выявление причин</h3>
        <div class="rootBtn">
          <button type="button" class="btn btn-info">Подумаю</button>
          <button type="button" class="btn btn-info">Дорого / нет денег</button>
          <button type="button" class="btn btn-info">
            Нужно посоветоваться
          </button>
          <button type="button" class="btn btn-info">
            Не нужно / не интересно
          </button>
        </div>
      </div>
      <div class="objectionsCollection">
        <h3 class="title">/ Работа с возражениями х1 попытка кросс /</h3>
        <div class="objectionsCollectionBtn">
          <button type="button" class="btn btn-primary">Нет денег</button>
          <button type="button" class="btn btn-primary">Дорого</button>
          <button type="button" class="btn btn-primary">Не коллекционер</button>
          <button type="button" class="btn btn-primary">
            Уже собираю коллекцию
          </button>
          <button type="button" class="btn btn-primary">
            Не интересно/не нужно
          </button>
          <button type="button" class="btn btn-primary">
            Маленькая пенсия
          </button>
          <button type="button" class="btn btn-primary">
            Я старый человек
          </button>
          <button type="button" class="btn btn-primary">
            Не могу забрать посылку
          </button>
          <button type="button" class="btn btn-primary">
            Болен, не ходячий
          </button>
          <button type="button" class="btn btn-primary">
            Нужно посоветоваться
          </button>
          <button type="button" class="btn btn-primary">
            Направьте мне первой другую медаль
          </button>
          <button type="button" class="btn btn-primary">
            кросс коллекцию не хочу
          </button>
          <button type="button" class="btn btn-primary">
            Хочу ОДНУ медаль из коллекции
          </button>
          <button type="button" class="btn btn-primary">
            отправьте следующей петра1
          </button>
        </div>
      </div>
    </div>
    <div class="placingAnOrder">
      <h2 class="title">6. / Оформление заказа /</h2>
      <p>
        {{ savedName || "ИО" }}, обращаю ваше внимание , что в рамках акции
        премиум версия приобретается взамен стандартной (бесплатной). Поздравляю
        Вас с таким приобретением.
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
          {{ savedName || "ИО" }}, в качестве комплимента дарим бесплатную
          электронную книгу о нумизматике и коллекционировании. Скачать книгу вы
          сможете по ссылке, которую вам направим по смс. Вам нужно будет просто
          указать адрес электронной почты и наслаждаться чтением.
        </p>
      </div>
    </div>
    <div class="edingCall">
      <h2 class="title">7. / Завершение разговора NNA /</h2>
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
            <td v-html="`${this.savedName || 'ИО'}${offerEdit.freeEdit}`"></td>
            <td
              v-html="`${this.savedName || 'ИО'}${offerEdit.freeCrossEdit}`"
            ></td>
            <td
              v-html="`${this.savedName || 'ИО'}${offerEdit.premiumEdit}`"
            ></td>
            <td
              v-html="`${this.savedName || 'ИО'}${offerEdit.premiumCrossEdit}`"
            ></td>
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
export default {
  name: "IncomingLine",
  data() {
    return {
      myName: "Екатерина",
      userName: "",
      savedName: "",
      medals: [],
      selectedMedal: {},
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
    clearInput() {
      this.savedName = this.userName.trim() || "ИО";
      this.userName = "";
    },

    async getMedals() {
      const { data } = await this.$http.get(`/api/medals.json`);
      this.medals = data;
    },
    toggleCollection() {},
  },

  created() {
    this.getMedals();
  },
};
</script>

<style lang="scss" scoped>
.contentIncommingLine {
  .nna {
    .objectionsNNA {
      .objectionNNAbtn {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
      }
    }
    .opposition {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      padding-bottom: 20px;
      .oppositionBtn {
        display: flex;
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
      }
    }
    .opposition {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      .oppositionBtn {
        display: flex;
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

  .medalsBtn {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
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
