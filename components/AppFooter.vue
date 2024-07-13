<template>
  <!-- footer -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="footer__content">
            <a href="index.html" class="footer__logo">
              <img src="/img/logo.svg" alt="">
            </a>

            <span class="footer__copyright">© HOTFLIX, 2019—2024 <br> Create by <a href="https://themeforest.net/user/dmitryvolkov/portfolio" target="_blank">Dmitry Volkov</a></span>

            <nav class="footer__nav">
              <a href="about.html">Бидний тухай</a>
              <a href="about.html">Үйлчилгээний нөхцөл</a>
              <a href="privacy.html">Эрх сунгах</a>
              <a href="contacts.html">Холбоо барих</a>
            </nav>

            <button class="footer__back" type="button">
              <i class="ti ti-arrow-narrow-up"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- end footer -->
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AppHeader"
})
</script>