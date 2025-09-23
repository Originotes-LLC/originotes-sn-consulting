const cards = [
  {
    id: "performance",
    eyebrow: "Performance",
    heading: "Lightning-fast builds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.",
    lightImage:
      "https://tailwindcss.com/plus-assets/img/component-images/bento-01-performance.png",
    darkImage:
      "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-performance.png",
    imageClassName: "object-left",
  },
  {
    id: "releases",
    eyebrow: "Releases",
    heading: "Push to deploy",
    description:
      "Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.",
    lightImage:
      "https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png",
    darkImage:
      "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-releases.png",
    imageClassName: "object-left lg:object-right",
  },
  {
    id: "speed",
    eyebrow: "Speed",
    heading: "Built for power users",
    description:
      "Sed congue eros non finibus molestie. Vestibulum euismod augue.",
    lightImage:
      "https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png",
    darkImage:
      "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-speed.png",
    imageClassName: "object-left",
  },
  {
    id: "integrations",
    eyebrow: "Integrations",
    heading: "Connect your favorite tools",
    description:
      "Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.",
    lightImage:
      "https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png",
    darkImage:
      "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-integrations.png",
  },
  {
    id: "network",
    eyebrow: "Network",
    heading: "Globally distributed CDN",
    description:
      "Aenean vulputate justo commodo auctor vehicula in malesuada semper.",
    lightImage:
      "https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png",
    darkImage:
      "https://tailwindcss.com/plus-assets/img/component-images/dark-bento-01-network.png",
  },
];

const marqueeCards = [...cards, ...cards];

export function BentoGrids() {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />
        <div className="group relative">
          <div className="flex w-max gap-6 animate-[bento-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marqueeCards.map((card, index) => {
              const isDuplicate = index >= cards.length;
              const baseImageClass = `h-80 w-full object-cover ${
                card.imageClassName ?? ""
              }`.trim();

              return (
                <article
                  key={`${card.id}-${index}`}
                  aria-hidden={isDuplicate ? true : undefined}
                  className="relative flex h-full w-[22rem] flex-none flex-col"
                >
                  <div className="absolute inset-0 rounded-3xl bg-white dark:bg-gray-800" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <img
                      alt=""
                      src={card.lightImage}
                      className={`${baseImageClass} dark:hidden`}
                      loading={isDuplicate ? "lazy" : "eager"}
                    />
                    <img
                      alt=""
                      src={card.darkImage}
                      className={`${baseImageClass} not-dark:hidden`}
                      loading="lazy"
                    />
                    <div className="p-10 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
                        {card.eyebrow}
                      </p>
                      <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-950 dark:text-white">
                        {card.heading}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-sm outline outline-black/5 dark:outline-white/15" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrids;
