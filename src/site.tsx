import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { parseHash, type PageId } from "./types";

type Route = { page: PageId; section?: string };

type SiteContextValue = {
  page: PageId;
  section?: string;
  navigate: (page: PageId, section?: string) => void;
  enquireOpen: boolean;
  enquireTopic: string;
  openEnquire: (topic?: string) => void;
  closeEnquire: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return value;
}

function readRoute(): Route {
  return parseHash(window.location.hash);
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(readRoute);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [enquireTopic, setEnquireTopic] = useState("Admission enquiry");

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#about");
    }
    const onHash = () => {
      setRoute(readRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!route.section) return;
    const timer = window.setTimeout(() => {
      document.getElementById(route.section!)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [route.page, route.section]);

  const navigate = useCallback((page: PageId, section?: string) => {
    const next = section ? `${page}/${section}` : page;
    const current = window.location.hash.replace(/^#/, "");
    if (current === next) {
      if (section) {
        document.getElementById(section)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    window.location.hash = next;
  }, []);

  const openEnquire = useCallback((topic = "Admission enquiry") => {
    setEnquireTopic(topic);
    setEnquireOpen(true);
  }, []);

  const closeEnquire = useCallback(() => setEnquireOpen(false), []);

  useEffect(() => {
    if (!enquireOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEnquireOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [enquireOpen]);

  const value = useMemo(
    () => ({
      page: route.page,
      section: route.section,
      navigate,
      enquireOpen,
      enquireTopic,
      openEnquire,
      closeEnquire,
    }),
    [route.page, route.section, navigate, enquireOpen, enquireTopic, openEnquire, closeEnquire],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
