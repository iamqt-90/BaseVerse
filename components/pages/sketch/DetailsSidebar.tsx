interface DetailsSidebarProps {
    artworkDetails: {
      technique: string;
      tools: string[];
      creationTime: string;
      colors: string[];
    };
    dreamDetails: {
      timeOfNight: string;
      sleepQuality: string;
      dreamSigns: string[];
    };
    emotions: string[];
  }
  
  export function DetailsSidebar({
    artworkDetails,
    dreamDetails,
    emotions,
  }: DetailsSidebarProps) {
    return (
      <aside className="w-full max-md:mt-8">
        <section className="flex flex-col items-start py-6 pr-16 pl-6 w-full bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)] max-md:px-5">
          <h2 className="text-sm font-semibold text-stone-500">ARTWORK DETAILS</h2>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Technique</h3>
            <p className="mt-1 text-sm text-zinc-900">{artworkDetails.technique}</p>
          </div>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Tools Used</h3>
            <p className="flex gap-1 mt-1 text-sm text-zinc-900">
              {artworkDetails.tools.map((tool, index) => (
                <span key={tool} className="grow">
                  {tool}
                </span>
              ))}
            </p>
          </div>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Creation Time</h3>
            <p className="mt-1 text-sm text-zinc-900">{artworkDetails.creationTime}</p>
          </div>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Color Palette</h3>
            <div className="flex gap-2 mt-2.5">
              {artworkDetails.colors.map((color, index) => (
                <div
                  key={index}
                  className={`flex shrink-0 w-6 h-6 rounded-[26843500px]`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </section>
  
        <section className="flex flex-col items-start py-6 pr-14 pl-6 mt-6 w-full bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)] max-md:px-5">
          <h2 className="text-sm font-semibold text-stone-500">DREAM DETAILS</h2>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Time of Night</h3>
            <p className="mt-1 text-sm text-zinc-900">{dreamDetails.timeOfNight}</p>
          </div>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Sleep Quality</h3>
            <p className="mt-1 text-sm text-zinc-900">{dreamDetails.sleepQuality}</p>
          </div>
  
          <div className="mt-4">
            <h3 className="text-xs text-stone-500">Dream Signs</h3>
            {dreamDetails.dreamSigns.map((sign) => (
              <p key={sign} className="mt-1 text-sm text-zinc-900">
                {sign}
              </p>
            ))}
          </div>
        </section>
  
        <section className="flex gap-2 px-8 py-6 mt-6 bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)] max-md:px-5">
          <div className="flex flex-col">
            <h2 className="self-start text-sm font-semibold text-stone-500">
              EMOTIONS FELT
            </h2>
            <div className="flex flex-wrap gap-2 mt-4 text-xs text-indigo-700">
              {emotions.map((emotion) => (
                <span
                  key={emotion}
                  className="px-3 py-1.5 rounded-2xl bg-slate-50"
                >
                  {emotion}
                </span>
              ))}
            </div>
          </div>
        </section>
      </aside>
    );
  }
  