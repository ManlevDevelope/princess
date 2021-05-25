import { useCallback } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  useLocation } from "react-router";
import {  UPLOAD_ITEM_REQUEST } from "../Actions";
import useWindowSize from "../components/hooks/useWindowSize";
import { Container } from "../components/styled";
import {  useHistory } from 'react-router-dom';

import Layout from "../layouts"
import { useEffect } from "react";
const ItemRegist = () => {
  const dispatch=useDispatch();
  const {uploadItemDone}=useSelector(state=>state.item);

  const history=useHistory();
  const {captured,name,real,series}=useLocation();
  const {width,height} = useWindowSize();
  // const canvasRef=useRef();
  useEffect(()=>{
    if(uploadItemDone){
      history.push('/info');
    }
  },[uploadItemDone])
  const onRegistItem=useCallback(()=>{
    const blobBin=atob(captured.split(',')[1]);
    const array=[];
    for(let i=0;i<blobBin.length;i++){
      array.push(blobBin.charCodeAt(i))
    }
    const file=new Blob([new Uint8Array(array)],{type:'image/png'});
    file.name=name;
    const image=new FormData();
    image.append('image',file,name);
    image.append('name',name);
    image.append('series',series);
    dispatch({type:UPLOAD_ITEM_REQUEST, data: image});
  },[captured,name,real]);
  const onClickBack=useCallback(
    () => {
      history.replace('/recognition');
    },
    [],
  );
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
                <div style={{color:'#787878',fontSize:'14px'}}>품종: {series}</div>
              </div>
              <div style={{color:'#787878',marginLeft:20,marginRight:20,fontSize:"12px",whiteSpace:'nowrap'}}>
                <p>관리코드: -</p>
                <p>상품ID: ASDF1234</p>
              </div>
            </div>
          </div>
          <div style={{backgroundColor:'white', paddingTop:8,fontSize:12, color:'#787878'}}>
            <div style={{width:'100%',height:200,borderRadius:10,border:'1px solid #787878',padding:10,overflowWrap:"break-word"}}>
              {real?<p style={{fontWeight:800}}>본 제품은 정품입니다</p>:<p style={{fontWeight:800,color:'red'}}>본 제품은 가품입니다</p>}
              {' '}정품으로 인증받은 제품은 소유권을 이전시킬 수 있는 판매상품으로 등록할 수 있으며 인식하지 못한 가품을 정품으로 등록하는 경우 법적 처벌 대상이 될 수 있습니다
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
            <button onClick={onRegistItem} style={{background:'#94268f',width:'100%', height:48,borderRadius:4,color:'white'}}>등록</button>
            <button onClick={onClickBack} style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>취소</button>
          </div>:<div>
            <button onClick={onClickBack} style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>확인</button>
            <button style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>문의하기</button>
            <button style={{background:'#1d1d1f',width:'100%', height:48,borderRadius:4,color:'white',marginTop:8}}>소유이전 신청</button>
          </div>}
        </div>
      </Container>
    </Layout>
  )
}

export default ItemRegist;
