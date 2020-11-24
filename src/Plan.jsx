import React from 'react';
import { Figure } from './Figure';
import { isPlayerInGame } from './state';

const Plan = (props) => {
  const fields = props.state.fields;

  return (
    <svg
      className="plan"
      xmlns="http://www.w3.org/2000/svg"
      id="svg2354"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
    >
      <style id="style12"></style>
      <g id="layer1">
        <Figure
          player={fields[0]}
          position=".3245 -.02986 .03763 .34823 -57.944 -212.34"
        />
        <Figure
          player={fields[1]}
          position=".3245 -.02986 .03763 .34823 -18.963 -200.832"
        />
        <Figure
          player={fields[2]}
          position=".3245 -.02986 .03763 .34823 17.42 -206.03"
        />

        <Figure
          player={fields[3]}
          position=".3245 -.02986 .03763 .34823 46.006 -195.634"
        />

        <Figure
          player={fields[4]}
          position=".3245 -.02986 .03763 .34823 74.592 -186.353"
        />

        <Figure
          player={isPlayerInGame(props.state, 1) ? 0 : 1}
          position=".3245 -.02986 .03763 .34823 -106.801 -236.76"
        />

        <Figure
          player={isPlayerInGame(props.state, 2) ? 0 : 2}
          position=".3245 -.02986 .03763 .34823 -97.297 -198.233"
        />
      </g>
    </svg>
  );
};

export default Plan;
