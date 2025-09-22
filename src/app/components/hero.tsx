import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { UsedBy } from "./used-by";
import casualOffice from "@/images/casual_office.png";

export function Hero() {
  return (
    <div className="bg-brand-primary">
      <div className="block mx-auto w-full">
        <div className="max-w-[73.5rem] mx-auto w-full block">
          <div className="grid lg:grid-cols-2 justify-start gap-5 items-stretch auto-cols-[1fr]">
            <div className="flex flex-col justify-around items-start px-6 lg:px-0">
              <p className="text-surface uppercase font-semibold text-xs lg:text-sm mt-12 lg:mt-0">
                ServiceNow Consulting
              </p>
              <div className="mt-12 flex flex-col space-y-8 items-start">
                <h1 className="font-brico text-5xl lg:text-7xl text-surface tracking-tight text-balance font-semibold max-w-[642px]">
                  Custom ServiceNow Apps carefully designed to{" "}
                  <span className="text-accent">delight</span>
                </h1>

                <Link
                  href="/about"
                  className="group flex items-center space-x-3 justify-center"
                >
                  <button className="rounded-full bg-surface px-5 py-3 text-brand-primary font-medium text-lg group-hover:bg-accent group-hover:text-black transition duration-700">
                    Get Started
                  </button>
                  <div className="p-3 flex items-center justify-center bg-surface group-hover:bg-accent group-hover:text-black rounded-full transition duration-700">
                    <MoveRight className="size-6" />
                  </div>
                </Link>
                <UsedBy />
              </div>
            </div>
            <figure className="mt-12 px-2.5">
              <Image
                className="rounded-t-3xl object-cover w-full h-auto max-h-[52rem]"
                alt="Man in office thinking deeply about the ultimate custom servicenow build solution for his client"
                src={casualOffice}
              />
            </figure>
            <figcaption className="sr-only">
              Man in office thinking deeply about the ultimate custom servicenow
              build solution for his client
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}
