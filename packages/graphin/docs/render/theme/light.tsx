import React from 'react';
import Graphin, { Utils, Behaviors } from '@antv/graphin';

const { ZoomCanvas } = Behaviors;
const data = Utils.mock(4)
  .circle()
  .graphin();
const layout = {
  type: 'concentric',
};

export default () => {
  return (
    <div>
      <Graphin data={data} layout={layout} theme={{ mode: 'light' }}>
        <ZoomCanvas disabled />
      </Graphin>
    </div>
  );
};
