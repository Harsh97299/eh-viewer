import {
  IconBooks,
  IconDownload,
  IconZoomIn,
  IconHeart,
  IconPalette,
  IconShieldLock,
  IconCurrencyDollar,
  IconWorld,
} from "@tabler/icons-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Huge Manga Catalog",
      description:
        "Browse a vast library of manga spanning every genre — from the newest releases to timeless classics.",
      icon: <IconBooks />,
    },
    {
      title: "Offline Downloads",
      description:
        "Save comics to your device and read anywhere — no internet required. Pick your folder, choose image quality.",
      icon: <IconDownload />,
    },
    {
      title: "Zoom for Clear Reading",
      description:
        "Pinch to zoom on small text or detailed panels — no more eye strain on tiny fonts.",
      icon: <IconZoomIn />,
    },
    {
      title: "Favorites List",
      description:
        "One tap on the heart icon adds any manga to your favorites — organize them into folders your way.",
      icon: <IconHeart />,
    },
    {
      title: "Custom Themes",
      description:
        "Light, dark, and beyond. Tweak themes, display, and reader settings to match your taste.",
      icon: <IconPalette />,
    },
    {
      title: "Privacy-First",
      description:
        "No accounts, no personal info, no tracking. Browse and read with peace of mind.",
      icon: <IconShieldLock />,
    },
    {
      title: "Free & Open Source",
      description:
        "Completely free, GPL-licensed, and ad-free. No subscriptions, no paywalls, ever.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Multiple Sources",
      description:
        "Pull content from many sources in one place — switch galleries without juggling apps.",
      icon: <IconWorld />,
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8 text-center mb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          Everything you need to read
        </h2>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          A full-featured manga reader built for comfort, speed, and privacy.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
