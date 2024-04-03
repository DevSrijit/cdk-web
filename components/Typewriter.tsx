"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words } from "@/data/words";

export function TypewriterEffectSmoothDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to awesomeness starts here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          FAQs
        </button>
        <button className="w-40 h-10 rounded-xl bg-[#ff686b] text-white border border-black  text-sm">
          Register
        </button>
      </div>
    </div>
  );
}
