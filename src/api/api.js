export const getProfile = async () => {
    try {
        const getData = await fetch('https://randomuser.me/api')
        const data = await getData.json()
        return data
    } catch (e) {
        console.log(`Something gone wrong`, e)
    }
}
