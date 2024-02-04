import fetch from "isomorphic-fetch";

const host = "http://localhost:8000"

export const contact = async (user) => {

    try {

        const response = await fetch(`${host}/form/contact`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const res = await response.json()

        return res
    } catch (err) {
        console.log(err)
    }

}