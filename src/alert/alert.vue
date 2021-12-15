<script setup>
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
