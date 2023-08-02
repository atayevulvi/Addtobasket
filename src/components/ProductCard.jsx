
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice';
export default function ProductCard() {

  const items = useSelector((state) => state.allCart.items)
  const dispatch = useDispatch()

  return (
    <MDBContainer>
      <MDBRow className='mb-3 'style={{gap:'60px',marginTop:'20px'}}>
        {items.map((item) => (
          <MDBCol key={item.id} size='md'>
            <MDBCard>
              <MDBCardImage className='mt-2' src={item.img} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                  {item.price}
                </MDBCardText>
                <MDBBtn onClick={() => dispatch(addToCart(item))}>Add to Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))

        }
      </MDBRow>
    </MDBContainer>

  );
}