<template>
    <VueDatePicker v-model="date" :enable-time-picker="false" />


 
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useDate } from 'vuetify';

const date = useDate()
const dateTook = ref(null)
const dateTookFormatted = ref(null)
watch(dateTook, (val) => {
    dateTookFormatted.value = date.format(val, 'keyboardDate')
})
</script>