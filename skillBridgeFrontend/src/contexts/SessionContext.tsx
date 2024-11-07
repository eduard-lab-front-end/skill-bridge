import { CoursesType, SessionContextType } from "@/types/sessionContextTypes";
import { createContext, ReactNode, useEffect, useState } from "react";

export const SessionContext = createContext<SessionContextType>({
  token: "",
  isAuthenticated: false,
  setToken: () => {},
  verifyToken: async () => {},
  logout: () => {},
  courses: [],
  fetchWithToken: async function () {
    console.warn("fetchWithToken called without implementation.");
    return undefined;
  },
  setNeedRefresh: () => {},
});

export const SessionContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [needRefresh, setNeedRefresh] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [courses, setCourses] = useState<CoursesType[]>([]);
  console.log(isLoading)
  const verifyToken = async (currentToken: string): Promise<void> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );
      if (response.status === 200) {
        setToken(currentToken);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("authToken");
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("authToken");
    } finally {
      setIsLoading(false)
    }
  };

  const logout = (): void => {
    localStorage.removeItem("authToken");
    setToken("");
    setIsAuthenticated(false);
  };

  const fetchWithToken = async (
    endpoint: string,
    method = "GET",
    payload?: unknown
  ) => {
    if (token) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}${endpoint}`,
          {
            method,
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        console.log(response.status);
        if (response.ok && response.status !== 204) {
          return response.json();
        }
      } catch (error) {
        console.error(`Error fetching data`, error);
      }
    }
  };
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("fetched", data);
        setCourses(data);
      }
    } catch (error) {
      console.error("Error getting courses", error);
    }
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
      setIsAuthenticated(true);
    }
  }, [token]);

  useEffect(() => {
    fetchCourses();
    const localToken = localStorage.getItem("authToken");
    if (localToken) {
      verifyToken(localToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if(needRefresh && !isLoading) {
      fetchCourses();
      setNeedRefresh(false);
    }
  }, [needRefresh, isLoading])

  const contextValue: SessionContextType = {
    token,
    isAuthenticated,
    setToken,
    verifyToken,
    logout,
    courses,
    fetchWithToken,
    setNeedRefresh,
  };
  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
