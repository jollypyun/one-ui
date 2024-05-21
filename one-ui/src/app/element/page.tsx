import { initNeutron, initPhoton } from "@/constant/initData"
import { useState } from "react"

const ElementComponent = () => {
    const [photon, setPhoton] = useState(initPhoton)
    const [neutron, setNeutron] = useState(initNeutron)

    return (
        <>
            <div>
            <button type="button">
                    -
                </button>
                {photon}
                <button type="button">
                    +
                </button>
            </div>
            <div>
                <button type="button">
                    -
                </button>
                {neutron}
                <button type="button">
                    +
                </button>
            </div>
        </>
    )    
}

export default ElementComponent