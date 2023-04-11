import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PopupDialog = (props) => {
const { open, setOpen, onSubmit, onClose, title, children } = props;

    return(
        <Dialog
            open={open}
            onClose={(_, reason) => {
                if(reason !== `backdropClick`) {
                    setOpen(false);
                    onClose();
                }
            }}
            disableEscapeKeyDown
        >
            <DialogTitle>
                {title}
                <IconButton onClick={() => {
                    setOpen(false);
                    onClose();
                }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
        </Dialog>
    )
};

export default PopupDialog;