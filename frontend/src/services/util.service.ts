export const utilService = {
    saveToStorage,
    loadFromStorage,
    getRandomIntInc,
    getRandomColor,
    makeId,
    delay,
    getHeaderLinks,
    getIcon
}


function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function saveToStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key: string) {
    let data = localStorage.getItem(key)
    return data ? JSON.parse(data) : undefined
}
function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function makeId(length = 5) {
    var txt = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getRandomIntInc(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getHeaderLinks() {
    return [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/items',
            name: 'Items'
        },
        {
            path: '/about',
            name: 'About'
        },
    ]
}

function getIcon(iconName: string) {
    interface IconsMap {
        [key: string]: string
    }
    const iconMap: IconsMap = {
        logo: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679493265/useful-items_bawwnb.png',
        hamburger: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679760122/hamburger-menu_vxqw9d.ico',
        delete: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679760132/delete_aixeha.ico',
        edit: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679760130/edit_du3e36.ico',
        info: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679760107/info_ii1yd6.ico',
        addImg: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679503713/add-image_i58iy2.png',
        Hammer: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679493254/Hammer_ck25gz.png',
        Saw: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679493261/Saw_vpnv9i.png',
        Wrench: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679493275/Wrench_qp5fdp.png',
        success: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679760119/success_sdvaid.ico',
        error: 'https://res.cloudinary.com/dokgseqgj/image/upload/v1679760126/error_hfyagg.ico'
    }
    return iconMap[iconName]
}