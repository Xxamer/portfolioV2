<template>
    <main>
        <div v-if="cyberpunked">
            <CyberpunkHeader title="Testeo" />
            <div class="cyberbody">
                <CyberSections />
            </div>
        </div>
        <div v-else>
            Modo synthwawe, aqui no hay nada AÚN
        </div>
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import cyberpunk from '../interfaces/cyberpunk';
import CyberpunkHeader from '../components/cyberpunk/CyberpunkHeader.vue'
import CyberSections from "../components/cyberpunk/CyberSections.vue";

const hasBeen: cyberpunk = { cyberpunked: ref(true) };

let { cyberpunked } = hasBeen;

onMounted(() => {
    const probabilidadTrue = 1;
    const random = Math.random();
    hasBeen.cyberpunked.value = random <= probabilidadTrue ? true : false;
})
</script>