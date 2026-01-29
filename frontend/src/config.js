export const BASE_URL = import.meta.env.MODE === "development" 
  ? "http://localhost:3000/api" 
  : "https://chatify-production-1893.up.railway.app/api";