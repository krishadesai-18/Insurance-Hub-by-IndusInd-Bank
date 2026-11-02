import { Bell, ArrowLeft } from 'lucide-react';
import { ScreenType, TransitionType } from '../types';

interface HeaderProps {
  styleType: 'italic' | 'new';
  showBack?: boolean;
  onBackClick?: () => void;
  onNotificationClick: () => void;
  hasUnreadNotifications?: boolean;
}

export default function Header({
  styleType,
  showBack = false,
  onBackClick,
  onNotificationClick,
  hasUnreadNotifications = true,
}: HeaderProps) {
  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white border-b border-[#e0bfbb]/30 px-5 py-3 flex justify-between items-center w-full shadow-[0px_4px_20px_rgba(140,25,25,0.04)] flex-nowrap">
      <div className="flex items-center gap-2 flex-nowrap min-w-0">
        {showBack && (
          <button
            onClick={onBackClick}
            className="text-[#6a0007] hover:opacity-80 transition-all p-1 active:scale-95 cursor-pointer flex items-center justify-center shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        <div className="flex items-center gap-1 flex-nowrap min-w-0">
          {styleType === 'italic' ? (
            <>
              <span
                className="font-bold tracking-tight text-[#6a0007] text-[18px] italic whitespace-nowrap"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                IndusInd Bank
              </span>
              <div className="h-4 w-[1px] bg-[#e0bfbb]/60 mx-1 shrink-0"></div>
              <span className="text-[9px] text-[#58413f] font-bold tracking-wider uppercase whitespace-nowrap">
                Insurance Hub
              </span>
            </>
          ) : (
            <>
              <span
                className="font-bold tracking-tight text-[#6a0007] text-[18px] italic whitespace-nowrap"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                IndusInd Bank
              </span>
              <div className="h-4 w-[1px] bg-[#e0bfbb] mx-1 shrink-0"></div>
              <span className="text-[9px] text-[#58413f] uppercase tracking-wider font-bold whitespace-nowrap">
                INSURANCE HUB
              </span>
            </>
          )}
        </div>
      </div>

      <button
        onClick={onNotificationClick}
        className="relative hover:opacity-80 transition-all active:scale-95 p-1 cursor-pointer flex items-center justify-center text-[#58413f] shrink-0"
      >
        <Bell className="w-[20px] h-[20px]" />
        {hasUnreadNotifications && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#6a0007] rounded-full border-2 border-white animate-pulse"></span>
        )}
      </button>
    </header>
  );
}
