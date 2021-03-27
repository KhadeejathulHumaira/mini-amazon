import React from 'react'
import styled from 'styled-components'
import {db} from './Firebase'

function Product({title,price,image,rating,id}) {

    const addToCart=()=>{
        const cartItems=db.collection('cartitems').doc(id);
        cartItems.get()
        .then((doc)=>{
            //console.log(doc)
            if(doc.exists){
                cartItems.update({
                    quantity:doc.data().quantity+1
                })
            }
            else{
                db.collection('cartitems').doc(id).set({
                    name:title,
                    image:image,
                    price:price,
                    quantity:1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
            {title}
            </Title>
            <Price>
               ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rate=><p>⭐</p>)
                }
             
            </Rating>
            <ProductImage src={image}/>
            <ActionSection>
                <AddToCartBtn onClick={addToCart}>
                        Add to Cart
                </AddToCartBtn>
            </ActionSection>
           

        </Container>
    )
}

export default Product

const Container=styled.div`
    background-color:white;
    z-index:100;
    max-height:400px;
    flex:1;
    padding:20px;
    margin:10px;
    display:flex;
    flex-direction:column;
    border-radius:4px;



`
const Title=styled.span`

`
const Price =styled.span`
    font-weight:500;
    margin-top:3px;
`
const Rating=styled.div`
    display:flex;
`
const ProductImage=styled.img`
    max-height:200px;
    object-fit:contain;
`
const AddToCartBtn=styled.button`
      width:100px;
      height:30px;
      background-color:#ffc857;
      border:2px solid black;
      border-radius:2px;
      margin-top:10px;
      cursor:button;

`
const ActionSection=styled.div`
        display:grid;
        place-items:center;


`