"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

interface TypeformModalProps {
  children: React.ReactNode;
}

export function TypeformModal({ children }: TypeformModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [formReady, setFormReady] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Load script if not already loaded
      const existingScript = document.querySelector('script[src*="embed.typeform.com"]');
      
      if (existingScript) {
        setScriptLoaded(true);
        // Trigger form initialization after a brief delay
        setTimeout(() => {
          setFormReady(true);
          // Force Typeform to reinitialize if needed
          if (formContainerRef.current && (window as any).tf?.createWidget) {
            (window as any).tf.createWidget('vnJ47vOK', {
              container: formContainerRef.current,
              medium: 'snippet',
              opacity: 100,
              inlineOnMobile: true,
            });
          }
        }, 150);
      } else {
        const script = document.createElement("script");
        script.src = "https://embed.typeform.com/next/embed.js";
        script.async = true;
        script.onload = () => {
          setScriptLoaded(true);
          // Wait for Typeform to be fully ready
          setTimeout(() => {
            setFormReady(true);
          }, 300);
        };
        script.onerror = () => {
          console.error('Failed to load Typeform script');
        };
        document.body.appendChild(script);
      }
    } else {
      // Reset when modal closes
      setFormReady(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[800px] w-full h-[95vh] sm:h-[90vh] max-h-[95vh] sm:max-h-[90vh] p-0 border-0 bg-transparent shadow-none overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">
          Get Early Access
        </DialogTitle>
        <div className="w-full h-full bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-2xl relative flex flex-col">
          <DialogClose className="absolute right-3 top-3 sm:right-4 sm:top-4 z-50 rounded-full bg-white/90 hover:bg-white border border-gray-200 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200">
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {!formReady && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-white z-10">
              <div className="animate-pulse text-gray-400">Loading form...</div>
            </div>
          )}
          <div 
            ref={formContainerRef}
            data-tf-widget="vnJ47vOK"
            data-tf-opacity="100"
            data-tf-inline-on-mobile
            data-tf-medium="snippet"
            className="w-full h-full flex-1"
            style={{ minHeight: '500px', opacity: formReady ? 1 : 0 }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

