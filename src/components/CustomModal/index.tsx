import {
  ChangeEvent, ReactElement, ReactNode, useState
} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

interface ChildrenProps<T> {
  values: T;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomModalProps<T> {
  initialValues: T;
  title: string;
  open: boolean;
  onClose: () => void;
  children: (props: ChildrenProps<T>) => ReactNode | ReactNode[];
  onSubmit: (values: T) => void;
}

function CustomModal<T>({
  open,
  onClose,
  title,
  initialValues,
  onSubmit,
  children,
}: CustomModalProps<T>): ReactElement {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children({ handleChange, values })}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomModal;
