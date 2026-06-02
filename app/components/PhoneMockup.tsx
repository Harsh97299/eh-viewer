const mangaCovers = [
  { gradient: "from-[#FFD0D0] to-[#FFB8B8]", dot: "#E63946", label: "Vol. 1", chapters: "Ch. 12" },
  { gradient: "from-[#FFE8D6] to-[#FFD0B0]", dot: "#FF9B6A", label: "Vol. 4", chapters: "Ch. 38" },
  { gradient: "from-[#D6F0FF] to-[#B0DCFF]", dot: "#6AADFF", label: "Vol. 2", chapters: "Ch. 21" },
  { gradient: "from-[#FFD6E8] to-[#FFB0CC]", dot: "#FF6A9B", label: "Vol. 7", chapters: "Ch. 55" },
];

export default function PhoneMockup({ size = "lg" }: { size?: "sm" | "lg" }) {
  const sm = size === "sm";

  return (
    <div
      className={`relative ${sm ? "w-[200px] h-[400px]" : "w-[270px] h-[530px]"}
        rounded-[40px] border-[10px] border-gray-800 bg-white
        shadow-[0_60px_120px_rgba(0,0,0,0.28)] overflow-hidden flex-shrink-0`}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-5 bg-gray-800 rounded-b-3xl z-20" />

      {/* Status bar */}
      <div className="absolute top-1 left-0 right-0 flex justify-between px-5 z-10 pointer-events-none">
        <span className="text-[8px] text-gray-400 font-medium pt-1">9:41</span>
        <span className="text-[9px] text-gray-400 pt-0.5 tracking-widest">···</span>
      </div>

      {/* Screen */}
      <div className="h-full flex flex-col bg-[#FFF8F5] pt-6">
        {/* App header */}
        <div className="px-4 pt-2 pb-2 flex items-center justify-between">
          <div>
            <p className="text-[8px] text-[#666666]">Welcome back</p>
            <p className="text-[11px] font-bold text-[#111111] tracking-tight">EhViewer</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E63946] to-[#C81D25] shadow-sm" />
        </div>

        {/* Search */}
        <div className="px-4 mb-3">
          <div className="h-7 rounded-xl bg-white border border-[#ECECEC] flex items-center px-3 gap-2 shadow-sm">
            <div className="w-3 h-3 rounded-full border border-[#CECECE]" />
            <div className="h-1.5 w-20 rounded-full bg-[#ECECEC]" />
          </div>
        </div>

        {/* Category pills */}
        <div className="px-4 flex gap-1.5 mb-3 overflow-hidden">
          <div className="px-2.5 py-1 rounded-full bg-[#E63946] text-white text-[8px] font-semibold flex-shrink-0">
            All
          </div>
          {["Action", "Romance", "Shonen"].map((c) => (
            <div
              key={c}
              className="px-2.5 py-1 rounded-full bg-white text-[#666666] text-[8px] border border-[#ECECEC] flex-shrink-0"
            >
              {c}
            </div>
          ))}
        </div>

        {/* Section label */}
        <div className="px-4 mb-2">
          <p className="text-[9px] font-bold text-[#111111]">Trending Manga</p>
        </div>

        {/* Manga grid */}
        <div className="px-4 grid grid-cols-2 gap-2 flex-1 overflow-hidden">
          {mangaCovers.map((item) => (
            <div
              key={item.label}
              className="rounded-xl overflow-hidden bg-white border border-[#ECECEC]/60 shadow-sm"
            >
              <div className={`${sm ? "h-12" : "h-16"} bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <div
                  className="w-7 h-7 rounded-md opacity-60"
                  style={{ backgroundColor: item.dot }}
                />
              </div>
              <div className="p-1.5">
                <p className="text-[8px] font-semibold text-[#111111]">{item.label}</p>
                <p className="text-[7px] text-[#666666]">{item.chapters}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="bg-white border-t border-[#ECECEC] px-4 py-2 flex justify-around mt-2">
          {["🏠", "🔍", "❤️", "👤"].map((icon) => (
            <span key={icon} className="text-sm leading-none">
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
