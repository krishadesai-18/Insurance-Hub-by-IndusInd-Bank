import { Shield } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import { ScreenType, TransitionType } from '../types';

interface InitialScreenProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function InitialScreen({ navigateTo, transition }: InitialScreenProps) {
  return (
    <ScreenWrapper transition={transition}>
      <main
        onClick={() => navigateTo('LOGIN', 'none')}
        className="flex-grow overflow-y-auto flex flex-col items-center justify-between p-8 bg-gradient-to-b from-[#FDFCFB] to-[#F5F2EB] cursor-pointer min-h-0"
        id="initial-main"
      >
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          {/* Main Title matching reference image exactly */}
          <h1
            className="text-[34px] font-extrabold tracking-tight text-[#6a0007] italic whitespace-nowrap"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            IndusInd Bank
          </h1>
          
          <p className="text-xl font-medium text-[#736862]/85 tracking-wide mt-2">
            Insurance Hub
          </p>

          <p className="text-[13px] font-black tracking-[0.25em] text-[#917632] mt-8 uppercase">
            PROTECT. MANAGE. GROW.
          </p>

          <p className="text-[13px] font-medium text-[#736862]/70 leading-relaxed mt-14 max-w-[280px]">
            Your trusted destination for Motor,<br />Health & Life Insurance
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-4">
          <span className="text-[10px] font-extrabold tracking-[0.15em] text-[#6a0007]/50 uppercase animate-pulse">
            Tap anywhere to enter
          </span>
          <div className="text-[9px] text-[#736862]/40 text-center font-semibold">
            Secured by IndusInd Digital Vault • Version 4.2.1
          </div>
        </div>
      </main>
    </ScreenWrapper>
  );
}
