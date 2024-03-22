import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const atma = Atma({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

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
      <div className="flex flex-col">
        <div className="rounded-sm p-5 mt-10 flex flex-col lg:flex-row md:items-center gap-20">
          <video
            src="/ad3.mp4"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="object-cover w-full lg:w-1/2 h-full min-h-[90vh] md:h-[60vh] max-h-[100vh] brightness-75 rounded-full"
          ></video>
          <div className="flex-1">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-1 gap-5">
                  <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                    1
                  </div>
                  <div>
                    <p className={cn(atma.className, "text-xl mb-2.5")}>
                      Free time activities
                    </p>
                    <p
                      className={cn(
                        josefin.className,
                        "text-[#1b0238] tracking-wider"
                      )}
                    >
                      {" "}
                      It is the time when children can make their plans, express
                      themselves freely, socialize, experiment, and work with
                      the teacher as a guide. The activities meet the needs of
                      our children to explore, plan, finish what they started,
                      self-motivate themselves and socialize under the
                      supervision of teachers.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-5">
                  <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                    2
                  </div>
                  <div>
                    <p className={cn(atma.className, "text-xl mb-2.5")}>
                      Art Events
                    </p>
                    <p
                      className={cn(
                        josefin.className,
                        "text-[#1b0238] tracking-wider"
                      )}
                    >
                      {" "}
                      The art events consist of activities that contribute to
                      the development of expressive language, integration with
                      nature, and the skills..
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-1 gap-5">
                  <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                    3
                  </div>
                  <div>
                    <p className={cn(atma.className, "text-xl mb-2.5")}>
                      Language Activities
                    </p>
                    <p
                      className={cn(
                        josefin.className,
                        "text-[#1b0238] tracking-wider"
                      )}
                    >
                      {" "}
                      Sharing times are activities that include poetry, finger
                      games, nursery rhymes, riddles, storytelling, story
                      completion, and story creation..
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-5">
                  <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                    4
                  </div>
                  <div>
                    <p className={cn(atma.className, "text-xl mb-2.5")}>
                      Dramatic Events
                    </p>
                    <p
                      className={cn(
                        josefin.className,
                        "text-[#1b0238] tracking-wider"
                      )}
                    >
                      Dramatic activities include pretend-play, movement
                      exercises, pantomime, and dramatization activities.
                      Dramatic activities improve children&apos;s..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row p-5 gap-10">
          <div className="flex flex-1 gap-5">
            <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
              5
            </div>
            <div>
              <p className={cn(atma.className, "text-xl mb-2.5")}>
                Game Events
              </p>
              <p
                className={cn(
                  josefin.className,
                  "text-[#1b0238] tracking-wider"
                )}
              >
                {" "}
                Game events include playing with natural materials such as sand,
                clay, water, and mud, covering imaginative games that require
                creative thinking.
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-1 gap-5">
            <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
              6
            </div>
            <div>
              <p className={cn(atma.className, "text-xl mb-2.5")}>
                Music Events
              </p>
              <p
                className={cn(
                  josefin.className,
                  "text-[#1b0238] tracking-wider"
                )}
              >
                {" "}
                The music events consist of activities including listening to
                sound and discrimination, tempo exercises, rhythm tools,
                singing, creative dance and..
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-1 gap-5">
            <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
              7
            </div>
            <div>
              <p className={cn(atma.className, "text-xl mb-2.5")}>
                Science Activities
              </p>
              <p
                className={cn(
                  josefin.className,
                  "text-[#1b0238] tracking-wider"
                )}
              >
                {" "}
                The science activities consist of activities that support
                exploration, curiosity, and scientific process skills, including
                physical science, mathematics,.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-5">
            <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
              8
            </div>
            <div>
              <p className={cn(atma.className, "text-xl mb-2.5")}>
                Literacy Preparation Studies
              </p>
              <p
                className={cn(
                  josefin.className,
                  "text-[#1b0238] tracking-wider"
                )}
              >
                {" "}
                Literacy preparation activities are activities carried out to
                facilitate the transition of children to primary school and to
                increase their readiness level..
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
