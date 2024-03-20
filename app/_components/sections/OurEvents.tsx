import { Container } from "@/components/Container";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import React from "react";

const atma = Atma({ subsets: ["latin"], weight: "700" });

export const OurEvents = () => {
  return (
    <>
      <p
        className={cn(
          "text-2xl max-w-[550px] break-words mt-20 border-b-2 border-primaryRed mx-auto w-fit text-center",
          atma.className
        )}
      >
        Our events
      </p>
      <div className="rounded-sm p-5 mt-10 flex items-center gap-20">
        <video
          src="/main-video.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="object-cover w-1/2 h-full min-h-[90vh] md:h-[60vh] max-h-[100vh] brightness-75 rounded-full"
        ></video>
        <div className="flex-1">
          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <div className="flex flex-1 gap-5">
                <div className="self-start bg-primaryRed rounded-full px-5 py-3">
                  1
                </div>
                <div>
                  <p className={cn(atma.className, "text-xl mb-2.5")}>
                    Free time activities
                  </p>
                  <p>
                    It is the time when children can make their plans, express
                    themselves freely, socialize, experiment, and work with the
                    teacher as a guide. The activities meet the needs of our
                    children to explore, plan, finish what they started,
                    self-motivate themselves and socialize under the supervision
                    of teachers.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-5">
                <div className="self-start bg-primaryRed rounded-full px-5 py-3">
                  2
                </div>
                <div>
                  <p className={cn(atma.className, "text-xl mb-2.5")}>
                    Art Events
                  </p>
                  <p>
                    The art events consist of activities that contribute to the
                    development of expressive language, integration with nature,
                    and the skills..
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-1 gap-5">
                <div className="self-start bg-primaryRed rounded-full px-5 py-3">
                  3
                </div>
                <div>
                  <p className={cn(atma.className, "text-xl mb-2.5")}>
                    Language Activities
                  </p>
                  <p>
                    Sharing times are activities that include poetry, finger
                    games, nursery rhymes, riddles, storytelling, story
                    completion, and story creation..
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-5">
                <div className="self-start bg-primaryRed rounded-full px-5 py-3">
                  4
                </div>
                <div>
                  <p className={cn(atma.className, "text-xl mb-2.5")}>
                    Dramatic Events
                  </p>
                  <p>
                    Dramatic activities include pretend-play, movement
                    exercises, pantomime, and dramatization activities. Dramatic
                    activities improve children&apos;s..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
