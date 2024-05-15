<template>
  <div class="presentationNna" v-if="selectedMedal && selectedMedal.prices">
    <h2 class="title">Презентация NNA</h2>
    <p>
      <b>{{ savedName || "ИО" }}</b
      >, пока данные загружаются, расскажу, что в рамках нашего разговора у Вас
      есть возможность заказать улучшенную версию
      {{ isMedal ? `медали` : `банкноты` }} с покрытием чистым золотом 999
      пробы. Это не только красиво, также важно, что чистое золото не
      окисляется, а значит сохраняет свой благородный блеск на столетия!
      Стоимость Премиум-версии {{ isMedal ? `медали` : `банкноты` }} всего
      {{ selectedMedal.prices.upgrade }} рублей. А так же, вместе с
      {{ isMedal ? `медалью` : `банкнотой` }}, мы отправим Вам сертификат
      подлинности, который подтверждает качество и оригинальность
      {{ isMedal ? `медали` : `банкноты` }}.
      <span
        ><b>{{ selectedMedal.presents }}</b></span
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "PresentationNNA",
  props: {
    selectedMedal: Object,
    isMedal: Boolean,
    savedName: String,
  },
};
</script>

<style lang="scss" scoped></style>
