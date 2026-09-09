"use client";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-background">
      <BackgroundRippleEffect />
      <div className="absolute right-5 top-5 z-10">
        <ModeToggle />
      </div>
      <div className="relative z-10 mx-auto mt-52 flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Angel Wangari Ng&apos;ang&apos;a
        </h1>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-2xl font-medium text-muted-foreground md:text-4xl">
          <span>I build</span>
          <ContainerTextFlip
            words={["Prosthetic legs", "Cochlear implants", "Websites", "Agentic code"]}
            className="text-2xl md:text-4xl"
          />
        </div>
        <section
          aria-labelledby="about-heading"
          className="mt-14 max-w-2xl rounded-2xl border border-border/70 bg-background/70 p-6 text-left shadow-sm backdrop-blur md:p-8"
        >
          <h2 id="about-heading" className="text-xl font-semibold text-foreground">
            About me
          </h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            I am a passionate developer dedicated to using technology to create
            inclusive, accessible, and empowering solutions that improve the
            lives of children with disabilities. I am working toward becoming a
            rehabilitation engineer, developing prosthetics, mobility devices,
            and other assistive equipment that helps people live more easily.
          </p>
        </section>
      </div>
    </div>
  );
}
