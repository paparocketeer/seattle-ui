<template>
  <button class="sui-button" :class="buttonStyle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed } from 'vue';
defineOptions({ name: 'sui-button' });
type ButtonProps = {
  type?: string;
  size?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`sui-button--${buttonProps.type}`]: buttonProps.type };
});
</script>