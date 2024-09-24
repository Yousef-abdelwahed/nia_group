import { icons } from "lucide-react";
interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number | string;
  classes?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size, classes }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return <LucideIcon color={color} size={size} className={classes} />;
};

export default Icon;
