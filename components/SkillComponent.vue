<script setup lang="ts">
interface SkillComponentProps {
  skill: string;
}

defineProps<SkillComponentProps>();
</script>

<template>
  <div class="px-3 py-2 rounded h5">
    {{ skill }}
  </div>
</template>