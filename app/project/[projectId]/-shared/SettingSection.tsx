"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { THEME_NAME_LIST, THEMES } from "@/data/Themes";
import { index } from "drizzle-orm/gel-core";
import { Camera, Share2, Share2Icon, ShareIcon, Sparkle } from "lucide-react";
import { Share } from "next/font/google";
import React, { useState } from "react";

function SettingSection() {
  const [selectedTheme, setSelectedTheme] = useState("AURORA_INK");
  const [ProjectName, setProjectName] = useState('');
  const [userNewScreenInput, setuserNewScreenInput] = useState <string>();

  return (
    <div className="w-[300px]  h-[90vh] p-5 border-r">
      <h2 className="font-medium text-lg ">Setting</h2>
      <div className="mt-3">
        <h2 className="text-sm mb-1">Project Name </h2>
        <Input placeholder="Project Name"
        onChange={(event)=>setProjectName(event.target.value)}
        />
      </div>
      <div className="mt-3">
        <h2 className="text-sm mb-1">Generate New Screen</h2>
        <Textarea placeholder="Enter prompt to generate screen  using AI"
         onChange={(event)=> setuserNewScreenInput(event.target.value)}
        />
        <Button size={"sm"} className="mt-2 w-full ">
          {" "}
          <Sparkle /> Generate with AI{" "}
        </Button>
      </div>

      <div className="mt-3">
        <h2 className="text-sm mb-1">Themes</h2>
        <div className="h-[200px] overflow-auto">
          <div>
            {THEME_NAME_LIST.map((theme, index) => (
              <div
                className={`p-3 border rounded-2xl mb-2
   ${theme == selectedTheme && "border-primary bg-primary bg-transparent"} `}
                onClick={() => setSelectedTheme(theme)}
                key={index}
              >
                <h2>{theme}</h2>
                <div className="flex gap-3 ">
                  <div
                    className={`h-4 w-4 rounded`}
                    style={{ background: THEMES[theme].primary }}
                  />

                  <div
                    className={`h-4 w-4 rounded`}
                    style={{ background: THEMES[theme].secondary }}
                  />

                  <div
                    className={`h-4 w-4 rounded`}
                    style={{ background: THEMES[theme].accent }}
                  />
                  <div
                    className={`h-4 w-4 rounded `}
                    style={{ background: THEMES[theme].background }}
                  />
                </div>
                    {/* <div className="h-4 w-4 rounded-full"
                    style={{background:`linear-gradient(135deg,
                      ${THEMES[theme].background},
                      ${THEMES[theme].primary},
                      ${THEMES[theme].accent},
                       )`}}
                    /> */}
                     
                
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 ">
        <h2 className="text-sm mb-1 ">Extras</h2>
        <div className="flex gap-3"><Button size={"sm"} className="mt-2  "><Camera /> Screenshort{" "}</Button>
        <Button size={"sm"} className="mt-2  "> <ShareIcon/> Share{" "}</Button></div>
        </div>
    </div>
  );
}

export default SettingSection;
