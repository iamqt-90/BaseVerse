import * as React from "react";
import { Button } from "./Button";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex relative flex-col justify-center items-center px-20 py-32 w-full text-center text-white min-h-[542px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/1f00c26be5c842669f19cea580a2cb00/3351e181dbdc147289473545aeb7a0212782dfa8?placeholderIfAbsent=true"
        alt="Dream background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center -mb-7 ml-5 w-full max-w-[1091px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="self-stretch text-7xl font-bold leading-none max-md:max-w-full max-md:text-4xl">
          Record your dreams & mint them!
        </h2>
        <p className="mt-11 text-2xl leading-9 max-md:mt-10 max-md:max-w-full">
          Transform your story into digital collectibles and explore a gallery of
          imagination.
        </p>
        <Button className="mt-12 w-[281px] max-md:mt-10">Start Dreaming</Button>
      </div>
    </section>
  );
};
