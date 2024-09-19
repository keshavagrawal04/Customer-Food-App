export const verifyOtp = async (
  mobileNumber,
  customerId,
  otp,
  verificationId,
) => {
  const options = {
    method: "GET",
    headers: {
      authToken:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUMzQTY0OTJDRTRBOTRDNiIsImlhdCI6MTcyNjU3MTc2NywiZXhwIjoxODg0MjUxNzY3fQ.S8Lf51Zp7RrODBpVgYdwY9F7I4nRqf5bHPzsiFtYJaa_8r9PKXTiP04j3nIbd9R2P23F9s0GsoFF2WcTHsQisQ",
    },
  };

  fetch(
    `https://cpaas.messagecentral.com/verification/v3/validateOtp?countryCode=91&mobileNumber=${mobileNumber}&verificationId=${verificationId}&customerId=${customerId}&code=${otp}`,
    options,
  )
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then(data => console.log("Data: ", data))
    .catch(error => console.error("Error:", error));
};
