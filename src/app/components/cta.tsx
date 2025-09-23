import Link from "next/link";

export function CallToAction() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto w-full max-w-[1176px] text-center">
          <h2 className="text-[32px] md:text-5xl font-semibold tracking-tight leading-10 md:leading-15 text-balance text-brand-primary font-brico dark:text-black">
            We build ServiceNow solutions that actually work. <br /> And people
            unapologetically enjoy.
          </h2>
          <p className="font-inter mx-auto mt-6 text-lg/8 text-pretty text-brand-primary dark:text-gray-300 max-w-xl">
            We know the shortcuts, the pitfalls, and the moves that make users
            smile and the platform shine. Need to scale or untangle the mess?
            We’re here to turn “what if” into “well done.”
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-[240px] bg-brand-primary px-7 py-3 text-sm font-semibold text-surface shadow-xs hover:bg-accent hover:text-black transition duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface dark:bg-brand-primary dark:text-surface dark:shadow-none dark:hover:bg-accent dark:focus-visible:outline-surface"
            >
              Book a call with us
            </Link>
            <Link
              href="/"
              className="text-sm/6 font-semibold text-brand-primary hover:text-dark dark:text-brand-secondary dark:hover:text-surface/30"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        {/* <BentoGrids /> */}
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#16af8e" />
            <stop offset={1} stopColor="#114036" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
