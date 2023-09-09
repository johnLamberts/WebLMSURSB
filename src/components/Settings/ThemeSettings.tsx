import ThemeColorPresets from "./ThemeColorPresets";
import ThemeContrast from "./ThemeContrast";
import ThemeLocalization from "./ThemeLocalization";
import ThemeRTL from "./ThemeRTL";
import { ChildrenProps } from "../../@interface/ChildProps.interface";
import SettingsDrawer from "./SettingsDrawer/SettingsDrawer";

// ThemeSettings.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default function ThemeSettings({ children }: ChildrenProps) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeLocalization>
          <ThemeRTL>
            {children}
            <SettingsDrawer />
          </ThemeRTL>
        </ThemeLocalization>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
