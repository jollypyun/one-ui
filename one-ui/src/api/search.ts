import api from "../../packages/util/axios"

const baseUrl = '/element'

export const getOneElement = async (photon: number, neutron: number) => {
    let param = {
        photon: photon,
        neutron: neutron
    }
    
    
    const { data } = await api.get(`${baseUrl}/choose`, {
        params: param
    })

    console.log(data)

    return data
}