"use client";

import { useEffect, useState } from "react";

export default function Page() {
  let [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // const data = await fetch(
        //   "https://d6dz717n-8000.inc1.devtunnels.ms/predict",
        //   {
        //     method: "POST",
        //     mode: "no-cors",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "access-control-allow-origin": "http://localhost:3000",
        //       "access-control-allow-headers": "*",
        //       "access-control-allow-methods": "*",
        //     },

        //     body: JSON.stringify({
        //       description: "what are your views on the Zomato?",
        //     }),
        //   }
        // );
        const data = await fetch("http://127.0.0.1:8000/ping", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            "access-control-allow-headers": "*",
            "access-control-allow-methods": "*",
          },
          mode: "no-cors",
        });
        const result = await data.json();
        setResponse(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        console.log(response);
      }
    }

    fetchData();
  }, []);
}
