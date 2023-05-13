<template>
    <main>
        <div v-if="cyberpunked">
            <CyberpunkHeader title="Callate por favor me esta dando un pabajo" />
            <button class="cybr-btn">
                Cyber<span aria-hidden>_</span>
                <span class="cybr-btn__glitch">Cyber_</span>
                <span class="cybr-btn__tag">R25</span>
            </button>
            <button class="cybr-btn">
                Buttons<span aria-hidden>_</span>
                <span class="cybr-btn__glitch">Buttons_</span>
                <span class="cybr-btn__tag">R25</span>
            </button>
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

const hasBeen: cyberpunk = { cyberpunked: ref(true) };

let { cyberpunked } = hasBeen;
const keySequence: any = [];

onMounted(() => {

    const probabilidadTrue = 1;
    const random = Math.random();
    hasBeen.cyberpunked.value = random <= probabilidadTrue ? true : false;
})
</script>