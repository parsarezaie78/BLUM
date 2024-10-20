class TokenHelper {
  constructor() {}

  isExpired(token) {
    // Extract payload from the JWT token
    const base64Url = token.split(".")[1]; // The payload is in the middle part
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Replace characters to conform to base64 format

    // Decode base64 to a JSON string
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    // Convert JSON string to a JavaScript object
    const payload = JSON.parse(jsonPayload);

    // Get the exp information from the payload
    const exp = payload.exp;
    // Get the current time in seconds
    const currentTime = Math.floor(Date.now() / 1000);
    // Compare the expiration time with the current time
    return exp < currentTime;
  }
}

const tokenHelper = new TokenHelper();
export default tokenHelper;
