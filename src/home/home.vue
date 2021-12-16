<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const alert = () => {
  const alertID = String(Math.random() * 10_000_000_000_000_000);

  const data = { createdAt: new Date(), data: "Whoa." };

  const url = `http://localhost:3000/alert?id=${alertID}`;

  window.open(url, `alertWindow${Date.now()}`, "height=500,width=800");

  localStorage.setItem(alertID, JSON.stringify(data));
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
          <span @click="incrementNumber" title="Click to upgrade">
            {{ number }}
          </span>
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
