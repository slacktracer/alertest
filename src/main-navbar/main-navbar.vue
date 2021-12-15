<template>
  <nav class="bg-dark navbar navbar-dark">
    <div class="container-fluid">
      <span class="h1 mb-0 navbar-brand">
        Alertest {{ version }}
      </span>
    </div>
  </nav>
</template>

<script setup>
import { version } from "../../package.json";
</script>
