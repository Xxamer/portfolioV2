<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Orbitron&display=swap">
    <div class="cyberheader">
        <div  style="color:white" class="">
               <img class="profile-img glitch" src="https://avatars.githubusercontent.com/u/36738325?v=4" alt="">
            </div>
        <div class="container">
           
            <div class="glitch-mobile " data-text="CHRISTIAN GRANADO">CHRISTIAN GRANADO</div>
            <div class="glow">CHRISTIAN GRANADO</div>
            <p class="subtitle">CYBER DEVELOPER</p>
        </div>
        <div class="scanlines"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>