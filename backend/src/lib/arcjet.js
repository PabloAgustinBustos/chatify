import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
import { ENV } from "./env";

const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    
    detectBot({
      mode: "LIVE", 

      allow: [
        "CATEGORY:SEARCH_ENGINE",
      ],
    }),

    slidingWindow({
      mode: "LIVE",
      max: 100, // 10 request per minute
      interval: 60
    })
  ],
});

export default aj