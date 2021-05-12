import { useEffect } from "react";
import { useRef } from "react"
import Layout from "../layouts"
let canvas;

const ItemRegist = ({captured}) => {
  const canvasRef=useRef();
  useEffect(()=>{
    canvas=canvasRef.current;
    canvas.context=captured;
  },[captured])
  return (
    <Layout>
      <canvas ref={canvasRef} style={{width:300,height:300}} className="image" />
      성공
    </Layout>
  )
}

export default ItemRegist
