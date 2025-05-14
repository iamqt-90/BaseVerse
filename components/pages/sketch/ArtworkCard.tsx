"use client";

interface ArtworkCardProps {
  title: string;
  tags: string[];
  imageSrc: string;
  description: string;
  interpretation: string;
}

export function ArtworkCard({
  title,
  tags,
  imageSrc,
  description,
  interpretation,
}: ArtworkCardProps) {
  return (
    <article className="flex flex-col items-start p-8 mx-auto w-full bg-white rounded-2xl border border-blue-50 border-solid shadow-[0px_4px_12px_rgba(0,0,0,0.03)] max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <header className="flex gap-4 text-2xl font-semibold text-zinc-900">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/73cf021f-7fb7-40ba-acc4-cbea4e0f5a08?placeholderIfAbsent=true"
          alt=""
          className="object-contain shrink-0 w-11 h-11 bg-blue-50 aspect-[1.05] rounded-[26843500px]"
        />
        <h1 className="flex-auto my-auto">{title}</h1>
      </header>

      <div className="flex gap-2 mt-6 text-xs text-indigo-700 whitespace-nowrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-2xl bg-slate-50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex relative flex-col self-stretch pt-4 pr-4 pb-52 pl-20 mt-6 w-full rounded-xl min-h-[566px] max-md:pb-24 max-md:pl-5 max-md:max-w-full">
        <img
          src={imageSrc}
          alt="Dream artwork"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-wrap gap-5 justify-between self-end max-w-full w-[550px]">
          <div className="flex shrink-0 self-end mt-40 w-3 h-3 bg-indigo-700 rounded-[26843500px] max-md:mt-10" />
          <div className="flex flex-col">
            <div className="flex gap-2 self-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/952859ca-5fce-42fd-90f6-13dd25514e44?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 bg-white rounded-lg aspect-square h-[42px] w-[42px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/7bb15844-af43-4598-8f26-8dadaba08876?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 bg-white rounded-lg aspect-square h-[42px] w-[42px]"
              />
              <div className="flex flex-col justify-center items-center px-2 bg-white rounded-lg border border-indigo-100 border-solid h-[42px] w-[42px]">
                <div className="flex shrink-0 w-5 h-5 bg-indigo-700 rounded-[26843500px]" />
              </div>
            </div>
            <div className="flex shrink-0 mt-44 w-3 h-3 bg-indigo-700 rounded-[26843500px] max-md:mt-10" />
          </div>
        </div>
        <div className="flex relative shrink-0 self-center mt-24 mb-0 w-3 h-3 bg-indigo-700 rounded-[26843500px] max-md:mt-10 max-md:mb-2.5" />
      </div>

      <section className="w-full mt-8">
        <h2 className="text-base font-semibold text-zinc-900">
          Dream Description
        </h2>
        <p className="self-stretch mt-4 text-base leading-6 text-neutral-700">
          {description}
        </p>
      </section>

      <section className="w-full mt-2">
        <h2 className="text-base font-semibold text-zinc-900">
          Dream Interpretation
        </h2>
        <p className="self-stretch mt-5 text-base leading-6 text-neutral-700">
          {interpretation}
        </p>
      </section>

      <div className="flex gap-3 mt-8 text-sm font-medium text-center">
        <button className="px-6 py-3 text-indigo-700 rounded-lg border border-indigo-700 border-solid max-md:px-5">
          Edit Artwork
        </button>
        <button className="px-6 py-3 text-orange-600 rounded-lg border border-orange-600 border-solid max-md:px-5">
          Delete Entry
        </button>
      </div>
    </article>
  );
}
