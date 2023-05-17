export function formatDate(date) {
    const _date = new Date(date);

    return `${_date.getUTCFullYear()}/${_date.getUTCMonth()}/${_date.getUTCDate()}`;
}