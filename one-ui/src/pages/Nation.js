import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import PopupDialog from "../popup/PopupDialog";
import axios from "axios";
import ConfirmDialog from "../popup/ConfirmDialog";

const Nation = (props) => {
    const { open, setOpen, callback, isEdit, item } = props;
    const [openConfirm, setOpenConfirm] = useState(false);

    const InitialValues = useMemo(() => {
        if(isEdit) {
            return {
                name: item.name,
                capital: item.capital,
                code: item.nationalCode,
                isd: item.isd
            }
        } 
        return {
            name: null,
            capital: null,
            code: null,
            isd: null
        }
    }, [item, isEdit]);

    const { handleSubmit, reset, register } = useForm({
        defaultValues: InitialValues,
        mode: "onChange",
        reValidateMode: "onChange"
    }, [InitialValues]);

    const onSubmit = useCallback((data) => {
        const engRegex = /[a-zA-Z]/g;
        const codeRegex = /[A-Z]/g;

        if(!engRegex.test(data.name)) {
            alert(`국가명은 영어만 입력가능합니다.`);
            return;
        }

        if(!engRegex.test(data.capital)) {
            alert(`수도명은 영어만 입력가능합니다.`);
            return;
        }

        if(data.code.length !== 3 || !codeRegex.test(data.code)) {
            alert(`국가코드를 잘못 입력하였습니다.`);
            return;
        }

        const datas = {
            name: data.name,
            capital: data.capital,
            nationalCode: data.code,
            isd: data.isd
        }
        if(isEdit) {
            axios.put("http://localhost:9010/nation/oneNation", datas)
            .then((res) => {

            })
            .catch((e) => {
                alert(`error ${e}`)
            });
        }
        else {
            axios.post("http://localhost:9010/nation/oneNation", datas)
            .then((res) => {
                alert(`success`);
                callback();
            })
            .catch((e) => {
                alert(`error`);
            });
        }
        setOpen(false);
        reset();
    }, [reset, setOpen, callback, isEdit]);

    const onError = useCallback(() => {
        alert(`error 발생`);
    }, []);

    const handleConfirm = useCallback(() => {
        setOpenConfirm(true);
    }, [setOpenConfirm]);

    const handleClose = useCallback(() => {
        setOpen(false);
        reset();
    }, [setOpen, reset]);

    useEffect(() => {
        if(item === null || item === undefined) {
            return ;
        }
        reset({
            name: item.name,
            capital: item.capital,
            code: item.nationalCode,
            isd: item.isd
        })
    }, [item, reset]);

    return (
        <>
            <PopupDialog
                open={open}
                setOpen={setOpen}
                onSubmit={handleConfirm}
                onClose={handleClose}
                title={`국가 추가`}
            >
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div>
                        <dl>
                            <div>
                                <dt>
                                    <span>{`국가명`}</span>
                                </dt>
                                <dd>
                                    <input type="search"
                                        placeholder="영어로 작성하세요"
                                        {...register("name", {
                                            required: {
                                                value: true
                                            }
                                        })
                                    }/>
                                </dd>
                                <dt>
                                    <span>{`수도명`}</span>
                                </dt>
                                <dd>
                                    <input type="search"
                                        placeholder="영어로 작성하세요"
                                        {...register("capital", {
                                            required: {
                                                value: true
                                            }
                                        })}
                                    />
                                </dd>
                                <dt>
                                    <span>{`국가코드(3자리)`}</span>
                                </dt>
                                <dd>
                                    <input type="search"
                                        placeholder="영어, 3글자 코드"
                                        {...register("code", {
                                            required: {
                                                value: true
                                            }
                                        })}
                                    />
                                </dd>
                                <dt>
                                    <span>{`국제통화번호`}</span>
                                </dt>
                                <dd>
                                    <input type="search"
                                        placeholder="국제통화번호"
                                        {...register("isd", {
                                            required: {
                                                value: true
                                            }
                                        })}
                                    />
                                </dd>
                            </div>
                        </dl>
                    </div>
                </form>
            </PopupDialog>
            <ConfirmDialog
                open={openConfirm}
                setOpen={setOpenConfirm}
                onConfirm={handleSubmit(onSubmit, onError)}
                title={`국가 ${isEdit ? `수정` : `등록`} 확인`}
            >
                <div>{`${isEdit ? `수정` : `등록`}하시겠습니까?`}</div>
            </ConfirmDialog>
        </>
    )
}

export default Nation;