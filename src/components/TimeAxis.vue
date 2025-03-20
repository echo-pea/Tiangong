<template>
    <svg ref="svgRef"  class="time-axis">
    </svg>
</template>

<script setup>
import * as d3 from 'd3';
import { onMounted, ref } from 'vue';

const svgRef = ref(null);
const starPoints = [[100, 200], [150, 180], /* ...七星坐标 */];

onMounted(() => {
  const path = d3.line().curve(d3.curveCardinal)(starPoints);
  d3.select(svgRef.value)
    .append('path')
    .attr('d', path)
    .attr('class', 'star-trail');
});
</script>

<style>

</style>

