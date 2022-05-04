<script setup lang="ts">
import { Job } from "~~/model";

interface JobComponentProps {
  job: Job;
}

defineProps<JobComponentProps>();
</script>

<template>
  <div class="card rounded bg-primary text-start my-5 p-3 p-sm-5">
    <div class="card-body">
      <div class="row">
        <div class="col-md-4 col-lg-3 d-flex align-items-start">
          <img
            class="img-fluid bg-white rounded rounded-3 p-4"
            :src="job.logo"
            :alt="job.company"
          />
        </div>
        <div class="col-md-8 col-lg-9">
          <h2 class="card-title">
            <div class="display-5">{{ job.company }}</div>
            <div class="display-6 text-accent mb-1">{{ job.position }}</div>
            <div class="h6">{{ job.dateHired }} - {{ job.dateResigned }}</div>
          </h2>
          <ul class="card-text">
            <li v-for="description in job.descriptions" :key="description">
              {{ description }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>