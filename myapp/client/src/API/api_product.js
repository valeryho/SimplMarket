class APIService {
    async getData(url) {
        const res = await fetch(url)
        return res.json()
    }
    async getProduct(url) {
        const res = await this.getData(url)
        return res
    }

}

export default APIService