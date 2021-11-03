import React, {useState} from "react";
import Container from '@mui/material/Container';
import {Box, Button, DialogActions, Input} from "@mui/material";
import * as yup from 'yup';
import {Formik} from 'formik';
import NumberFormat from "react-number-format";
import {useDispatch, useSelector} from "react-redux";

import './Order.scss';
import Dialog from "@mui/material/Dialog";
import {Link} from "react-router-dom";
import {removeAllFromCart} from "../../store/cart/actions";

const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  address: yup.string().required(),
  phone: yup.string().required()
});

const Order = () => {

  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const albums = useSelector(state => state.cartList);
  const allAlbums = useSelector(state => state.albumsList);

  const displayItems = allAlbums.map(albumItem => {
    const {band, album, price, id} = albumItem;
    if (albums.includes(albumItem.id)) {
      return (<li key={id}>Band: <b>{band}</b>, Album: <b>{album}</b>, Price: <b>${price}</b></li>)
    }
  });

  const styles = {
    backgroundColor: 'white',
    paddingLeft: '8px',
  };

  const handleConfirm = () => {
    setOpen(false);
    dispatch(removeAllFromCart(albums));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <h4 className='text-center order-title'>Order Confirmation</h4>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          age: '',
          address: '',
          phone: ''
        }}
        validationSchema={schema}

        onSubmit={(values, {setSubmitting}) => {
          if (albums.length <= 0) {
            return false
          }
          setTimeout(() => {
            setSubmitting(false);
            setOpen(true);

          }, 400);
        }}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
          <form onSubmit={handleSubmit}>
            <Box display='grid'
                 gridTemplateColumns='repeat(2, 1fr)'
                 gap={3}
                 sx={{width: '70%', margin: '0 auto'}}>

              <Input
                placeholder='Name'
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                sx={styles}
              />
              {errors.name && touched.name && errors.name && (<div className='error-message'>{errors.name}</div>)}

              <Input
                placeholder='Last name'
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                sx={styles}
              />
              {errors.lastName && touched.lastName && errors.lastName && (
                <div className='error-message__last-name'>{errors.lastName}</div>)}

              <Input
                placeholder='Age'
                type="text"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                sx={styles}
              />
              {errors.age && touched.age && errors.age && (<div className='error-message__age'>{errors.age}</div>)}

              <Input
                placeholder='Address'
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                sx={styles}
              />
              {errors.address && touched.address && errors.address && (
                <div className='error-message__address'>{errors.address}</div>)}

              <NumberFormat
                customInput={Input}
                placeholder='+38 (0__)'
                format="+38 (0##) ####-##-##"
                mask="_"
                type='text'
                name='phone'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                sx={styles}
              />
              {errors.phone && touched.phone && errors.phone && (
                <div className='error-message__phone'>{errors.phone}</div>)}

              <Button type="submit"
                      disabled={isSubmitting}
                      variant="outlined"
                      sx={{
                        color: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        '&:hover':
                          {
                            color: '#000000',
                            borderColor: '#000000',
                            backgroundColor: '#FFFFFF'
                          }
                      }}>
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <h4 className='text-center modal-title'
            id="alert-dialog-title">
          Your order has been successfully confirmed
        </h4>
        <ul className='modal-list'>
          {displayItems}
        </ul>

        <DialogActions sx={{
          a: {
            color: '#000000',
            textDecoration: 'none',
            marginRight: '14px',
            fontSize: '20px',
            padding: '6px'
          }
        }}>
          <Link to='/'
                onClick={handleConfirm}>Ok</Link>
        </DialogActions>
      </Dialog>
    </Container>
  )
};

export default Order;