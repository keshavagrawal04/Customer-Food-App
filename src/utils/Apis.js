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

  try {
    const response = await fetch(
      `https://cpaas.messagecentral.com/verification/v3/validateOtp?countryCode=91&mobileNumber=${mobileNumber}&verificationId=${verificationId}&customerId=${customerId}&code=${otp}`,
      options,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
