import { useCallback, useEffect, useState } from "react";
import axios from "../api/Api";
import Nation from './Nation'
import ConfirmDialog from "../popup/ConfirmDialog";

function NationList() {
    const [openNation, isOpenNation] = useState(false);
    const [edit, isEdit] = useState(false);
    const [deleteConfirm, isDeleteConfirm] = useState(false);
    const [value, setValue] = useState();
    const [nationData, setNationData] = useState([]);
    const [checkedNation, setCheckedNation] = useState([]);

    const handleAdd = useCallback(() => {
        setValue();
        isEdit(false);
        isOpenNation(true);
    }, [isOpenNation, isEdit]);

    const handleUpdate = useCallback((data) => {
        isEdit(true);
        isOpenNation(true);
        setValue(data);
    }, [isEdit, isOpenNation]);

    const handleDelete = useCallback(() => {
        isDeleteConfirm(true);
    }, [isDeleteConfirm]);

    const handleAllCheck = useCallback((checked) => {
        if(checked) {
            const names = nationData.map(nation => nation.name);
            setCheckedNation(names);
        }
        else {
            setCheckedNation([]);
        }
    }, [setCheckedNation, nationData]);

    const handleSingleCheck = useCallback((checked, name) => {
        if(checked) {
            setCheckedNation([...checkedNation, name]);
        }
        else {
            setCheckedNation(checkedNation.filter((nation) => nation !== name));
        }
    }, [setCheckedNation, checkedNation])
    
    const getNationData = useCallback(() => {
        axios.get("http://localhost:9010/nation/allNation")
        .then((res) => {
            console.log(res.data.data);
            setNationData(res.data.data);
        })
        .catch((e) => {
            alert(`${e}`);
        })
    }, [setNationData]);

    const deleteNation = useCallback(() => {
        if(checkedNation.length === 0) {
            alert(`체크 되어있는 국가가 없습니다.`)
            return;
        }
        axios.post("http://localhost:9010/nation/nations", checkedNation)
        .then((res) => {
            setCheckedNation([]);
            getNationData();
        })
        .catch((e) => {
            alert(`${e}`);
        })
    }, [checkedNation, setCheckedNation, getNationData]);

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
                            <th>
                                <input
                                    type="checkbox"
                                    name="All"
                                    onChange={(e) => (handleAllCheck(e.target.checked))}
                                    checked={checkedNation.length === nationData.length ? true : false}
                                />
                            </th>
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
                                <td colSpan={6}>{`데이터 없음`}</td>
                            </tr>
                        )}
                        {nationData?.map((data, i) => (
                            <tr key={i}>
                                <td>
                                    <input 
                                        type="checkbox"
                                        name={data.name}
                                        onChange={(e) => handleSingleCheck(e.target.checked, data.name)}
                                        checked={checkedNation.includes(data.name) ? true : false}
                                    />
                                </td>
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
                    <button type="button" onClick={() => handleDelete()}>{`삭제`}</button> 
                </p>
            </div>

            <ConfirmDialog
                open={deleteConfirm}
                setOpen={isDeleteConfirm}
                onConfirm={deleteNation}
                title={`국가 삭제`}
            >
                <div>삭제하시겠습니까?</div>
            </ConfirmDialog>

            <Nation 
                open={openNation}
                setOpen={isOpenNation}
                callback={getNationData}
                edit={edit}
                item={value}
            />
        </>
    )
}

export default NationList;