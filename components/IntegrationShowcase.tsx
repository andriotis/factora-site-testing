"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Shield, Banknote, Bot, Mail } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

interface Integration {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  color: string;
}

function useIntegrations(): Integration[] {
  const { t } = useI18n();
  return useMemo(
    () => [
      {
        id: "credit-scoring",
        name: t.integrations.credit_scoring_name,
        icon: <Shield className="w-6 h-6" />,
        description: t.integrations.credit_scoring_desc,
        benefits: t.integrations.credit_scoring_benefits,
        color: "from-blue-500 to-blue-600",
      },
      {
        id: "get-paid-faster",
        name: t.integrations.get_paid_name,
        icon: <Banknote className="w-6 h-6" />,
        description: t.integrations.get_paid_desc,
        benefits: t.integrations.get_paid_benefits,
        color: "from-green-500 to-green-600",
      },
      {
        id: "ai-copilot",
        name: t.integrations.copilot_name,
        icon: <Bot className="w-6 h-6" />,
        description: t.integrations.copilot_desc,
        benefits: t.integrations.copilot_benefits,
        color: "from-purple-500 to-purple-600",
      },
      {
        id: "collections",
        name: t.integrations.collections_name,
        icon: <Mail className="w-6 h-6" />,
        description: t.integrations.collections_desc,
        benefits: t.integrations.collections_benefits,
        color: "from-orange-500 to-orange-600",
      },
    ],
    [t]
  );
}

const IntegrationIcon = ({
  integration,
  className,
  onHover,
  onMouseLeave,
  isHovered,
}: {
  integration: Integration;
  className?: string;
  onHover: (integration: Integration) => void;
  onMouseLeave: () => void;
  isHovered: boolean;
}) => {
  return (
    <div
      className={cn(
        "z-10 flex size-12 sm:size-14 md:size-16 items-center justify-center rounded-xl border-2 bg-white p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-xl touch-manipulation",
        isHovered && "ring-4 ring-[#2F9A8A]/30 scale-110",
        className
      )}
      onMouseEnter={() => onHover(integration)}
      onMouseLeave={onMouseLeave}
      onClick={() => onHover(integration)}
    >
      <div
        className={cn(
          "text-gray-600 transition-colors w-6 h-6 sm:w-6 sm:h-6",
          isHovered && "text-[#2F9A8A]"
        )}
      >
        {integration.icon}
      </div>
    </div>
  );
};

