"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle, ThemeToggleDropdown } from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sun,
  Moon,
  Monitor,
  Palette,
  Eye,
  Settings,
  Code,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeDemo({ className }: { className?: string }) {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className={cn("space-y-8 p-8 rounded-xl border bg-card", className)}>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Palette className="size-6 text-primary" />
          <h2 className="text-2xl font-bold">Theme System Demo</h2>
        </div>
        <p className="text-muted-foreground">
          Current theme: <strong>{theme}</strong> | Resolved:{" "}
          <strong>{resolvedTheme}</strong>
        </p>
      </div>

      {/* Theme Controls */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Settings className="size-5" />
          Theme Controls
        </h3>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Icon Toggle</p>
            <ThemeToggle />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Button with Label</p>
            <ThemeToggle size="default" showLabels variant="outline" />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Dropdown Selector</p>
            <ThemeToggleDropdown />
          </div>
        </div>
      </div>

      {/* UI Components Preview */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Eye className="size-5" />
          UI Components Preview
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Buttons */}
          <div className="space-y-3">
            <h4 className="font-medium">Buttons</h4>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive" size="sm">
                Destructive
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            <h4 className="font-medium">Cards & Surfaces</h4>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">Muted background</p>
            </div>
            <div className="p-4 bg-accent rounded-lg">
              <p className="text-sm text-accent-foreground">
                Accent background
              </p>
            </div>
          </div>

          {/* Text Variants */}
          <div className="space-y-3">
            <h4 className="font-medium">Text Variants</h4>
            <div className="space-y-1">
              <p className="text-foreground">Primary text</p>
              <p className="text-muted-foreground">Muted text</p>
              <p className="text-primary">Primary color</p>
              <p className="text-destructive">Destructive text</p>
            </div>
          </div>

          {/* Icons */}
          <div className="space-y-3">
            <h4 className="font-medium">Icons</h4>
            <div className="flex gap-3">
              <Sun className="size-6 text-primary" />
              <Moon className="size-6 text-secondary-foreground" />
              <Monitor className="size-6 text-muted-foreground" />
              <Code className="size-6 text-accent-foreground" />
              <Heart className="size-6 text-destructive" />
            </div>
          </div>
        </div>
      </div>

      {/* Form Elements */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form Elements</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Text Input</label>
            <input
              type="text"
              placeholder="Type something..."
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Select</label>
            <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
