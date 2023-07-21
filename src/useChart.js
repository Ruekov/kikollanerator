import React from 'react';
import Chart from 'chart.js';

const useChart = (nodeRef, options) => {
  React.useEffect(() => {
    new Chart(nodeRef.current, options);
    console.log('render');
  }, [nodeRef, options]);

  return {};
};

export default useChart;
