import { useEffect, useState } from "react";

export default function useLocalStorage(
  key: string,
  defaultVal: Record<string, unknown>
) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue === null ? defaultVal : JSON.parse(storedValue);
  });

  useEffect(() => {
    const eventListener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key)
        setValue(JSON.parse(e.newValue as string));
    };

    window.addEventListener("storage", eventListener);

    return () => {
      window.removeEventListener("storage", eventListener);
    };
  }, [key, defaultVal]);

  const setValueInStorage = (newValue: unknown) => {
    setValue((currVal: unknown) => {
      const result =
        typeof newValue === "function" ? newValue(currVal) : newValue;

      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [value, setValueInStorage];
}
