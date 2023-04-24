<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { Cmp } from '@/models/Cmp.model'
import type { PropType } from 'vue'
import type { Wap } from '@/models/Wap.model'

const store = useStore()
const props = defineProps({
    cmp: Object as PropType<Cmp>,
    wap: Object as PropType<Wap>
})
const info = computed(() => props.cmp?.info)
const form = computed(() => props.cmp?.info.form)
const isModalOpen = ref(false)

let contact = reactive({
    inputs: [
        { type: 'name', txt: '' },
        { type: 'email', txt: '' },
    ],
    text: '',
})

const closeModal = () => {
    isModalOpen.value = false
}

const addContact = async () => {
    try {
        const wap = JSON.parse(JSON.stringify(props.wap))
        const newContact = {
            key: contact.inputs[0].txt,
            name: contact.inputs[0].txt,
            email: contact.inputs[1].txt,
            msg: contact.text,
            at: Date.now(),
        }

        wap.usersData.contacts.push(newContact)
        await store.dispatch({ type: 'saveWap', wap })
        isModalOpen.value = true

        contact = {
            inputs: [
                { type: 'name', txt: '' },
                { type: 'email', txt: '' },
            ],
            text: '',
        }
    } catch (err) {
        console.log(err)
    }
}
</script>

<template>
    <section :class="cmp?.classes" :style="cmp?.style">
        <div class="screen" v-if="isModalOpen" @click="closeModal"></div>
        <h2 class="heading">{{ info.heading.txt }}</h2>
        <h3 v-if="info.subHeading" class="sub-heading">
            {{ info.subHeading.txt }}
        </h3>
        <section class="form-container">
            <form @submit.prevent="addContact" class="contact-form">
                <input class="contact-input" v-for="(input, idx) in form.inputs" :type="input.type"
                    :placeholder="input.placeholder" v-model="contact.inputs[idx].txt" />
                <textarea class="contact-textarea" :placeholder="form.textarea.placeholder" v-model="contact.text" />
                <div class="btn-container">
                    <button class="contact-submit" type="submit">
                        {{ form.btn.txt }}
                    </button>
                </div>
            </form>
        </section>
        <div class="modal-thank-you" v-if="isModalOpen">
            <ThankYou />
        </div>
    </section>
</template>