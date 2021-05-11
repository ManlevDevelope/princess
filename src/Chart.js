import React from 'react';

const Chart = (props) => {
  const data = props.data;
  const label = data.label;
  const confidence = parseFloat(data.confidence.toFixed(2));
  return (
    <>
      <h3 style={{ color: 'white' }}>
        일치율: {label}{' '}
        <span style={{ color: confidence > 0.7 ? 'green' : 'white' }}>
          {confidence}
        </span>
      </h3>
      {/* <GaugeChart
        id='gauge-chart3'
        nrOfLevels={3}
        colors={['#FF5F6D', '#FFC371', 'rgb(26 202 26)']}
        arcWidth={0.3}
        percent={confidence}
      /> */}
    </>
  );
};
export default Chart;
