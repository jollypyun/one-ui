import { useCallback, useEffect, useState } from "react";
import axios from "../api/Api";
import Nation from './Nation'

function NationList() {
    const [openNation, isOpenNation] = useState(false);
    const [edit, isEdit] = useState(false);
    const [value, setValue] = useState();
    const [nationData, setNationData] = useState([]);

    const handleAdd = useCallback(() => {
        setValue();
        isEdit(false);
        isOpenNation(true);
    }, [isOpenNation, isEdit]);

    const handleUpdate = useCallback((data) => {
        isEdit(true);
        isOpenNation(true);
        setValue(data);
    }, [isEdit, isOpenNation])
    
    const getNationData = useCallback(() => {
        axios.get("http://localhost:9010/nation/allNation")
        .then((res) => {
            setNationData(res.data.data);
        })
        .catch((e) => {
            console.log(`error`);
        })
    }, [])

    useEffect(() => {
        getNationData();
    }, [getNationData]);

    return (
        <>
            <div>
                <h1>국가 조회</h1>
                <table border='1px black'>
                    <thead>
                        <tr>
                            <th>{`이름`}</th>
                            <th>{`수도`}</th>
                            <th>{`국가코드(3자리)`}</th>
                            <th>{`국제통화번호`}</th>
                            <th>{`수정`}</th>
                        </tr>
                    </thead>
                    <tbody >
                        {nationData?.length === 0 && (
                            <tr>
                                <td colSpan={5}>{`데이터 없음`}</td>
                            </tr>
                        )}
                        {nationData?.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.capital}</td>
                                <td>{data.nationalCode}</td>
                                <td>{data.isd}</td>
                                <td>
                                    <button type="button" onClick={() => handleUpdate(data)}>{`수정`}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>
                    <button type="button" onClick={() => handleAdd()}>{`추가`}</button>
                </p>
            </div>
            <Nation 
                open={openNation}
                setOpen={isOpenNation}
                callback={getNationData}
                isEdit={edit}
                item={value}
            />
        </>
    )
}

export default NationList;