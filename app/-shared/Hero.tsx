"use client";
import React, { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight, Loader, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { suggestions } from "@/data/constant";
import { Value } from "@radix-ui/react-select";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { randomUUID } from "crypto";
import axios from "axios";

const hero = () => {
  const [userInput, setUserInput] = useState<string>();
  const [device, setDevice] = useState<string>("website");
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onCreateProject = async () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    // create new project // Step 2: Check input diya hai ya nahi
    if (!userInput) {
      return;
    }
    setLoading(true);
    // Unique ID banao
    const projectId = crypto.randomUUID();
    // API call
    const result = await axios.post("/api/project", {
      userInput: userInput,
      device: device,
      projectId: projectId,
    });
    //  Loading stop
    console.log(result.data);
    setLoading(false);

    // Nacigate to  project Route
     router.push('/project/' + projectId );


  };

  return (
    <div className="mt-20 p-10 md:px-24 lg:px-40 xl:px-60">
      <div className=" mb-5 group relative max-w-sm mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
        <span
          className={cn(
            "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
            WebkitClipPath: "padding-box",
          }}
        />
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
        <AnimatedGradientText className="text-sm font-medium">
          Introducing Magic UI
        </AnimatedGradientText>
        <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
      <h1 className="text-5xl font-bold text-center  ">
        Design High Quality{" "}
        <span className="text-primary">Website and Mobile App </span> Designs{" "}
      </h1>
      <p className="text-center text-red text-lg mt-5 font-bold">
        Imagine your idea and turn into reality{" "}
      </p>
      <div className="flex w-full gap-6 justify-center mt-5 ">
        <InputGroup className=" bg-white z-10 max-w-xl rounded-2xl">
          <InputGroupTextarea
            data-slot="input-group-control"
            className="flex field-sizing-content min-h-26 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
            placeholder="Enter what design you want to create"
            value={userInput}
            onChange={(event) => setUserInput(event.target?.value)}
          />
          <InputGroupAddon align="block-end">
            <Select
              defaultValue="Website"
              onValueChange={(value) => setDevice(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Website" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Website">Website</SelectItem>
                <SelectItem value="Mobile">Mobile</SelectItem>
              </SelectContent>
            </Select>
            <InputGroupButton
              className="ml-auto"
              disabled={loading}
              size="sm"
              variant="default"
              onClick={() => onCreateProject()}
            >
              {loading ? <Loader className="animate-spin" /> : <Send />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex gap-5 mt-6 ">
        {suggestions.map((suggestion, index) => {
          return (
            <div
              key={index}
              className=" p-2 border flex-column rounded-2xl bg-white z-10 cursor-pointer"
              onClick={() => setUserInput(suggestion?.description)}
            >
              <h2 className="text-center text-sm">{suggestion?.icon}</h2>
              <h2 className="text-center line-clamp-2 text-sm">
                {suggestion?.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default hero;
