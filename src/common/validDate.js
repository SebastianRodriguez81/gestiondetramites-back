function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false; // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if (!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0, 10) === dateString;
}

function getValidDate() {
    const date = new Date()
    return date.toISOString().split('T')[0]
}

function getValidDateTime(time) {
    let date = new Date()
    const splitDate = date.toISOString().split('T')
    let stringDate = splitDate[0]+' '+splitDate[1]
    return stringDate
}

export { isValidDate, getValidDate, getValidDateTime}