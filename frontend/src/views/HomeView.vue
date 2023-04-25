<template>
    <main class="home-view">
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
        <section class="bullet-points" id="bullets">
            <div class="headers">
                <h2 v-motion :initial="{ opacity: 0, y: 500 }" :visible="{ opacity: 1, y: 0 }">GROW YOUR</h2>
                <h2 v-motion :initial="{ opacity: 0, x: 500 }" :visible="{ opacity: 1, x: 0 }">BUSINESS</h2>
                <h2 v-motion :initial="{ opacity: 0, x: -500 }" :visible="{ opacity: 1, x: 0 }">ONLINE
                    <router-link class="action" to="/template">
                        Get started →
                    </router-link>
                </h2>
            </div>
            <div class="steps">
                <div class="demo">
                    <img src="../assets/img/bullets.gif" alt="">
                </div>
                <div class="cards">
                    <article v-for="(step, idx) in steps" :key="step.title">
                        <h3>{{ idx + 1 }}</h3>
                        <div>
                            <h2>{{ step.title }}</h2>
                            <h5>{{ step.desc }}</h5>
                        </div>
                    </article>
                </div>
            </div>
            <a href="#">
                <ScrollIndicator />
            </a>
        </section>
    </main>
</template>

<script setup lang="ts">
import ScrollIndicator from '../components/ScrollIndicator.vue'
const steps = [
    {
        title: 'Create a website',
        desc: 'Select from any of our industry-leading website templates, designer fonts, and color palettes that best fit your personal style and professional needs.'
    },
    {
        title: 'Ecommerce made easy',
        desc: 'Explore which tools you want to add—whether it’s setting up an online store, booking services, or adding your favorite third-party extensions.',
    },
    {
        title: 'Market your business',
        desc: 'Stand out in every inbox and social feed. On-brand email campaigns and social tools make it easy to retain customers and grow your audience.'
    }
]
</script>