import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import {Link}  from 'react-router-dom'




function Header() {
    return (
        <Container>
        <Link to="/">
            <HeaderLogo>
            <img src={"https://i.imgur.com/7I9Was5.png"}/>

        </HeaderLogo>
        </Link>
        <HeaderOptionAddress>
            <RoomIcon/>
            <HeaderOption>
            <OptionLineOne>Hello</OptionLineOne>
            <OptionLineTwo>Select Your Address</OptionLineTwo>
            </HeaderOption>
        </HeaderOptionAddress>
        <HeaderSearch>
            <HeaderSearchInput type="text"/>
            <HeaderSearchIcon>
                <SearchIcon/>
            </HeaderSearchIcon>
        </HeaderSearch>
        <HeaderNavItems>
            <HeaderOption>
                <OptionLineOne>Hello,Humaiz</OptionLineOne>
                <OptionLineTwo> Account & Lists</OptionLineTwo>
            </HeaderOption>
            <HeaderOption>
            <   OptionLineOne>Returns</OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
            </HeaderOption>
            <HeaderOptionCart>
                <Link to="/cart">
                <ShoppingBasketIcon/>
                <CartCount>
                    4
                </CartCount>
                </Link>
            </HeaderOptionCart>
           
        </HeaderNavItems>
        </Container>
    )
}

export default Header
const Container=styled.div`
    height:60px;
    background:#1f2041;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:white;
     
    
`

const HeaderLogo=styled.div`
    img{
        width:100px;
        margin-left:11px;

    }
    
    
`

const HeaderOptionAddress=styled.div`
    padding-left:9px;
    display:flex;
    align-items:center;
`
const OptionLineOne =styled.div`


`
const OptionLineTwo =styled.div`
    font-weight:700;

`
const HeaderSearch=styled.div`
    display:flex;
    flex-grow:1;
    height:40px;
    border-radius:4px;
    overflow:hidden;
    margin-left:4px;
    background:white;
    :focus-within{
        box-shadow:0 0 0 3px #f90;

    }
`
const HeaderSearchInput=styled.input`
    flex-grow:1;
    border:0;
    :focus{
        outline:none;
    }


`
const HeaderSearchIcon =styled.div`
    background:#ffc857;
    width:45px;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    

`

const HeaderOption= styled.div`
   padding:10px 9px;
`

const HeaderOptionCart=styled.div`
    display:flex;
    align-items:center;
    padding-right:9px;
    a{
        display:flex;
        text-decoration:none;
        color:white;
        align-items:center;
    }
    
`

const HeaderNavItems=styled.div`
        display:flex;
        
`
const CartCount=styled.div`

    padding-left:4px;
    color:#ffc857;
    font-weight:700;

`