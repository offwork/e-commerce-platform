import { icons } from 'lucide-react';

export function Icon({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LucideIcon = (icons as any)[name];

  return <LucideIcon color={color} size={size} />;
}

export default Icon;
