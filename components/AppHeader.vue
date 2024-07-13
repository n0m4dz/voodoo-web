<template>
  <!-- header -->
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <!-- header logo -->
            <a href="index.html" class="header__logo">
              <img src="/img/logo.svg" alt="">
            </a>
            <!-- end header logo -->

            <!-- header nav -->
            <ul class="header__nav">
              <li class="header__nav-item">
                <a class="header__nav-link" href="#" role="button">Нүүр</a>
              </li>

              <li class="header__nav-item">
                <a class="header__nav-link" href="#" role="button">Кино тайлбар</a>
              </li>

              <li class="header__nav-item">
                <a class="header__nav-link" href="#" role="button">Кино</a>
              </li>

              <li class="header__nav-item">
                <a href="pricing.html" class="header__nav-link">Эрх сунгах</a>
              </li>
            </ul>
            <!-- end header nav -->

            <!-- header auth -->
            <div class="header__auth">
              <form action="#" class="header__search">
                <input class="header__search-input" type="text" placeholder="Хайх...">
                <button class="header__search-button" type="button">
                  <i class="ti ti-search"></i>
                </button>
                <button class="header__search-close" type="button">
                  <i class="ti ti-x"></i>
                </button>
              </form>

              <button class="header__search-btn" type="button">
                <i class="ti ti-search"></i>
              </button>

              <!-- dropdown -->
              <div class="header__profile">
                <a class="header__sign-in header__sign-in--user" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="ti ti-user"></i>
                  <span>Tseegii Tselmeg</span>
                </a>

                <ul class="dropdown-menu dropdown-menu-end header__dropdown-menu header__dropdown-menu--user">
                  <li><a href="profile.html"><i class="ti ti-ghost"></i>Profile</a></li>
                  <li><a href="profile.html"><i class="ti ti-stereo-glasses"></i>Subscription</a></li>
                  <li><a href="profile.html"><i class="ti ti-bookmark"></i>Favorites</a></li>
                  <li><a href="profile.html"><i class="ti ti-settings"></i>Settings</a></li>
                  <li><a href="#"><i class="ti ti-logout"></i>Logout</a></li>
                </ul>
              </div>
              <!-- end dropdown -->
            </div>
            <!-- end header auth -->

            <!-- header menu btn -->
            <button class="header__btn" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <!-- end header menu btn -->
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AppHeader"
})
</script>