"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type CountriesOpenContextValue = {
  open: boolean;
  toggle: () => void;
  takeScrollRequest: () => boolean;
};

const CountriesOpenContext = createContext<CountriesOpenContextValue | null>(
  null
);

function isCountriesHash(href: string) {
  return href === "#countries" || href.endsWith("/#countries");
}

export function CountriesOpenProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const scrollPending = useRef(false);

  const requestOpen = useCallback(() => {
    scrollPending.current = true;
    setOpen(true);
  }, []);

  const toggle = useCallback(() => {
    setOpen((current) => {
      if (!current) scrollPending.current = true;
      return !current;
    });
  }, []);

  const takeScrollRequest = useCallback(() => {
    if (!scrollPending.current) return false;
    scrollPending.current = false;
    return true;
  }, []);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#countries") requestOpen();
    };

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (isCountriesHash(href)) requestOpen();
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      document.removeEventListener("click", onClick);
    };
  }, [requestOpen]);

  return (
    <CountriesOpenContext.Provider value={{ open, toggle, takeScrollRequest }}>
      {children}
    </CountriesOpenContext.Provider>
  );
}

export function useCountriesOpen() {
  const value = useContext(CountriesOpenContext);
  if (!value) {
    throw new Error("useCountriesOpen must be used within CountriesOpenProvider");
  }
  return value;
}
