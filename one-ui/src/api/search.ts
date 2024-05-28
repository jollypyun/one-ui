import { api } from "../../packages/util/axios"

const baseUrl = '/element'

export const getOneElement = async() => {
    const { data } = await api.get(`${baseUrl}/get`)

    return data
}