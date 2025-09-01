"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost" | "secondary";
  showLabels?: boolean;
};

export function ThemeToggle({
  className,
  size = "icon",
  variant = "ghost",
  showLabels = false,
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor className="transition-all" />;
    }
    return resolvedTheme === "dark" ? (
      <Moon className="transition-all" />
    ) : (
      <Sun className="transition-all" />
    );
  };

  const getLabel = () => {
    if (theme === "system") return "System";
    return resolvedTheme === "dark" ? "Dark" : "Light";
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        "transition-all duration-200",
        showLabels && size !== "icon" && "gap-2",
        className
      )}
      title={`Switch to ${
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
      } theme`}
    >
      {getIcon()}
      {showLabels && size !== "icon" && <span>{getLabel()}</span>}
    </Button>
  );
}

export function ThemeToggleDropdown({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <div className={cn("flex rounded-lg border p-1 bg-background", className)}>
      {themes.map(({ value, label, icon: Icon }) => (
        <Button
          key={value}
          variant={theme === value ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setTheme(value)}
          className={cn(
            "gap-2 transition-all duration-200",
            theme === value && "shadow-sm"
          )}
        >
          <Icon className="size-4" />
          <span className="text-xs">{label}</span>
        </Button>
      ))}
    </div>
  );
}
