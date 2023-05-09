<template>
    <main>
        <div v-if="cyberpunked">
            <CyberpunkHeader title="Callate por favor me esta dando un pabajo" />
        </div>
        <div v-else>
            Modo synthwawe, aqui no hay nada
        </div>
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import cyberpunk from '@/interfaces/cyberpunk';
import CyberpunkHeader from "@/components/cyberpunk/CyberpunkHeader.vue";

const hasBeen:cyberpunk = { cyberpunked: ref(true) };
let { cyberpunked } = hasBeen; // ✅ name es reactivo

onMounted(() => {
    const probabilidadTrue = 0.01;
    const random = Math.random();
    hasBeen.cyberpunked.value = random <= probabilidadTrue ? true : false;
})
</script>