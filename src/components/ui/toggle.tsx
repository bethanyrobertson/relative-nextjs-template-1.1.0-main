import { useState } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function ToggleSwitch({
  defaultChecked = false,
  onChange,
  disabled = false,
  className
}: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={disabled}
      className={cn(
        "relative inline-flex h-8 w-[74px] items-center transition-all duration-200 ease-in-out focus:outline-none",
        isChecked
          ? "justify-end"
          : "justify-start",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        display: 'flex',
        width: '74px',
        height: '32px',
        padding: '4px',
        alignItems: 'center',
        flexShrink: 0,
        borderRadius: '100px',
        border: '2px solid #02514E',
        backgroundColor: isChecked ? '#02514E' : '#FCFCFC'
      }}
      aria-checked={isChecked}
      role="switch"
    >
      {/* Handle Container */}
      <div className="relative">
        {/* Handle Shape */}
        <div
          className="flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ease-in-out"
          style={{
            backgroundColor: isChecked ? '#FBFAF8' : '#02514E'
          }}
        >
          {/* Icon */}
          {isChecked ? (
            <Check className="h-4 w-4" style={{ color: '#02514E' }} strokeWidth={2.5} />
          ) : (
            <X className="h-4 w-4" style={{ color: '#FCFCFC' }} strokeWidth={2.5} />
          )}
        </div>
      </div>

      {/* Label Text */}
      <span
        className={cn(
          "absolute text-xs font-semibold tracking-wide transition-all duration-200",
          isChecked
            ? "left-3"
            : "right-2"
        )}
        style={{
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '0.5px',
          color: isChecked ? '#FFFFFF' : '#02514E'
        }}
      >
        {isChecked ? "ON" : "OFF"}
      </span>
    </button>
  );
}