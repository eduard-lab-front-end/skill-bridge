export interface SessionContextType {
  token: string;
  isAuthenticated: boolean;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  verifyToken: (currentToken: string) => Promise<void>;
  logout: () => void;
  courses: CoursesType[];
  fetchWithToken: <T>(
    endpoint: string,
    method?: "GET" | "POST" | "PUT" | "DELETE",
    payload?: unknown
  ) => Promise<T | undefined>;
}

export interface CoursesType {
  id: string;
  title: string;
  image: string;
  createdBy: string;
  durationWeeks: number;
  studentCount: number;
  price: string;
  discount: string;
  category: string;
  overview: string;
  curriculum: string;
  level: string;
  lessonCount: number;
  quizCount: number;
  faqs: string;
  teacherId: string;
}

export interface UpdateCoursesType {
  id?: string;
  title: string;
  image: string;
  durationWeeks: number;
  studentCount: number;
  price: number;
  discount: number;
  category: string;
  overview: string;
  curriculum: string;
  level: string;
  lessonCount: number;
  quizCount: number;
  faqs: string;
}
