// stores/time.js
import { defineStore } from 'pinia';

export const useTimeStore = defineStore('time', {
  state: () => ({
    currentYear: '1368',
  }),
  actions: {
    setYear(year) {
      this.currentYear = year;
    },
  },
});