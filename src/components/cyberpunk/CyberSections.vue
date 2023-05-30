<template>
    <div>
        <div class=" btn-holder cybercontainer">
            <button @click="setMode('about')" class="cybr-btn">
                About<span aria-hidden>_</span>
                <span class="cybr-btn__glitch">About_</span>
                <span class="cybr-btn__tag">R69</span>
            </button>
            <button @click="setMode('timeline')" class="cybr-btn">
                Timeline<span aria-hidden>_</span>
                <span class="cybr-btn__glitch">Timeline_</span>
                <span class="cybr-btn__tag">R420</span>
            </button>

            <button @click="setMode('projects')" class="cybr-btn">
                Projects<span aria-hidden>_</span>
                <span class="cybr-btn__glitch">Projects</span>
                <span class="cybr-btn__tag">R420</span>
            </button>
        </div>
        <div v-if="mode === 'about'">
            Esto es el about
        </div>
        <div v-if="mode === 'timeline'">
            <CyberTimeline />
        </div>
        <div v-if="mode === 'projects'">
            Esto es el project
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CyberTimeline from './CyberTimeline.vue'
const mode = ref('timeline');
const setMode = (value: string) => {
    mode.value = value
}
</script>

<style></style>
