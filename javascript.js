fetch(
  "https://spotify23.p.rapidapi.com/search/?q=metallica&type=multi&offset=0&limit=20&numberOfTopResults=5",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "spotify23.p.rapidapi.com",
      "x-rapidapi-key": "997d2861edmsh0cbd64290b6eb42p1acebfjsn6e8957634da8",
    },
  }
)
  .then((response) => {
    response.json().then((json) => {
      console.log(json);
    });
  })
  .catch((err) => {
    console.error(err);
  });
