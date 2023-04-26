<template>
    <section class="main-layout full">
        <section class="app-hero" id="hero">
            <div class="overlay animate-fade-in"></div>
            <img src="../assets/img/hero3.jpg" alt="" class="app-hero__background">

            <div class="text-container animate-fade-in">
                <h1 class="hero-header">
                    Create a website without limits
                </h1>

                <h2 class="hero-subheader">
                    Build and scale with confidence. From a powerful website builder to advanced business solutions—we’ve
                    got you covered.
                </h2>
                <router-link class="hero-btn" to="/template">
                    Get started
                </router-link>
                <a href="#bullets" class="learn-more">
                    <ScrollIndicator />
                </a>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import ScrollIndicator from '../components/ScrollIndicator.vue'
</script>