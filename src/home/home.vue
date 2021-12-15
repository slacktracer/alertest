<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const alert = () => {
  const title = "New Alert of Type X (or something)"
  const url = "http://localhost:3000"

  window.api ? window.api.openAlertWindow({ title, url }) : window.open(url, "alertWindow", "height=600,width=800")
};

const incrementNumber = () => store.commit("home/incrementNumber");

const number = computed(() => store.state.home.number);
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm">
        <h1>
          Twiage Alert System
          <button
            class="btn btn-link incrementNumber"
            @click="incrementNumber"
            title="Click to upgrade"
          >
            {{ number }}
          </button>
        </h1>
        <p class="text-muted">
          This is all just placeholder flavour text. I dislike the word
          <i>alerter</i>. 🤢
        </p>
        <button class="btn btn-danger" @click="alert">Alert!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.incrementNumber {
  font-size: 3rem;
}
</style>
