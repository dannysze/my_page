import React from "react";
import WaveSVG from "../assets/img/wave.svg";
import ReversedWaveSVG from "../assets/img/wave_reverse.svg";

const Wave = ({ type }) => {
  return (
    <>
      {type === 1 ? (
        <div id="wave1" style={{ marginTop: "-1px" }}>
          <img src={WaveSVG} alt="" />
        </div>
      ) : (
        <div id="wave2" style={{ marginBottom: "-1px" }}>
          <img src={ReversedWaveSVG} alt="" style={{ verticalAlign: "top" }} />
        </div>
      )}
    </>
  );
};

export default Wave;
