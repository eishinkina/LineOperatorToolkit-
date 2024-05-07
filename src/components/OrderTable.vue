<template>
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
          <td>{{ freeOrder }}</td>
          <td>{{ freeCrossOrder }}</td>
          <td>{{ premiumOrder }}</td>
          <td>{{ premiumCrossOrder }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "OrderTable",
  props: {
    selectedMedal: {},
    isMedal: Boolean,
    savedName: String,
  },
  computed: {
    freeOrder() {
      return `${this.savedName || "ИО"}, вы заказали бесплатную ${
        this.isMedal ? "медаль" : "банкноту"
      } ${
        this.selectedMedal.name
      }. В сумму вашего заказа входит 349 руб. за доставку.`;
    },
    freeCrossOrder() {
      return `${
        this.savedName || "ИО"
      }, в сумму Вашего заказа входит: бесплатная ${
        this.isMedal ? "медаль" : "банкнота"
      } плюс 349р. за доставку. - стоимость первой медали коллекции со скидкой ${
        this.selectedMedal.collections.discountPrice
      } р. и сбор почты.- а следующие по ${
        this.selectedMedal.collections.price
      } р. и плюс 349 р. за доставку. Оплачиваете наложенным платежом, который составляет примерно 2,8%`;
    },
    premiumOrder() {
      return `${
        this.savedName || "ИО"
      }, в сумму Вашего заказа входит:- стоимость ${
        this.isMedal ? "медали" : "банкноты"
      } со скидкой ${this.selectedMedal.prices.upgradeDiscount}/ ${
        this.selectedMedal.prices.upgrade
      }. и плюс 349 р за доставку. Оплачиваете наложенным платежом, который составляет примерно 2,8%,`;
    },
    premiumCrossOrder() {
      return `${
        this.savedName || "ИО"
      }, в сумму Вашего заказа входит:- стоимость ${
        this.isMedal ? "медали" : "банкноты"
      } со скидкой ${this.selectedMedal.prices.upgradeDiscount}/ ${
        this.selectedMedal.prices.upgrade
      } и плюс 349 р за доставку и сбор почты. - стоимость первой медали коллекции со скидкой${
        this.selectedMedal.collections.discountPrice
      }р. и сбор почты.- а следующие по ${
        this.selectedMedal.collections.price
      } р. и плюс …р. Оплачиваете наложенным платежом, который составляет примерно 2,8%а доставку. Итого - …р.`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
