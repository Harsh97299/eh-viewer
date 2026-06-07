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

// Brand colors cycle: blue, red, yellow, green
const brandColors = ["#4586F3", "#EB4334", "#FBBD06", "#35AA53"];

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
        "EhViewer is completely free, GPL-licensed, and ad-free. Built by the community, for the community — no subscriptions, no paywalls, ever.",
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
    <section
      id="features-section"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#4586F3]/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#EB4334]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-3/4 w-72 h-72 rounded-full bg-[#FBBD06]/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 rounded-full bg-[#35AA53]/8 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 text-center mb-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#202124]">
          Why readers love EhViewer
        </h2>
        <p className="mt-4 text-base text-[#5F6368] max-w-2xl mx-auto">
          Think of EhViewer as your personal manga command center — built for
          comfort, speed, and privacy, and powered by the open-source community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto ">
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            color={brandColors[index % 4]}
          />
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
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  color: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-[#E8EAED]",
        (index === 0 || index === 4) && "lg:border-l border-[#E8EAED]",
        index < 4 && "lg:border-b border-[#E8EAED]",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#F8F9FA] to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#F8F9FA] to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10" style={{ color }}>
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#E8EAED] transition-all duration-200 origin-center"
          style={{ "--hover-color": color } as React.CSSProperties}
        >
          <div
            className="h-0 group-hover/feature:h-full w-full rounded-tr-full rounded-br-full transition-all duration-200"
            style={{ backgroundColor: color }}
          />
        </div>
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#202124]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[#5F6368] max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
