<template>
  <header class="header">
    <div class="logo">
      <img class="logoImg" src="./../../assets/images/logo2.png" alt="" />
    </div>
    <nav class="navigation">
      <ul class="navlink">
        <li><router-link to="/">Входящая линия</router-link></li>
        <li><router-link to="/outgoingDrtv">Исходящая ДРТВ</router-link></li>
        <li><router-link to="/outgoing">Исходящая</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding-right: 20px;
  padding-left: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  .navigation {
    .navlink {
      display: flex;
      justify-content: space-between;
      gap: 50px;
      list-style: none;
      li {
        a {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: #333;
          font-weight: bold;
          transition: color 0.3s ease;

          &::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 1px;
            background-color: #777676;
            transform: scaleX(0);
            transition: transform 0.5s ease;
            transform-origin: right;
          }

          &:hover {
            color: #555;

            &::after {
              transform: scaleX(1);
            }
          }
        }
      }
    }
  }
  .logoImg {
    width: 200px;
    height: 60px;
  }
}
</style>
