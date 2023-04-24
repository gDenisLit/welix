export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany,
}

type Entity = any

function query(entityType: string) {
    const data = localStorage.getItem(entityType)
    const entities = data ? JSON.parse(data) : []
    return Promise.resolve(entities)
}

function get(entityType: string, entityId: string) {
    return query(entityType).then(entities =>
        entities.find((entity: Entity) => entity._id === entityId)
    )
}

function post(entityType: string, newEntity: Entity) {
    newEntity._id = _makeId()
    return query(entityType).then(entities => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function postMany(entityType: string, newEntities: Entity[]) {
    return query(entityType).then(entities => {
        entities.push(...newEntities)
        _save(entityType, entities)
        return entities
    })
}

function put(entityType: string, updatedEntity: Entity) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex((entity: Entity) => entity._id === updatedEntity._id)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType: string, entityId: string) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex((entity: Entity) => entity._id === entityId)
        if (idx < 0) throw new Error('Not matched id')
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

function _save(entityType: string, entities: Entity[]) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}