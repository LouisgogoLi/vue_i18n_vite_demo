<template>
  <el-config-provider :locale="localeElement">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/svg/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <div>
          <select v-model="replyLanguage">
            <option value="zh_tw">中文</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
        <HelloWorld :msg="msg" />

        <nav>
          <RouterLink to="/">{{ $t("Home") }}</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </el-config-provider>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import zhTwElement from "element-plus/lib/locale/lang/zh-tw";
import enElement from "element-plus/lib/locale/lang/en";

import { useI18n } from "vue-i18n";
import { ref, computed, watch, onMounted } from "vue";
import { useCommonStore } from "./stores/common";
const common = useCommonStore();

const localeElement = ref(enElement);

const replyLanguage = computed({
  get: () => common.language,
  set: (val) => handleChangeLanguage(val),
});

const { locale, t } = useI18n();
locale.value = replyLanguage.value;

const handleChangeLanguage = (val) => {
  common.language = val;
  locale.value = val;
};

const msg = computed(() => t("message"));

const fnChangeLanguage = () => {
  console.log(common.language);
  if (common.language === "en") {
    localeElement.value = enElement;
  } else if (common.language === "zh_tw") {
    localeElement.value = zhTwElement;
  }
};

watch(
  () => common.language,
  () => {
    fnChangeLanguage();
  }
);

onMounted(() => {
  fnChangeLanguage();
});
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
