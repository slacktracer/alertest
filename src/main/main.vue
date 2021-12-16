<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const incrementNumber = () => store.commit("main/incrementNumber");

const number = computed(() => store.state.main.number);

store.dispatch("main/connectToPubNub");
</script>

<template>
  <div class="container mb-5 mt-5">
    <div class="row">
      <div class="col-sm">
        <h1>
          Twiage Alerter
          <span @click="incrementNumber" title="Click to upgrade">
            {{ number }}
          </span>
        </h1>
        <p class="text-muted">Be Alerter!</p>
      </div>
    </div>
  </div>
</template>
