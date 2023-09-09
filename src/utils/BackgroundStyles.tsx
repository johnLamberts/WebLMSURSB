import { Theme, alpha } from "@mui/material";

function getDirection(value = "bottom") {
  return {
    top: "to top",
    right: "to right",
    bottom: "to bottom",
    left: "to left",
  }[value];
}

export default function BackgroundStyles(theme: Theme) {
  return {
    bgBlur: (props: Record<string, any>) => {
      const color =
        props?.color || theme?.palette.background.default || `#000000`;

      // const blue = props?.blur || 6;
      const opacity = props?.opacity || 0.8;

      return {
        backDropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blue(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      };
    },

    bgGradient: (props: Record<string, any>) => {
      const direction = getDirection(props?.direction);
      const startColor = props?.startColor || `${alpha("#000000", 0)} 0%`;
      const endColor = props?.endColor || `#000000 75%`;

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
      };
    },

    bgImage: (props: Record<string, any>) => {
      const url = props?.url || "/assets/bg_gradient.jpg";
      const direction = getDirection(props?.direction);
      const startColor =
        props?.startColor || alpha(theme?.palette.grey[900] || "#000000", 0.88);
      const endColor =
        props?.endColor || alpha(theme?.palette.grey[900] || "#000000", 0.88);

      return {
        background: `linear-gradient(${direction}, ${startColor}, ${endColor}), url(${url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      };
    },
  };
}
