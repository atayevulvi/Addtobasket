/* eslint-disable react-hooks/exhaustive-deps */

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartTotal } from '../features/cartSlice';

export default function Navbar() {

const {cart,totalQuantity}=useSelector((state)=>state.allCart)

const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getCartTotal())
},[cart])

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
       <Link to="/">All product</Link> 
        </span>
        <MDBBtn color='dark'>
       <Link style={{color:'white'}} to="/cart">CArt({totalQuantity})</Link> 
      </MDBBtn>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
  );
}