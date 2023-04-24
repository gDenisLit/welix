import WapHeader from '@/components/wap/WapHeader.vue'
import WapNav from '@/components/wap/WapHeader.vue'
import WapHero from '@/components/wap/WapHero.vue'
import WapGallery from '@/components/wap/WapGallery.vue'
import WapList from '@/components/wap/WapList.vue'
import WapCard from '@/components/wap/WapCard.vue'
import WapContainer from '@/components/wap/WapContainer.vue'
import WapReview from '@/components/wap/WapReview.vue'
// import WapText from '@/components/wap/WapText.vue'
import WapFooter from '@/components/wap/WapFooter.vue'
import WapContact from '@/components/wap/WapContact.vue'
import WapMap from '@/components/wap/WapMap.vue'

interface WapCmps {
    [key: string]: object
}

export const cmps: WapCmps = {
    'wap-header': WapHeader,
    'wap-nav': WapNav,
    'wap-hero': WapHero,
    'wap-gallery': WapGallery,
    'wap-list': WapList,
    'wap-card': WapCard,
    'wap-container': WapContainer,
    'wap-review': WapReview,
    // 'wap-text': WapText,
    'wap-footer': WapFooter,
    'wap-contact': WapContact,
    'wap-map': WapMap
}