"use client";

/**
 * Demo page showcasing entrance animations
 *
 * This page demonstrates all the different animation components
 * and presets available in the entrance animation system.
 */

import {
  MotionWrapper,
  HeroEntrance,
  StaggerContainer,
  SlideUp,
  FadeIn,
  ScaleIn,
  useEntranceOptional,
} from "@/components/EntranceProvider";
import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Star, Heart, Sparkles } from "lucide-react";

function AnimationControls() {
  const entranceContext = useEntranceOptional();

  // Don't render controls if no context (SSR or outside provider)
  if (!entranceContext) {
    return null;
  }

  const { shouldAnimate, toggleAnimations, state } = entranceContext;

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border rounded-lg p-4 shadow-lg">
      <div className="text-sm font-medium mb-2">Animation Controls</div>
      <div className="space-y-2 text-xs">
        <div>Status: {shouldAnimate() ? "✅ Enabled" : "❌ Disabled"}</div>
        <div>Reduced Motion: {state.prefersReducedMotion ? "Yes" : "No"}</div>
        <div>Mobile: {state.isMobile ? "Yes" : "No"}</div>
        <Button size="sm" onClick={toggleAnimations} className="w-full">
          {shouldAnimate() ? "Disable" : "Enable"} Animations
        </Button>
      </div>
    </div>
  );
}

export default function EntranceDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <AnimationControls />

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer stagger={0.15} delay={0.3}>
            <HeroEntrance translateY={40}>
              <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                ✨ Entrance Animations Demo
              </div>
            </HeroEntrance>

            <HeroEntrance translateY={50} delay={0.1}>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Beautiful Entrance
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Animations
                </span>
              </h1>
            </HeroEntrance>

            <HeroEntrance translateY={40} delay={0.15}>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Showcase of stunning entrance animations built with Framer
                Motion, featuring viewport detection, stagger effects, and
                reduced motion support.
              </p>
            </HeroEntrance>

            <HeroEntrance translateY={30} delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </HeroEntrance>
          </StaggerContainer>
        </div>
      </section>

      {/* Animation Presets Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <SlideUp className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Animation Presets
            </h2>
            <p className="text-lg text-gray-600">
              Different animation styles for various use cases
            </p>
          </SlideUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Subtle Preset */}
            <MotionWrapper preset="subtle" delay={0.1}>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  Subtle
                </h3>
                <p className="text-green-700 text-sm mb-4">
                  Gentle entrance perfect for list items and frequent
                  interactions.
                </p>
                <div className="text-xs text-green-600 font-mono">
                  translateY: 8px | duration: 0.4s
                </div>
              </div>
            </MotionWrapper>

            {/* Vivid Preset */}
            <MotionWrapper preset="vivid" delay={0.2}>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Vivid
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Balanced animation for cards, features, and call-to-actions.
                </p>
                <div className="text-xs text-blue-600 font-mono">
                  translateY: 16px | duration: 0.6s
                </div>
              </div>
            </MotionWrapper>

            {/* Hero Preset */}
            <MotionWrapper preset="hero" delay={0.3}>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  Hero
                </h3>
                <p className="text-purple-700 text-sm mb-4">
                  Dramatic entrance for hero sections and important content.
                </p>
                <div className="text-xs text-purple-600 font-mono">
                  translateY: 24px | duration: 0.8s
                </div>
              </div>
            </MotionWrapper>

            {/* Fade Preset */}
            <FadeIn delay={0.4}>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fade
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Simple fade-in for backgrounds and subtle content.
                </p>
                <div className="text-xs text-gray-600 font-mono">
                  opacity: 0 → 1 | no translation
                </div>
              </div>
            </FadeIn>

            {/* Scale Preset */}
            <ScaleIn delay={0.5}>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-900 mb-2">
                  Scale
                </h3>
                <p className="text-orange-700 text-sm mb-4">
                  Scale animation for images, modals, and popup content.
                </p>
                <div className="text-xs text-orange-600 font-mono">
                  scale: 0.9 → 1.0 | with fade
                </div>
              </div>
            </ScaleIn>

            {/* Custom Animation */}
            <MotionWrapper
              preset="vivid"
              translateY={60}
              scale={0.8}
              duration={1.2}
              delay={0.6}
            >
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-pink-900 mb-2">
                  Custom
                </h3>
                <p className="text-pink-700 text-sm mb-4">
                  Fully customizable with custom transforms and timing.
                </p>
                <div className="text-xs text-pink-600 font-mono">
                  translateY: 60px | scale: 0.8 | duration: 1.2s
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Stagger Effects Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SlideUp className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stagger Effects
            </h2>
            <p className="text-lg text-gray-600">
              Beautiful cascading animations for groups of elements
            </p>
          </SlideUp>

          {/* Grid Stagger */}
          <div className="mb-16">
            <SlideUp className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Grid Stagger
              </h3>
              <p className="text-gray-600">Cards appearing in sequence</p>
            </SlideUp>

            <StaggerContainer
              className="grid md:grid-cols-3 gap-6"
              stagger={0.1}
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <SlideUp key={i}>
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-600 font-semibold">
                        {i + 1}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Item {i + 1}
                    </h4>
                    <p className="text-sm text-gray-600">
                      This card animates with a {i * 100}ms delay from the
                      previous one.
                    </p>
                  </div>
                </SlideUp>
              ))}
            </StaggerContainer>
          </div>

          {/* List Stagger */}
          <div>
            <SlideUp className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                List Stagger
              </h3>
              <p className="text-gray-600">
                List items with faster stagger timing
              </p>
            </SlideUp>

            <StaggerContainer className="space-y-4" stagger={0.05}>
              {[
                "Fast, smooth animations that respect user preferences",
                "Multiple presets for different use cases and contexts",
                "Seamless integration with smooth scroll libraries",
                "Viewport-triggered animations with configurable thresholds",
                "Comprehensive accessibility support and reduced motion compliance",
                "Runtime animation controls for development and debugging",
              ].map((text, i) => (
                <SlideUp key={i}>
                  <div className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm border">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-900">{text}</span>
                  </div>
                </SlideUp>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Add Entrance Animations?
            </h2>
            <p className="text-gray-400 mb-8">
              Check out the documentation to learn how to integrate these
              animations into your project.
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </FadeIn>
      </footer>
    </div>
  );
}
