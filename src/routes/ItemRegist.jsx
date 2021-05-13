import { useEffect } from "react";
import { useRef } from "react"
import {  useLocation } from "react-router";
import { Container } from "../components/styled";
import Layout from "../layouts"
let canvas;

const ItemRegist = () => {
  const {captured}=useLocation();
  // const canvasRef=useRef();
  useEffect(()=>{
    console.log(captured);
  },[captured])
  return (
    <Layout>
      <Container>
        <div style={{width:'100%'}}>
          <div style={{position:'relative',paddingTop:'75%',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,transform:'translate(50%,50%)'}}></div>
            <img src={captured} style={{
              position:'absolute',top:0,left:0,maxWidth:'100%',height:'auto',transform:'translate(-50%,-50%)'}} className="image" />
          </div>
        </div>
        성공
      </Container>
    </Layout>
  )
}

export default ItemRegist;
