import "./timer.css";
import React, { useState, useEffect } from "react";
import AppBarCustom from "../../components/appbar";
import {
  FaArrowUp,
  FaArrowDown,
  FaPlay,
  FaPause,
  FaRedo,
} from "react-icons/fa";
import FooterCustom from "../../components/footer";

function Timer() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(5);
  const [sessionTimer, setSessionTimer] = useState({
    minutes: sessionLength,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const timerToggle = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        let { minutes, seconds } = sessionTimer;
        seconds = seconds - 1;
        if (seconds < 0) {
          minutes = minutes - 1;
          seconds = 59;
        }
        if (seconds === 0 && minutes === 0) {
          if (!onBreak) {
            minutes = breakLength;
            seconds = 0;
            setOnBreak(true);
          } else {
            minutes = sessionLength;
            seconds = 0;
            setOnBreak(false);
          }
        }
        setSessionTimer({ minutes: minutes, seconds: seconds });
      }, 1000);
    } else if (!isRunning && sessionTimer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, sessionTimer]);

  return (
    <div className="App-timer">
      <AppBarCustom />
      <div className="stopwatch-timer">
        <div className="adjustment-container-timer">
          <div className="break-length-container-timer flex-timer border-timer">
            <h2>Break Length</h2>
            <div className="adjustment-container-timer">
              <div className="white-timer">
                <FaArrowUp
                  className="fa-timer"
                  onClick={() => setBreakLength(breakLength + 1)}
                />
                <h1>{breakLength}</h1>
                <FaArrowDown
                  className="fa-timer"
                  onClick={() => setBreakLength(breakLength - 1)}
                />
              </div>
            </div>
          </div>
          <div className="session-length-container-timer flex-timer border-timer">
            <h2>Session Length</h2>
            <div className="adjustment-container-timer">
              <div className="white-timer">
                <FaArrowUp
                  className="fa-timer"
                  onClick={() => {
                    setSessionLength(sessionLength + 1);
                    setSessionTimer({ minutes: sessionLength + 1, seconds: 0 });
                    setIsRunning(false);
                  }}
                />
                <h1>{sessionLength}</h1>
                <FaArrowDown
                  className="fa-timer"
                  onClick={() => {
                    setSessionLength(sessionLength - 1);
                    setSessionTimer({ minutes: sessionLength - 1, seconds: 0 });
                    setIsRunning(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="timer-container-timer border-timer">
          <h1>Session</h1>
          {onBreak && <h1 className="break-timer">ON BREAK!</h1>}
          <h1 className="timer-timer border-timer">
            {sessionTimer.minutes}:{sessionTimer.seconds < 10 ? "0" : ""}
            {sessionTimer.seconds}
          </h1>
          <div onClick={timerToggle} className="start-stop-timer">
            <FaPlay className="fa-timer" style={{ margin: 0 }} />
            <FaPause className="fa-timer" style={{ margin: 0 }} />
          </div>
          <FaRedo
            className="fa-timer"
            onClick={() => {
              setSessionTimer({ minutes: sessionLength, seconds: 0 });
              setIsRunning(false);
            }}
          />
        </div>
      </div>
      <FooterCustom
        url="https://github.com/brandmch/Timer"
        style={{ paddingTop: 4, color: "#FFFFFF" }}
      />
    </div>
  );
}

export default Timer;
