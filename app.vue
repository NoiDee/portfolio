<script setup lang="ts">
import { Resume } from '~~/model';
import { resumeData } from '~~/data';

const resume = reactive<Resume>(resumeData);

useHead({
  title: resume.name.getFullPartialMiddle(),
  meta: [{ name: 'description', content: resume.intro }],
});
</script>

<template>
  <main class="lh-lg bg-dark">
    <SectionComponent class="text-center">
      <h1 class="display-1 my-5 text-white">
        {{ resume.name.getFirstAndLast() }}
      </h1>
      <p class="display-6 my-5 text-justify">{{ resume.intro }}</p>
    </SectionComponent>

    <SectionComponent class="text-center bg-primary">
      <h1 class="display-1 my-5 text-white">Knowledge &amp; Skills</h1>
      <div
        class="d-flex justify-content-center flex-wrap gap-3 mx-auto"
        style="max-width: 660px"
      >
        <SkillComponent
          v-for="skill in resume.skills"
          :key="skill"
          :skill="skill"
          class="bg-accent"
        >
        </SkillComponent>
      </div>
    </SectionComponent>

    <SectionComponent class="text-center">
      <h1 class="display-1 my-5 text-white">Employment History</h1>
      <job-component
        v-for="job in resume.jobs"
        :key="job.dateHired"
        :job="job"
      />
    </SectionComponent>

    <SectionComponent class="mb-0 bg-primary text-center">
      <h1 class="display-4 text-white">Contact Me</h1>
      <div class="fw-light fs-4">
        <div>
          <font-awesome-icon icon="fa-solid envelope" class="text-accent" />
          <span class="ms-2">{{ resume.email }}</span>
        </div>
      </div>
    </SectionComponent>
  </main>
</template>

<style lang="scss">
section {
  min-height: 100vh;
  padding-top: 20vh;
  padding-bottom: 20vh;

  &:last-child {
    padding-bottom: 5vh;
    padding-top: 5vh;
    min-height: auto;
  }
}
</style>
