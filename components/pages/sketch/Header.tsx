export function Header({ date }: { date: string }) {
    return (
      <header className="flex flex-wrap gap-5 justify-between w-full text-sm max-md:max-w-full">
        <div className="flex gap-4 items-center">
          <button className="flex gap-2 self-stretch px-4 py-3 font-medium text-center text-indigo-700 rounded-lg border border-indigo-700 border-solid">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/4aea73c4f07eaf18c97cc7c81b67cb910e49f77e?placeholderIfAbsent=true"
              alt=""
              className="object-contain shrink-0 my-auto w-4 aspect-square"
            />
            <span className="basis-auto">Back to Journal</span>
          </button>
          <div className="flex shrink-0 self-stretch my-auto w-px h-6 bg-indigo-100" />
          <time className="self-stretch my-auto basis-auto text-stone-500">
            {date}
          </time>
        </div>
        <div className="flex gap-3 font-medium text-center">
          <button className="px-6 py-3 text-indigo-700 rounded-lg border border-indigo-700 border-solid max-md:px-5">
            Download Artwork
          </button>
          <button className="px-6 py-3 text-white bg-indigo-700 rounded-lg max-md:px-5">
            Share Artwork
          </button>
        </div>
      </header>
    );
  }
  