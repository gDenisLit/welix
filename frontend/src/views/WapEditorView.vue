<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import wapEditorLayout from '@/layouts/wap-editor/wap-editor.layout.vue'
import editorHeader from '@/components/editor/editor-header/editor-header.vue'
import editorNav from '@/components/editor/editor-nav/editor-nav.vue'
import editorToolBar from '@/components/editor/editor-tool-bar/editor-tool-bar.vue'

const store = useStore()
const route = useRoute()

const { id } = route.params
store.dispatch({ type: 'loadWap', id })
store.dispatch({ type: 'loadCmps' })
</script>

<template>
    <wap-editor-layout>
        <template #header>
            <editor-header />
        </template>
        <template #nav>
            <editor-nav />
        </template>
        <template #tool-bar>
            <editor-tool-bar />
        </template>
        <template #preview>

        </template>
    </wap-editor-layout>
</template>