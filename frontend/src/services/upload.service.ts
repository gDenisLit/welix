const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

export async function uploadImg(file: File) {

    const FORM_DATA = new FormData()

    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)

    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: FORM_DATA,
        })
        return res.json()
    }
    catch (err) {
        console.dir(err)
    }
}
