import React from 'react'
import styled from 'styled-components'

function CartItemComponent({id,item}) {

    let option=[]
    for(let i=0;i<Math.max(item.quantity+1,20);i++){
        option.push(<option value={i}>Qty:{i}</option>)
    }
    return (
        <Container>
               <ImageContainer>
                    <img src={item.image}/>
               </ImageContainer>
               <CartInfo>
                    <CartInfoTop>
                        <h2>{item.name}</h2>
                    </CartInfoTop>
                    <CartInfoBottom>
                        <CartQuantity>
                            <select value={item.quantity}>
                                {option}
                            </select>
                           
                        </CartQuantity>
                        <CartDelete>
                            Delete
                        </CartDelete>
                    </CartInfoBottom>
               </CartInfo>
               <CartItemPrice>
                    ${item.price}
               </CartItemPrice>
             
        </Container>
    )
}

export default CartItemComponent

const Container=styled.div`
        display:flex;
        padding-top:12px;
        padding-bottom:12px;
        border-bottom: 1px solid #ddd;


`
const ImageContainer=styled.div`
    width:180px;
    height:180px;
    flex-shrink:0;
    flex-grow:0;
    margin-right:16px;
    img{
        height:100%;
        width:100%;
        object-fit:contain;

    }

`
const CartInfo=styled.div`
        flex-grow:1;
`
const CartInfoTop=styled.div`
    color:#306bac;
    h2{
        font-size:18px;
    }
`
const CartInfoBottom=styled.div`
      align-items:center;
      display:flex;
      margin-top:4px;
`
const CartItemPrice=styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px;
`
const CartQuantity=styled.div`
        select{
            border-radius:7px;
            background-color:#f0f2f2;
            padding:8px;
            bao-shadow:0 2px 5px rgba(15,17,17,15);
            :focus{
                outline:none;
            }
        }
`
const CartDelete=styled.div`
        color:;
        margin-left:16px;
        cursor:pointer;
`

