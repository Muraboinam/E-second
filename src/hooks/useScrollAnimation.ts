import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  duration?: number;
  ease?: string;
  from?: object;
  to?: object;
  pin?: boolean;
  anticipatePin?: boolean;
  toggleActions?: string;
  toggleClass?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useScrollAnimation(options: ScrollAnimationOptions): void {
  useEffect(() => {
    const {
      trigger,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      markers = false,
      duration = 1,
      ease = 'power3.out',
      from,
      to,
      pin = false,
      anticipatePin = false,
      toggleActions = 'play none none none',
      toggleClass,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    } = options;

    const triggerElement = document.querySelector(trigger);
    
    if (!triggerElement) {
      console.warn(`Trigger element not found: ${trigger}`);
      return;
    }

    const scrollTriggerOptions: any = {
      trigger: triggerElement,
      start,
      end,
      scrub,
      markers,
      pin,
      anticipatePin,
      toggleActions,
      toggleClass,
      onEnter,
      onLeave,
      onEnterBack,
      onLeaveBack,
    };

    if (from && to) {
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerOptions,
      });

      tl.fromTo(
        triggerElement,
        { ...from, duration, ease },
        { ...to, duration, ease }
      );
    } else {
      ScrollTrigger.create(scrollTriggerOptions);
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [options]);
}