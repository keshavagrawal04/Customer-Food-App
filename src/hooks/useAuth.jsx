import {useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await AsyncStorage.setItem(
        "accessToken",
        accessToken,
      );
      const refreshToken = await AsyncStorage.setItem(
        "refreshToken",
        accessToken,
      );
      const mobileNumber = await AsyncStorage.setItem(
        "mobileNumber",
        mobileNumber,
      );
      const userId = await AsyncStorage.setItem("userId", userId);

      if (accessToken && userId) {
        setUserData({mobileNumber, accessToken, refreshToken, userId});
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  const login = async (mobileNumber, accessToken, refreshToken, userId) => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem("accessToken", accessToken);
      await AsyncStorage.setItem("refreshToken", accessToken);
      await AsyncStorage.setItem("mobileNumber", mobileNumber);
      await AsyncStorage.setItem("userId", userId);

      setUserData({mobileNumber, accessToken, refreshToken, userId});
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error.response.data);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      await AsyncStorage.removeItem("mobileNumber");
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("userId");

      setUserData(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {login, logout, userData, isLoading, isLoggedIn};
};

export default useAuth;
