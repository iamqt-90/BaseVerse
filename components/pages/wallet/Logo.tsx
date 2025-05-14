mport React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b0a084bab3c414b85738c11f11bcb80/967e7b9c2f5938baecdf915865a048f57972de90?placeholderIfAbsent=true"
        alt="DreamScape Logo Icon"
        className="aspect-[1.22] object-contain w-[22px]"
      />
      <div className="flex w-[171px] max-w-full items-stretch gap-1.5 text-xl text-white font-semibold whitespace-nowrap">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b0a084bab3c414b85738c11f11bcb80/c29ce9c48816869d6321bdc427c0ba10a8d6af15?placeholderIfAbsent=true"
          alt="DreamScape Logo"
          className="aspect-[1] object-contain w-11 shrink-0"
        />
        <div className="grow shrink w-28">
          DreamScape
        </div>
      </div>
    </div>
  );
};
