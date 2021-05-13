import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"
import {  useLocation } from "react-router";
import useWindowSize from "../components/hooks/useWindowSize";
import { Container } from "../components/styled";
import Layout from "../layouts"

const ItemRegist = () => {
  const {captured,name,real}=useLocation();
  const {width,height} = useWindowSize();
  // const canvasRef=useRef();
  useEffect(()=>{
  },[captured])
  return (
    <Layout>
      <Container style={{marginBottom:56}}>
        <div style={{paddingRight:16,paddingLeft:16,backgroundColor:'white'}}> 
          <div style={{display:'flex',marginTop:3,}}>
            <div style={{overflow:"hidden",}}>
              <img src={captured} style={{
                display:'inline',
                width:width/2,
                height:width/2, objectFit:'cover',borderRadius:10,border:'1px solid #787878',
                }} className="image" alt='' />
            </div>
            <div style={{flex:1}}>
              <div style={{flex:1,margin:20}}>
                <div style={{fontWeight:700,fontSize:'18px'}}>{name}</div>
                <div style={{color:'#787878',fontSize:'14px'}}>시리즈A</div>
              </div>
              <div style={{color:'#787878',marginLeft:20,marginRight:20,fontSize:"12px",whiteSpace:'nowrap'}}>
                <p>관리코드: 12314151</p>
                <p>상품ID: ASDF1234</p>
              </div>
            </div>
          </div>
          <div style={{backgroundColor:'white', paddingTop:8,fontSize:12, color:'#787878'}}>
            <div style={{width:'100%',height:200,borderRadius:10,border:'1px solid #787878',padding:10,overflowWrap:"break-word"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            </div>
          </div>
          <div style={{textAlign:"center",paddingTop:16,paddingBottom:16}}>{real?
            <p>이 카드는 정품입니다.</p>:
            <>
              <p>이 카드는 가품입니다.</p>
              <p>관리코드 및 카드에 기재된 ID를 확인해주세요</p>
            </>}
          </div>
          {real?<div>
            <button style={{background:'#94268f',width:'100%', height:48,borderRadius:4,color:'white'}}>등록</button>
            <button style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>취소</button>
          </div>:<div>
            <button style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>확인</button>
            <button style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>문의하기</button>
            <button style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>소유이전 신청</button>
          </div>}


        </div>
      </Container>
    </Layout>
  )
}

export default ItemRegist;
