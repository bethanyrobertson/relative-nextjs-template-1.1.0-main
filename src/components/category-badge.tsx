import React from 'react';

import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface CategoryBadgeProps {
  label: string;
  icon: LucideIcon;
}

export default function CategoryBadge({ label, icon }: CategoryBadgeProps) {
  return (
    <Badge
      variant="default"
      className="[&>svg]:text-inherit flex items-center tracking-widest gap-1 rounded-full py-2 text-black ps-4 pe-4 text-l font-bold font-mono [&>svg]:size-4"
    >
      {React.createElement(icon, { className: "me-1" })}
      {label}
    </Badge>
  );
}
