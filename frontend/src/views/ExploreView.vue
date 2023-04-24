<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Wap } from '@/models/Wap.model'
import ExploreList from '@/components/ExploreList.vue'

const router = useRouter()
const store = useStore()

const waps = computed(() => {
    return store.getters.getWaps
})

const editWap = (wapId: Wap) => {
    router.push(`/editor/${wapId}`)
}

const previewWap = (wapId: string) => {
    let routeData = router.resolve({
        name: 'details',
        params: { id: wapId },
    })
    window.open(routeData.href, '_blank')
}
</script>

<template>
    <main class="explore-view">
        <section class="explore-view__wrapper main-layout">
            <div class="explore-view__inner">
                <div class="headings">
                    <h2>
                        Pick one of our professionally designed website templates
                    </h2>
                    <h3>
                        Or express your inner creativity and start from blank
                    </h3>
                </div>
                <ExploreList :waps="waps" @editWap="editWap" @previewWap="previewWap" />
            </div>
        </section>
    </main>
</template>