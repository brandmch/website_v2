import React, { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppBarCustom from "../../components/appbar";
import FooterCustom from "../../components/footer";
import rgbToHex from "../../utils/rgbToHex";
import { randomColor } from "../../utils/randomColor";
import "./randomQuoteMachine.css";
import { QuizRounded } from "@mui/icons-material";

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
const getTweetStr = (quote) => {
  return `"${quote.text}" -${quote.author}`;
};

const QuoteBox = ({ backgroundColor = randomColor(), setBGColor }) => {
  const [quote, setQuote] = useState({});
  const [refresh, setRefresh] = useState(false);

  // On load, and on refresh, generate random quote and random color
  useEffect(() => {
    randomQuote().then((res) => {
      const newQuote = { ...res };
      newQuote.author = newQuote.author.replace(", type.fit", "");
      if (newQuote.author === null || newQuote.author === "type.fit") {
        newQuote.author = "Anonymous";
      }
      setQuote(newQuote);
    });
    setBGColor(randomColor());
  }, [refresh]);
  return (
    <div className="header-randomQuoteMachine">
      <p className="quote-randomQuoteMachine" id="text">
        "{quote.text}"
      </p>
      <p className="author-randomQuoteMachine" id="author">
        -{quote.author}
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
            color: backgroundColor,
            fontSize: 50,
            flex: 1,
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(`https://twitter.com/intent/tweet?text=${getTweetStr(quote)}`, "_blank");
          }}
        />
      </div>
    </div>
  );
};

// Main App
const RandomQuoteMachine = ({ header = true }) => {
  const [bgColor, setBGColor] = useState(randomColor());

  return (
    <div
      className="App-randomQuoteMachine"
      id="quote-box"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${bgColor}, rgb(255, 255, 255))`,
      }}
    >
      {header && <AppBarCustom />}
      <QuoteBox backgroundColor={bgColor} setBGColor={setBGColor} />
      {header && (
        <FooterCustom
          url="https://github.com/brandmch/Random-Quote-Machine"
          style={{ paddingTop: 10 }}
        />
      )}
    </div>
  );
};

export { RandomQuoteMachine, QuoteBox };
