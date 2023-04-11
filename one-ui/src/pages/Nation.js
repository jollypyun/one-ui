import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import PopupDialog from "../popup/PopupDialog";
import axios from "axios";
import ConfirmDialog from "../popup/ConfirmDialog";

const Nation = (props) => {
    const { open, setOpen, callback } = props;
    const [openConfirm, setOpenConfirm] = useState(false);

    const { handleSubmit, reset } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    }, []);

    const onSubmit = useCallback((data) => {
        const datas = {
            name: data.name,
            capital: data.capital,
            nationalCode: data.code,
            isd: data.isd
        }
        axios.post("http:localhost:9010/nation/oneNation", datas)
        .then((res) => {
            alert(`success`);
            callback();
        })
        .catch((e) => {
            alert(`error`);
        });
        setOpen(false);
        reset();
    });

    const onError = useCallback(() => {
        alert(`error 발생`);
    });

    const handleConfirm = useCallback(() => {
        setOpenConfirm(true);
    }, [setOpenConfirm]);

    const handleClose = useCallback(() => {
        setOpen(false);
        reset();
    }, [setOpen, reset]);

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
                                    <span>{`이름`}</span>
                                </dt>
                                <dd>

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
            >
                <div>{`등록하시겠습니까?`}</div>
            </ConfirmDialog>
        </>
    )
}

export default Nation;