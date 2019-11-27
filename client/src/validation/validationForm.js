export const formState = {
    formValidate: {
        orderId: {
            text: '',
            error: ''
        },
        name: {
            text: '',
            error: ''
        },
        quantity: {
            text: '',
            error: ''
        },
        total: {
            text: '',
            error: ''
        },
        level: {
            text: '',
            error: ''
        },
    },
    submitError: '',
}

export const fieldValidation = (e, fieldRegex, fieldError) => {
    const fieldText = e.target.value;
    if (fieldText.match(fieldRegex)) {
        const newData = {
            text: fieldText,
            error: ''
        }
        return newData
    } else {
        if (fieldText.length === 0) {
            const newData = {
                text: '',
                error: ''
            }
            return newData
        }
        const newData = {
            text: fieldText,
            error: fieldError
        }
        return newData
    }
}