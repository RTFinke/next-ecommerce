// @ts-nocheck
/* eslint-disable */

export default function handler(req, res) {
  const { garment, type } = JSON.parse(req.body);

  console.debug(
    JSON.stringify({
      apiKey: process.env.SIZ3R_API_KEY,
      garment: garment,
      type: type,
    })
  );
  fetch("https://siz3r.com/api/tryon/authenticate/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey: process.env.SIZ3R_API_KEY,
      garment: garment,
      type: type,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.debug(data);
      res.status(200).json({ token: data.token });
    })
    .catch((error) => {
      console.debug(error);
      res.status(400).json({ error: error });
    });
}
