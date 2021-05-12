import React, { useEffect, useRef, useState } from 'react';
import ml5 from 'ml5';
import Loader from 'react-loader-spinner';
import useInterval from '@use-it/interval';
import useWindowSize from '../components/hooks/useWindowSize';

import Chart from '../Chart';
import { ScanContainer } from '../components/styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useCallback } from 'react';
import Layout from '../layouts';

// let classifier;
// let stream;
const StartButton = styled.button`
  z-index=100;
`;
let classifier;
let stream;
function Recognition() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [capture, setCapture] = useState(false);
  const history = useHistory();
  // const [devicesContent, setDevicesContent] = useState('');
  const window = useWindowSize();

  useEffect(() => {
    classifier = ml5.imageClassifier('./model/model.json', async () => {
      // const devices = await navigator.mediaDevices.enumerateDevices();
      // const d = [];
      // devices.forEach((device) => {
      //   d.push('Found device: ' + JSON.stringify(device) + '\n');
      // });
      // setDevicesContent(d);
      stream = await navigator.mediaDevices
        .getUserMedia({
          video: true,
          // video: { facingMode: { exact: 'environment' } },
          audio: false,
        })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
          toggle();
          return stream;
        });
    });
    return () => {
      stream.getVideoTracks()[0].stop();
    };
  }, [videoRef]);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
  };
  const onClickCapture = () => {
    setStart(false);
    const context = canvasRef.current.getContext('2d');
    console.log(videoRef.current.clientWidth, videoRef.current.clientHeight);
    var scale = Math.max(
      window.width / videoRef.current.clientWidth,
      window.height / videoRef.current.clientHeight
    );
    // get the top left position of the image
    var x = window.width / 2 - (videoRef.current.clientWidth / 2) * scale;
    var y = window.height / 2 - (videoRef.current.clientHeight / 2) * scale;
    context.drawImage(
      videoRef.current,
      x,
      y,
      videoRef.current.clientWidth * scale,
      videoRef.current.clientHeight * scale
    );
    console.log(context);
    setCapture(true);
  };
  return (
    <ScanContainer>
      <Loader
        type='Watch'
        color='#00BFFF'
        height={200}
        width={200}
        visible={!loaded}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          alignItems: 'center',
        }}
      />
      <div className='scan-bg'>
        <div className='scan-header'>
          <Link className='btn-back' to='/'>
            <img src='/img/btn-back-white.svg' alt='' />
          </Link>
          <div className='title'>
            <h1>스캔하기</h1>
          </div>
        </div>
        <div className='webcam'>
          <div className='upper'>
            <div className='capture'>
              {!capture && <video autoPlay ref={videoRef} id='webcam' />}
              <canvas
                width={window.width}
                height={window.height}
                ref={canvasRef}
              />
            </div>
          </div>
        </div>
        <div className='camera-bg'>
          {result.length > 0 && <Chart data={result[0]} />}

          {loaded && (
            <StartButton onClick={() => onClickCapture()}>
              {start ? 'Stop' : <img src='/img/icon-scan-white.svg' alt='' />}
            </StartButton>
          )}
        </div>
      </div>
    </ScanContainer>
  );
}

export default Recognition;
