<script setup>
import { onMounted, ref } from "vue";

const urlParams = new URLSearchParams(window.location.search);

const caseID = urlParams.get("caseID");

let data = ref(null);

onMounted(() => {
  // TODO
  // Move the file path to .env and use `new URL()` to find it?
  const audio = new Audio("../../public/telegraph.mp3");

  audio.play();

  data.value = JSON.parse(localStorage.getItem(caseID));

  window.focus();

  if (window.api) {
    window.api.focusMe();
  }
});

const openOnDashboard = (event) => {
  if (window.api) {
    event.preventDefault();

    window.api.openOnDashboard({ caseID });
  }
};
</script>

<template>
  <div class="container mb-5 mt-5">
    <div class="row">
      <div class="col-sm">
        <p>This is an alert.</p>
        <div class="alert alert-dark" role="alert">
          {{ data }}
        </div>
        <a
          class="btn btn-outline-primary"
          @click="openOnDashboard"
          href="https://ondeck.twiagemed.net"
          target="dashboard"
        >
          Open on Dashboard
        </a>
      </div>
    </div>
  </div>
</template>
