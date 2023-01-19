import React, { useState } from "react";
import "./drumMachine.css";
import soundArr from "./sounds/sounds";

// Needed to alter style of button on keypress
let styles = {
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
};

const DrumMachine = () => {
  const [power, togglePower] = useState(true);
  const [soundTitle, setSoundTitle] = useState("");
  const [volume, setVolume] = useState(1);

  // soundOrder keeps track of the names and keys of each sound
  // Order of elements corresponds to order of sound files in soundArr
  // Numbers match the sound with corresponding keyboard key
  const soundOrder = [
    ["Hat", 7],
    ["Kick Light", 8],
    ["Kick", 9],
    ["Perc-1", 4],
    ["Perc-4", 5],
    ["Snare Off", 6],
    ["Snare Rimshot", 1],
    ["Snare Roll Short", 2],
    ["Tom", 3],
  ];

  // Takes in [index] of sound in soundOrder
  // Gets sound at soundArray[index]
  // Uses name from soundOrder to set soundTitle
  function playsound(ind, name) {
    let audio1 = new Audio(soundArr[ind]);
    audio1.volume = volume;
    audio1.play();
    setSoundTitle(name);
  }

  // Keydown events
  window.document.onkeydown = (e) => {
    let key = soundOrder.find((curr) => curr[1] == e.key);
    if (power) {
      playsound(soundOrder.indexOf(key), key[0]);
    }
  };
  function keydown({ key }) {
    document.getElementById(key).style.backgroundColor = "aqua";
    document.getElementById(key).style.boxShadow = "none";
  }
  function keyup({ key }) {
    document.getElementById(key).style = {};
  }
  document.addEventListener("keydown", keydown);
  document.addEventListener("keyup", keyup);

  return (
    <div className="App">
      <div className="controller">
        <div className="button-grid-container">
          {soundOrder.map((curr, ind) => {
            let [name, key] = curr;
            return (
              <div
                key={name}
                id={key}
                className="button-grid-item"
                style={styles[ind]}
                onClick={() => {
                  if (power) {
                    playsound(ind, name);
                  }
                }}
              >
                <h2>{key}</h2>
              </div>
            );
          })}
        </div>
        <div className="controls-container">
          <div className="block2">
            <div
              className="power-button"
              onClick={() => {
                togglePower(!power);
                setSoundTitle("");
              }}
            ></div>
            <h3>POWER</h3>
          </div>
          <div className="block3">
            <div
              className="power-light"
              style={power ? {} : { backgroundColor: "red" }}
            ></div>
          </div>
          <div className="block5">
            <h4>{soundTitle}</h4>
          </div>
          <div className="block8">
            <input
              max={1}
              min={0}
              step={0.01}
              type="range"
              value={volume}
              onChange={(e) => {
                setVolume(e.target.value);
              }}
            />
            <h4>VOLUME</h4>
          </div>
        </div>
      </div>
      <footer>
        <p>Brandon McHugh 2022</p>
        <p>
          <a href="https://github.com/brandmch/Drum-Machine">GitHub</a>
        </p>
      </footer>
    </div>
  );
};

export default DrumMachine;
