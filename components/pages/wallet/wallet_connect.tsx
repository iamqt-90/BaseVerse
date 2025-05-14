mport React from 'react';
import { Logo } from '@/components/common/Logo';
import { WalletOption } from './WalletOption';

export const WalletConnect: React.FC = () => {
  const handleWalletConnect = () => {
    // Wallet connection logic would go here
    console.log('Connecting wallet...');
  };

  return (
    <div className="max-w-[613px]">
      <main className="flex flex-col relative min-h-[519px] w-full items-center pt-[22px] pb-[51px] px-[34px] max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b0a084bab3c414b85738c11f11bcb80/991c7240b2ffc2539c3bae872e992f3d1f64173e?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        
        <div className="relative z-10 flex flex-col items-center w-full">
          <Logo />
          
          <h1 className="text-white text-2xl font-semibold mt-[39px]">
            Connect Your Wallet
          </h1>
          
          <p className="text-[rgba(222,222,222,1)] text-[15px] font-normal leading-[23px] text-center mt-[53px] max-md:max-w-full max-md:mt-10">
            Choose your preferred wallet to connect and start managing your dreams
          </p>

          <div className="w-full ml-[19px] mt-[59px] max-md:mt-10">
            <WalletOption
              icon="https://cdn.builder.io/api/v1/image/assets/2b0a084bab3c414b85738c11f11bcb80/b852e6ae02083bc0a50d614154e7dc32db43132e?placeholderIfAbsent=true"
              name="Coinbase Wallet"
              onClick={handleWalletConnect}
            />
          </div>

          <footer className="flex w-[219px] max-w-full items-stretch gap-5 text-sm text-center justify-between mt-[76px] max-md:mt-10">
            <p className="text-[rgba(222,222,222,1)] font-normal">
              New to Web3?
            </p>
            <button 
              className="text-[rgba(148,117,249,1)] font-medium hover:underline"
              onClick={() => console.log('Learn more clicked')}
            >
              Learn More
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
};