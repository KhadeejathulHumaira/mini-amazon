import React from 'react'
import styled from 'styled-components'
import CartItemComponent from './CartItemComponent'

function CardItems({cartItems}) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemContainer>
                {
                    cartItems.map((item)=>(
                        <CartItemComponent
                         id={item.id}
                         item={item.items}
                        />
                    ))
                }
                
            </ItemContainer>
           
        </Container>
    )
}

export default CardItems

const Container=styled.div`
  
    flex:0.8;
    background:white;
    margin-right:18px;
    padding:20px;

`
const Title=styled.h1`
    margin-bottom:8px;
    color:#861657; 
`
const ItemContainer=styled.div``