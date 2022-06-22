import { FC } from 'react';
import { TextField } from '@material-ui/core';
import { Product } from '../../types';
import CustomModal from '../CustomModal';

export interface ProductModalProps {
    product: Product,
    open: boolean,
    onClose: () => void,
    handleSubmit: (values: Product) => void
}

const ProductModal: FC<ProductModalProps> = ({
  open, onClose, product, handleSubmit,
}) => (
  <CustomModal
    initialValues={product}
    onClose={onClose}
    onSubmit={handleSubmit}
    open={open}
    title={product.name}
  >
    {({ handleChange, values }) => (
      <>
        <TextField
          fullWidth
          label="Nome do Produto"
          value={values.name}
          name="name"
          variant="outlined"
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Preço do Produto"
          value={values.price}
          name="price"
          variant="outlined"
          onChange={handleChange}
          margin="normal"
        />
      </>
    )}
  </CustomModal>
);

export default ProductModal;
