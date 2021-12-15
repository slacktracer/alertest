<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const number = computed(() => store.state.home.number);

const incrementNumber = () => store.commit("home/incrementNumber");
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm">
        <h1>
          Welcome to Twiage Alert System
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.incrementNumber {
  font-size: 3rem;
}
</style>