export default function IntegrationShowcase() {
  const integrations = useIntegrations();
  const [selectedIntegration, setSelectedIntegration] =
    useState<Integration | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const CYCLE_DURATION = 2000; // 2 seconds per integration

  // Auto-cycling effect
  useEffect(() => {
    if (!isUserInteracting) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % integrations.length);
      }, CYCLE_DURATION);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isUserInteracting, integrations.length]);

  // Update selected integration based on current index
  useEffect(() => {
    if (!isUserInteracting) {
      setSelectedIntegration(integrations[currentIndex]);
    }
  }, [currentIndex, isUserInteracting, integrations]);

  // Handle user interaction
  const handleIntegrationHover = (integration: Integration) => {
    setIsUserInteracting(true);
    setSelectedIntegration(integration);

    // Find the index of the hovered integration
    const hoveredIndex = integrations.findIndex(
      (integ) => integ.id === integration.id
    );
    setCurrentIndex(hoveredIndex);
  };

  // Resume auto-cycling after a delay when user stops interacting
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000); // Resume after 2 seconds of no interaction
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[520px]">
        {/* Center - Integration Showcase (Main focus) */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
          {/* Center Factora Logo */}
          <div
            className={cn(
              "z-10 hidden sm:flex size-16 sm:size-20 md:size-24 items-center justify-center rounded-2xl border-4 bg-white p-2 sm:p-3 md:p-4 shadow-2xl transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              selectedIntegration
                ? "border-[#2F9A8A] shadow-[#2F9A8A]/30 shadow-2xl scale-110"
                : "border-[#2F9A8A]"
            )}
          >
            <Image
              src="/logo.png"
              alt="Factora"
              width={80}
              height={80}
              className={cn(
                "w-full h-full object-contain transition-all duration-300",
                selectedIntegration && "animate-pulse"
              )}
              priority
            />

            {/* Data reception indicator */}
            {selectedIntegration && (
              <div className="absolute inset-0 rounded-2xl border-2 border-[#2F9A8A] animate-ping opacity-20"></div>
            )}
          </div>

          {/* Mobile Layout - 3x3 grid with centered logo */}
          <div className="block sm:hidden">
            {/* 3x3 grid: icons at top/left/right/bottom; logo in center */}
            <div className="mt-8 mb-6 grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-y-8">
              {/* Top (row 1, col 2) - AI copilot */}
              <div className="col-start-1 row-start-1">
                <IntegrationIcon
                  integration={integrations[2]}
                  onHover={handleIntegrationHover}
                  onMouseLeave={handleMouseLeave}
                  isHovered={selectedIntegration?.id === integrations[2].id}
                />
              </div>

              {/* Left (row 2, col 1) - Credit scoring */}
              <div className="col-start-1 row-start-3">
                <IntegrationIcon
                  integration={integrations[0]}
                  onHover={handleIntegrationHover}
                  onMouseLeave={handleMouseLeave}
                  isHovered={selectedIntegration?.id === integrations[0].id}
                />
              </div>

              {/* Center Logo (row 2, col 2) */}
              <div className="col-start-2 row-start-2">
                <div
                  className={cn(
                    "relative flex size-16 items-center justify-center rounded-2xl border-4 bg-white p-2 shadow-2xl transition-all duration-500",
                    selectedIntegration
                      ? "border-[#2F9A8A] shadow-[#2F9A8A]/30 scale-110"
                      : "border-[#2F9A8A]"
                  )}
                >
                  <Image
                    src="/logo.png"
                    alt="Factora"
                    width={80}
                    height={80}
                    className={cn(
                      "w-full h-full object-contain transition-all duration-300",
                      selectedIntegration && "animate-pulse"
                    )}
                    priority
                  />
                  {selectedIntegration && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-[#2F9A8A] animate-ping opacity-20"></div>
                  )}
                </div>
              </div>

              {/* Right (row 2, col 3) - Get paid faster */}
              <div className="col-start-3 row-start-1">
                <IntegrationIcon
                  integration={integrations[1]}
                  onHover={handleIntegrationHover}
                  onMouseLeave={handleMouseLeave}
                  isHovered={selectedIntegration?.id === integrations[1].id}
                />
              </div>

              {/* Bottom (row 3, col 2) - Collections */}
              <div className="col-start-3 row-start-3">
                <IntegrationIcon
                  integration={integrations[3]}
                  onHover={handleIntegrationHover}
                  onMouseLeave={handleMouseLeave}
                  isHovered={selectedIntegration?.id === integrations[3].id}
                />
              </div>
            </div>

            {/* Bubble below with same styling as desktop */}
            {selectedIntegration && (
              <div className="px-2 pb-2">
                <div className="w-full max-w-sm mx-auto text-center bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-in-out min-h-[168px] flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {selectedIntegration.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedIntegration.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Layout - Symmetric side icons with detail bubbles */}
          <div className="hidden sm:block overflow-visible">
            {/* Left side icons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col space-y-4 sm:space-y-6 overflow-visible">
              {integrations.slice(0, 2).map((integration) => {
                const isActive = selectedIntegration?.id === integration.id;
                return (
                  <div
                    key={integration.id}
                    className="relative flex items-center"
                  >
                    <IntegrationIcon
                      integration={integration}
                      onHover={handleIntegrationHover}
                      onMouseLeave={handleMouseLeave}
                      isHovered={isActive}
                    />
                    {isActive && (
                      <div className="absolute right-[125%] sm:right-[135%] lg:right-[145%] top-1/2 -translate-y-1/2 w-64 sm:w-72 text-center bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1 animate-in fade-in zoom-in-95">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-[#2F9A8A]">
                          {integration.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {integration.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right side icons */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-4 sm:space-y-6 overflow-visible">
              {integrations.slice(2, 4).map((integration) => {
                const isActive = selectedIntegration?.id === integration.id;
                return (
                  <div
                    key={integration.id}
                    className="relative flex items-center"
                  >
                    <IntegrationIcon
                      integration={integration}
                      onHover={handleIntegrationHover}
                      onMouseLeave={handleMouseLeave}
                      isHovered={isActive}
                    />
                    {isActive && (
                      <div className="absolute left-[125%] sm:left-[135%] lg:left-[145%] top-1/2 -translate-y-1/2 w-64 sm:w-72 text-center bg-gray-50 p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:shadow-2xl hover:border-[#2F9A8A]/30 hover:-translate-y-1 animate-in fade-in zoom-in-95">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-[#2F9A8A]">
                          {integration.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {integration.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Animated Connection Lines - Desktop only */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block overflow-visible">
            {integrations.map((integration, index) => {
              const isLeft = index < 2;
              const iconPosition = isLeft ? 0 : 100;
              const centerX = 50;
              const centerY = 50;
              const iconY = 35 + (index % 2) * 30;
              const isHovered = selectedIntegration?.id === integration.id;

              return (
                <g key={integration.id}>
                  <line
                    x1={`${iconPosition}%`}
                    y1={`${iconY}%`}
                    x2={`${centerX}%`}
                    y2={`${centerY}%`}
                    stroke="#2F9A8A"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity={isHovered ? 1 : 0.3}
                    className="transition-opacity duration-300"
                  />

                  {isHovered && (
                    <>
                      <circle r="3" fill="#2F9A8A" opacity="0.8">
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path={`M ${iconPosition} ${iconY} L ${centerX} ${centerY}`}
                        />
                      </circle>
                      <circle r="2" fill="#2F9A8A" opacity="0.6">
                        <animateMotion
                          dur="2.5s"
                          repeatCount="indefinite"
                          path={`M ${iconPosition} ${iconY} L ${centerX} ${centerY}`}
                        />
                      </circle>
                      <circle r="2.5" fill="#2F9A8A" opacity="0.7">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path={`M ${iconPosition} ${iconY} L ${centerX} ${centerY}`}
                        />
                      </circle>

                      <line
                        x1={`${iconPosition}%`}
                        y1={`${iconY}%`}
                        x2={`${centerX}%`}
                        y2={`${centerY}%`}
                        stroke="#2F9A8A"
                        strokeWidth="3"
                        opacity="0.6"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.3;0.8;0.3"
                          dur="1.5s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
