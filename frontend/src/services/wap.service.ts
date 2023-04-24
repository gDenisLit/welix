import { utilService } from './util.service'
import { httpService } from './http.service'
import type { Wap } from '@/models/Wap.model'
import type { Cmp } from '@/models/Cmp.model'
import type { User } from '@/models/User.model'

export const wapService = {
    query,
    getById,
    remove,
    save,
    getEmptyWap,
    saveToSession,
    getFromSession,
    getCurrState,
    updateCmp,
    removeCmp,
    applyDrag,
}

async function query(filterBy: Object) {
    return await httpService.get('wap', filterBy)
}

async function getById(wapId: string | string[]): Promise<Wap> {
    return httpService.get(`wap/${wapId}`)
}

async function remove(wapId: string) {
    httpService.delete(`wap/${wapId}`)
}

async function save(wap: Wap) {
    if (wap._id) {
        return httpService.put(`wap/${wap._id}`, wap)
    }
    return httpService.post('wap', wap)
}

async function updateCmp(wapId: string, cmp: Cmp) {
    const body = { wapId, cmp }
    return httpService.put('wap/cmp', body)
}

async function removeCmp(wapId: string, cmpId: string) {
    return httpService.delete(`wap/cmp/${wapId}`, { cmpId })
}

function saveToSession(wap: Wap) {
    sessionStorage.setItem('currWap', JSON.stringify(wap))
}

function getFromSession() {
    const json = sessionStorage.getItem('currWap') || ''
    return JSON.parse(json)
}

function getCurrState(cmpToSave: Cmp, wap: Wap, action: string) {
    let idx = wap.cmps.findIndex((cmp: any) => cmp.id === cmpToSave.id)

    if (idx === -1) {
        // wap-nav is inside header if not stand alone
        if (cmpToSave.type === 'wap-nav') {
            idx = wap.cmps.findIndex(cmp => cmp.type === 'wap-header')

            return { idx, cmp: wap.cmps[idx], action }
        } else {
            // find the the container
            const wapContainer: any = wap.cmps
                .filter(cmp => cmp.type === 'wap-container')
                .find(cmp => cmp.info.cmps.some((cmp: Cmp) => cmp.id === cmpToSave.id))

            idx = wap.cmps.findIndex(cmp => cmp.id === wapContainer.id)

            return { idx, cmp: wapContainer, action }
        }
    }

    return { idx, cmp: wap.cmps[idx], action }
}

function getEmptyWap(createdBy: User = {}, name: string = ''): Wap {
    return {
        name,
        imgUrl: '',
        type: '',
        createdBy,
        usersData: {
            contacts: [
                { email: 'user@user.com', msg: 'Please send me stuff', at: 123 },
            ],
            signups: [],
        },
        theme: '',
        cmps: [],
        isPublic: false,
        style: '',
        class: ''
    }
}

function applyDrag(arr: any[], dragResult: any) {
    let { removedIndex, addedIndex, payload } = dragResult

    payload = JSON.parse(JSON.stringify(payload))
    delete payload._id
    delete payload.id

    payload.id = utilService.makeId()

    if (removedIndex === null && addedIndex === null) return arr
    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
    }
    if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
    }
    return result
}