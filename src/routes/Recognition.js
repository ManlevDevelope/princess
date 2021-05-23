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
    // if (result[0].confidence > 0.7) {
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
    setCapture(true);
    // const blob = dataURItoBlob(canvasRef.current.toDataURL('image/jpeg'));
    // const formData = new FormData();
    // formData.append('file', blob);
    const recogResult = result[0].label;
    let itemName = '';
    let series = '';
    let real;
    if (recogResult.indexOf('(가품)') !== -1) {
      const nameArray = recogResult.split('(가품):');
      itemName = nameArray[0];
      series = nameArray[1];
      console.log(series);
      real = false;
    } else {
      const nameArray = recogResult.split(':');
      itemName = nameArray[0];
      series = nameArray[1];
      real = true;
    }
    console.log(itemName);
    history.push({
      pathname: '/regist',
      captured: canvasRef.current.toDataURL('image/jpeg'),
      name: itemName,
      series,
      real,
    });
    // }
  };
  return (
    <ScanContainer>
      <Loader
        type='Oval'
        color='#777'
        height={100}
        width={100}
        visible={!loaded}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
          alignItems: 'center',
        }}
      />
      {loaded && (
        <div
          style={{
            marginTop: 44,
            position: 'absolute',
            border: `5px solid ${
              result[0]?.confidence > 0.7 ? 'green' : 'red'
            }`,
            width: window.width,
            height: window.height - 194,
            zIndex: 1001,
          }}
        ></div>
      )}

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

        <div style={{ border: '' }} className='camera-bg'>
          {result.length > 0 && <Chart data={result[0]} />}

          {loaded && (
            <StartButton onClick={() => onClickCapture()}>
              {start ? <img src='/img/icon-scan-white.svg' alt='' /> : '준비중'}
            </StartButton>
          )}
        </div>
      </div>
    </ScanContainer>
  );
}

export default Recognition;
