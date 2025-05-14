import React from 'react';
import { cn } from '@/lib/utils';

interface WalletOptionProps {
  icon: string;
  name: string;
  onClick: () => void;
  className?: string;
}

export const WalletOption: React.FC<WalletOptionProps> = ({
  icon,
  name,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative bg-[rgba(207,194,255,1)] border flex w-full items-stretch gap-5 text-base text-[rgba(26,26,26,1)] font-medium text-center flex-wrap justify-between px-[21px] py-[22px] rounded-xl border-[rgba(240,244,255,1)] border-solid hover:opacity-90 transition-opacity",
        className
      )}
    >
      <div className="flex items-stretch gap-[31px]">
        <img
          src={icon}
          alt={`${name} icon`}
          className="aspect-[0.98] object-contain w-10 shrink-0 rounded-lg"
        />
        <div className="basis-auto">
          {name}
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/2b0a084bab3c414b85738c11f11bcb80/8e0a82d26f9c77b30dbc5959fd3390243d9f1d68?placeholderIfAbsent=true"
        alt="Connect indicator"
        className="aspect-[1] object-contain w-[25px] shrink-0 my-auto"
      />
    </button>
  );
};
