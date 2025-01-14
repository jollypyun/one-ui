'use client'

import { getOneElement } from "@/api/search"
import { initNeutron, initPhoton } from "../../constant/initData"
import { useState } from "react"

const ElementComponent = () => {
    const [photon, setPhoton] = useState(initPhoton)
    const [neutron, setNeutron] = useState(initNeutron)

    const handleElement = () => {
        const data = getOneElement(photon,neutron)
    }

    return (
        <>
            <div>
                <span className="text-violet-700 font-bold">Photon: </span>
                <button type="button" onClick={() => setPhoton(photon-1)}>
                    -
                </button>
                {photon}
                <button type="button" onClick={() => setPhoton(photon+1)}>
                    +
                </button>
            </div>
            <div>
                <span className="text-violet-700 font-bold">Neutron: </span>
                <button type="button" onClick={() => setNeutron(neutron-1)}>
                    -
                </button>
                {neutron}
                <button type="button" onClick={() => setNeutron(neutron+1)}>
                    +
                </button>
            </div>
            <div>
                <button type="button" onClick={() => handleElement()}>choose</button>
            </div>
        </>
    )    
}

export default ElementComponent