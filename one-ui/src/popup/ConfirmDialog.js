import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ConfirmDialog = (props) => {
    const { title, open, setOpen, onConfirm, children } = props;

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <button type="button" onClick={() => {
                    setOpen(false);
                    onConfirm();
                }}>
                    {`확인`}
                </button>
                <button type="button" onClick={() => setOpen(false)}>
                    {`취소`}
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;