<template>
    <section class="template-gallery main-layout full">
        <section class="template-gallery__inner" id="gallery">
            <div class="sticky-action" v-motion :initial="{ opacity: 0, y: 500 }" :visible="{ opacity: 1, y: 0 }">
                <h2>Create your website</h2>
                <h5>Easy-to-edit website templates, no coding needed</h5>
                <h5>Full commerce and marketing features to run your business online</h5>
                <h5>Free trial, no credit card required</h5>
                <router-link class="header-link action animate-heart-beat" to="/explore">see templates</router-link>
            </div>
            <ul class="img-container clean-list" v-autoscroll>
                <li v-for="img in imgs" :key="img">
                    <img :src="img" alt="">
                </li>
            </ul>
        </section>
    </section>
</template>

<script setup lang="ts">
const imgs = [
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/27eab9177a1dd1b607f856431da80e98c71e93daba2cbd6b34e27b3cc1a8c7721628682339726_kmvsoz.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/7bc5b4dedc2e3b54249e31ce2ad6c0fb4fff80ecee9380a95e9185f63b3c14381656334241337_v1kgat.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/383f98fdc87ad4edf94796aa248d7307d2c4444ac0c170ee75daa5119179c6d51626874518992_h6fch4.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/3b2a97a89809eaf8ef1d0260365ec60296730f21c3f65e0026b4e884a0c1c7701622022079679_gbxvla.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/81dc97bb294e1ed9747c4dadb25b20baf1932dbfbfa0001e5f66d3d5bc8f394f_mzzeec.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/Screenshot-2022-07-30-222654_dryyuc.png",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/13f21ea05400c07bd08a22cd3c94d26df8b3d1e05cac1f33e471e4045ee8c6e41663223284583_h82o1w.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/nee_bf7sjy.png",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445341/v4951_sntmg9.png",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445340/c0f8d02b7a861afb0d4d6908c2a6dabafd4308782ace212bb8003d53d182bd751629730113434_zxkpir.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445340/b347026042f10c7afa6dc252674e899654a8711ae642a7845a097f03cfd178b81670317628247_jbs8cl.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445340/c39f214e8abb06fd791b06abac276f704a9492b63cc6e36a6e9255971b7120771675608000069_qvvfqb.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445342/Screenshot_2022-08-01_180943_n4p7xi.png",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445340/ee9b738c7322ce8d19989fc0ba7cf60bdf811ca300808b3589a5fded705403e51615215793946_kxxhfc.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445340/719ae50b59c255985766f97b186a5945ac8969f0b77c7dc43f1c676b1d3f60891628692326613_yhmsj9.webp",
    "https://res.cloudinary.com/dokgseqgj/image/upload/v1682445340/f71beb17340b4a297159857afe11cd85aee9b1da25f02f8c391a9ab37eccab931658219672236_zylluu.webp",

]
</script>