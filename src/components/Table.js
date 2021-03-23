import React,{useEffect,useState}from 'react';
import styled from 'styled-components'
import axios from 'axios'



function Table() {
  const [headings,setHead]=useState([])
  const [apis,setApi]=useState([])
  const list1=["app","org"]
  let ticked=0

  useEffect(() => {
      axios.get(`http://localhost:3001/privileges`)
      .then(res=>{
            setHead(res.data)
      })
      axios.get(`http://localhost:3001/apis`)
      .then(res=>{
        setApi(res.data)
      })

  },[])
  



 
  return(
    <Container>
    <Tables>
        <table>
          <thead>
            <tr>
            <th>Apis</th>
            {
              headings.map((heading)=>
                <th key={heading.id} >privilege{heading.id}</th>
              )
            }
            </tr>
          </thead>
          <tbody>
          {
        apis.map((api)=>
          <tr key={api.id}><td>{api.path}</td>
          { 
            headings.map((heading)=>
              <td key={heading.id}>
                {
                  api.privilegeId.map((id)=>
                  {  console.log("api",id,"heading",heading.id)
                    if (heading.id == id)
                    {
                      ticked=id
                      return <input type="checkbox" key={id} checked></input>
                    }
                  })
                }
              </td>
            )
          }
          </tr>
        )
    }
          
          </tbody>
        </table>
    </Tables>
    </Container>
  )
}

export default Table
 

const Container=styled.div`
  width:100%;
  height:100vh;
  background:#f4acb7;
  display:flex;
  justify-content:center;
  align-items:center;


`

const Tables=styled.div`
  color:white;
  width:50%;
  height:50%;
  padding:150px;
  
  display:flex;
  justify-content:center;
  align-items:center;
 
  table,td,tr,th{
    border:2px solid white;
  
  }
  table{
    width:100%;
    height:500px;
    background:#ffcad4;
      border-collapse:collapse;
  }
  th{
    font-size:20px;
    padding:30px;
    background:#9d8189;
  }
  td{
    height:40px;
    width:60px;
    padding:15px;
    text-align:center;
  }
  tr{
    font-size:25px;
    font-weight:700;
    color:black;
   
  }
  input{
    width:20px;
    height:20px;
    border:1px solid white;
  }


`