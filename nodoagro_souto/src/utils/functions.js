export const formatDate = (time) => {
    let date = new Date(time)
    return date.toLocaleDateString()
}