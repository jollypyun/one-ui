import { useCallback, useEffect, useState } from "react";
import API from "../api/Api";
import axios from "../api/Api";

function NationList() {
    const [nationData, setNationData] = useState([]);
    
    const getNationData = useCallback(() => {
        axios.get("/nation/alllNation")
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(`error`);
        })
    }, [])

    useEffect(() => {
        getNationData();
    }, [getNationData]);

    return (
        <div>
            <table className="table-default">
                <thead>
                    <tr>
                        <th>{`이름`}</th>
                        <th>{`수도`}</th>
                        <th>{`국가코드(3자리)`}</th>
                        <th>{`국제통화번호`}</th>
                    </tr>
                </thead>
                <tbody>
                    {nationData?.length === 0 && (
                        <tr>
                            <td colSpan={4}>{`데이터 없음`}</td>
                        </tr>
                    )}
                    {nationData?.map((data, i) => (
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.capital}</td>
                            <td>{data.nationalCode}</td>
                            <td>{data.isd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NationList;