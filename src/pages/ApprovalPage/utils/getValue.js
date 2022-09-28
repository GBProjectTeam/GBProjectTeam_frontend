export const getValue = (value, agreedTitle, notAgreedTitle) => {
    if (typeof value !== 'string') {
        return !value ? notAgreedTitle : agreedTitle
    }

    return value
}
