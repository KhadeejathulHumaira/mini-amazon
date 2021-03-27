 import React,{useState,useEffect} from 'react'
 import styled from 'styled-components'
 import Product from './Product'
 import { db } from './Firebase'
 
 function Home() {
     const [product,setProduct]=useState([]) 

    const getProduct=()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProduct=[]
            tempProduct=snapshot.docs.map((doc)=>(
              {  
                  id:doc.id,
                  product:doc.data()
            }
            ));
            
            setProduct(tempProduct)
            //console.log(snapshot)
        })
    }
 useEffect(()=>{
    getProduct()
 },[])
  

     return (
         <Container>
             <HomeBanner>

             </HomeBanner>
             <Content>
                {
                    product.map((item)=>(
                        <Product 
                          title={item.product.name}
                          price={item.product.price}
                          rating={item.product.rating}
                          image={item.product.image}
                          id={item.id}

                         />
                    ))
                }
             
             </Content>

         </Container>
     )
 }
 
 export default Home
 
 const Container=styled.div`
    max-width:1500px;
    margin:0 auto;
  
 `

 const HomeBanner=styled.div`
        background-image:url(https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/March/AccessoriesDays/Ingress/D21927465_WLA_BAU_Accessories_Days_March_Tall_Hero_1500x600._CB657326181_.jpg);
        min-height:600px;
        background-position:center;
        background-size:cover;
        mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0.006));
       
 `

 const Content=styled.div`
        display:flex;
        padding-left:10px;
        padding-right:10px;
        margin-top:-350px;
      
 `