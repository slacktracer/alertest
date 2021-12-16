<script setup>
import { onMounted, ref } from "vue";

let data = ref(null);

onMounted(() => {
  // TODO
  // Move the file path to .env and use `new URL()` to find it?
  const audio = new Audio("../../public/telegraph.mp3");

  audio.play();

  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get("id");

  data.value = JSON.parse(localStorage.getItem(id));

  localStorage.removeItem(id);
});

const openOnDashboard = (event) => {
  if (window.api) {
    event.preventDefault();

    window.api.openOnDashboard({ caseID: 0 });
  }
};
</script>

<template>
  <div class="container mt-5">
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
