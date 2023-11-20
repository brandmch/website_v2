const apiKey = process.env.REACT_APP_FOOTBALL_API_KEY;

async function getCurrentYear() {
  return await fetch(
    `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${apiKey}`
  ).then((x) => {
    if (!x.ok) {
      throw new Error("Network response: NOT OK");
    }
    return x.json();
  });
}

export async function getStandings(year = null) {
  const thisYear = await getCurrentYear();
  return await fetch(
    `https://api.sportsdata.io/v3/nfl/scores/json/Standings/${
      year ? year : thisYear
    }?key=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

export async function getStrengths() {
  const lastYear = (await getCurrentYear()) - 1;
  const lastYearRanks = await getStandings(lastYear);

  const ranks = lastYearRanks.reduce((a, c) => {}, []);

  return lastYearRanks;
}

// (1 / lastYearRank) * (PF / PA)
