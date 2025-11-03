import { allBlogs } from "@/data/blogs";
import { allPortfolios } from "@/data/portfolio";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";

// Types based on your data shape
type Blog = (typeof allBlogs)[number];
type Portfolio = (typeof allPortfolios)[number];

interface ContentContextType {
  currentBlog: Blog;
  setCurrentBlog: React.Dispatch<React.SetStateAction<Blog>>;
  currentPortfolio: Portfolio;
  setCurrentPortfolio: React.Dispatch<React.SetStateAction<Portfolio>>;
  currentModal: string;
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
  children: ReactNode;
}

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const { pathname } = useLocation();

  // Lazy initialization improves performance slightly
  const [currentBlog, setCurrentBlog] = useState<Blog>(() => allBlogs[0]);
  const [currentPortfolio, setCurrentPortfolio] = useState<Portfolio>(
    () => allPortfolios[0]
  );
  const [currentModal, setCurrentModal] = useState<string>("");

  // Add/remove class when modal changes
  useEffect(() => {
    document.body.classList.toggle(
      "sidemenu-active",
      currentModal === "sidebar"
    );
  }, [currentModal]);

  // Close modal on route change
  useEffect(() => {
    setCurrentModal("");
  }, [pathname]);

  // useMemo for stable context object
  const value = useMemo(
    () => ({
      currentBlog,
      setCurrentBlog,
      currentPortfolio,
      setCurrentPortfolio,
      currentModal,
      setCurrentModal,
    }),
    [currentBlog, currentPortfolio, currentModal]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContent = (): ContentContextType => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
