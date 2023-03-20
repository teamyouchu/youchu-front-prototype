import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SnackBar({ open, setOpen }: IProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      TransitionComponent={TransitionDown}
    >
      <Alert onClose={handleClose} variant="filled" severity="warning">
        5개 이상 평가해야 추천받을 수 있어요.
      </Alert>
    </Snackbar>
  );
}
