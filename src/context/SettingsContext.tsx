import { ChangeEvent, createContext, useCallback, useEffect } from "react";
import { ConfigFile } from "../config";
import getColorPresets, {
  colorPresets,
  defaultPreset,
} from "../utils/colorPreset";
import useLocalStorage from "../hooks/useLocalStorage";
import { ChildrenProps } from "../@interface/ChildProps.interface";

const initialState = {
  ...ConfigFile.defaultSettings,

  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  //Direction
  onToggleDirection: () => {},
  onChangeDirection: () => {},
  onChangeDirectionByLang: (_val: string) => {},

  //Layout
  onToggleLayout: () => {},
  onChangeLayout: () => {},

  //Contrast
  onToggleContrast: () => {},
  onChangeContrast: () => {},

  //Color
  onChangeColor: () => {},
  setColor: defaultPreset,
  colorOption: [],

  //Strect
  onToggleStretch: () => {},

  //Reset
  onResetSetting: () => {},
};

const SettingsContext = createContext(initialState);

function SettingsProvider({ children }: ChildrenProps) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
    themeContrast: initialState.themeContrast,
    themeDirection: initialState.themeDirection,
    themeColorPresets: initialState.themeColorPresets,
  });

  const isEnglish = localStorage.getItem("i18nextLng") === "en";

  //Direction

  const onChangeDirectionByLang = useCallback(
    (lang: string) => {
      setSettings({
        ...settings,
        themeDirection: lang === "en" ? "rtl" : "ltr",
      });
    },
    [setSettings, settings]
  );

  //End of Direction

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const onChangeDirectionByLang = (lang: string) => {
  //   setSettings({
  //     ...settings,
  //     themeDirection: lang === "ar" ? "rtl" : "ltr",
  //   });
  // };

  useEffect(() => {
    if (isEnglish) {
      onChangeDirectionByLang("en");
    }
  }, [isEnglish, onChangeDirectionByLang]);

  // Mode
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeMode = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  //Direction

  const onToggleDirection = () => {
    setSettings({
      ...settings,
      themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl",
    });
  };

  const onChangeDirection = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  //Layout

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout:
        settings.themeLayout === "vertical" ? "horizontal" : "vertical",
    });
  };
  const onChangeLayout = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeLayout: event.target.value,
    });
  };

  // Contrast

  const onToggleContrast = () => {
    setSettings({
      ...settings,
      themeContrast: settings.themeContrast === "default" ? "bold" : "default",
    });
  };

  const onChangeContrast = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeContrast: event.target.value,
    });
  };

  // Color

  const onChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  // Stretch

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  // Reset

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
      themeContrast: initialState.themeContrast,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,

        onToggleMode,
        onChangeMode,

        onToggleDirection,
        onChangeDirection,
        onChangeDirectionByLang,

        onChangeLayout,
        onToggleLayout,

        onChangeContrast,
        onToggleContrast,

        onToggleStretch,

        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color: Record<string, unknown>) => ({
          name: color.name,
          value: color.main,
        })),

        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };
