<template>
  <div>
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
    <MedalSelector :medals="medals" @selectMedals="$emit('selectMedals', $event)" />
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
  </div>
</template>

<script>
import MyInput from "@/UI/MyInput.vue";
import MedalSelector from "@/components/MedalSelector.vue";

export default {
  name: "ContactIntroduction",
  components: {
    MyInput,
    MedalSelector,
  },
  props: {
    myName: String,
    userName: String,
    savedName: String,
    medals: Array,
    selectMedals: Function,
  },

  methods: {
    handleUserNameUpdate(newUserName) {
      this.$emit("update:userName", newUserName);
    },
    test() {
        console.log('click');
    }
  },
};
</script>

<style lang="scss" scoped></style>
