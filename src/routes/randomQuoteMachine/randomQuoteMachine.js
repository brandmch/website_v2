import React, { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppBarCustom from "../../components/appbar";
import FooterCustom from "../../components/footer";
import rgbToHex from "../../utils/rgbToHex";
import { randomColor } from "../../utils/randomColor";
import "./randomQuoteMachine.css";

// Grabs array of quotes from API. Returns 1 random quote from the array.
const randomQuote = async () => {
  return await fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data[Math.floor(Math.random() * data.length)];
    });
};

// Turns the current quote in state into a string for Twitter http
const getTweetStr = (state) => {
  return `"${state.quote.text}" -${state.quote.author}`;
};

// Main App
const RandomQuoteMachine = () => {
  const [state, setState] = useState({ backgroundColor: "", quote: {} });
  const [refresh, setRefresh] = useState(false);

  // On load, and on refresh, generate random quote and random color
  useEffect(() => {
    randomQuote().then((res) => {
      const quote = { ...res };
      if (quote.author === null) {
        quote.author = "Anonymous";
      }
      setState({ quote: quote, backgroundColor: randomColor() });
    });
  }, [refresh]);

  if (state.backgroundColor !== "" && Object.keys(state.quote).length > 0) {
    return (
      <div
        className="App-randomQuoteMachine"
        id="quote-box"
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${state.backgroundColor}, rgb(255, 255, 255))`,
        }}
      >
        <AppBarCustom />
        <div className="header-randomQuoteMachine">
          <p className="quote-randomQuoteMachine" id="text">
            "{state.quote.text}"
          </p>
          <p className="author-randomQuoteMachine" id="author">
            -{state.quote.author}
          </p>
          <div className="button-container-randomQuoteMachine">
            <div className="blank-button-start-randomQuoteMachine"></div>
            <button
              className="new-quote-button-randomQuoteMachine"
              id="new-quote"
              onClick={() => {
                setRefresh(!refresh);
              }}
            >
              New Quote
            </button>
            <div className="blank-button-end-randomQuoteMachine"></div>
            <TwitterIcon
              style={{
                color: state.backgroundColor,
                fontSize: 50,
                flex: 1,
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(
                  `https://twitter.com/intent/tweet?text=${getTweetStr(state)}`,
                  "_blank"
                );
              }}
            />
          </div>
        </div>
        <FooterCustom
          url="https://github.com/brandmch/Random-Quote-Machine"
          style={{ paddingTop: 10 }}
        />
      </div>
    );
  } else {
    return (
      <div className="lds-ripple-randomQuoteMachine">
        <div></div>
        <div></div>
      </div>
    );
  }
};

export default RandomQuoteMachine;
