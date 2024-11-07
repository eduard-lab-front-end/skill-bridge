export interface UserType {
  id: string;
}

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
  setNeedRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser?: UserType
}
export interface TeacherType {
  id: string;
  role: string;
  userName: string;
}
export interface CoursesType {
  id: string;
  title: string;
  image: string;
  createdBy: string;
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
  teacherId: string;
  teacher?: TeacherType;
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
