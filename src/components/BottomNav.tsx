import { Home, Compass, FileText, Headphones, User } from 'lucide-react';
import { ScreenType, TransitionType } from '../types';

interface BottomNavProps {
  currentScreen: ScreenType;
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
}

export default function BottomNav({ currentScreen, navigateTo }: BottomNavProps) {
  // Map current screen to active tab
  let activeTab: 'home' | 'discover' | 'claims' | 'assist' | 'profile' = 'home';

  if (currentScreen === 'HOME') {
    activeTab = 'home';
  } else if (
    currentScreen === 'DISCOVER' ||
    currentScreen === 'COMPARE_PLANS' ||
    currentScreen === 'BUY_POLICY'
  ) {
    activeTab = 'discover';
  } else if (
    currentScreen === 'MY_POLICIES' ||
    currentScreen === 'FILE_CLAIM' ||
    currentScreen === 'CLAIM_TRACKING' ||
    currentScreen === 'RENEWAL_REMINDER'
  ) {
    activeTab = 'claims';
  } else if (currentScreen === 'AI_ASSISTANT' || currentScreen === 'SUPPORT') {
    activeTab = 'assist';
  } else if (
    currentScreen === 'PROFILE' ||
    currentScreen === 'NOTIFICATIONS' ||
    currentScreen === 'PROTECTION_INSIGHTS'
  ) {
    activeTab = 'profile';
  }

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Home, screen: 'HOME' as ScreenType },
    { id: 'discover' as const, label: 'Discover', icon: Compass, screen: 'DISCOVER' as ScreenType },
    { id: 'claims' as const, label: 'Claims', icon: FileText, screen: 'MY_POLICIES' as ScreenType },
    { id: 'assist' as const, label: 'Assist', icon: Headphones, screen: 'AI_ASSISTANT' as ScreenType },
    { id: 'profile' as const, label: 'Profile', icon: User, screen: 'PROFILE' as ScreenType },
  ];

  return (
    <nav className="absolute bottom-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md flex justify-around items-center px-2 pb-5 pt-2 shadow-[0px_-4px_20px_rgba(140,25,25,0.04)] border-t-[0.5px] border-[#ffe088]">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.screen, 'none')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all duration-200 active:scale-95 cursor-pointer ${
              isActive
                ? 'text-[#6a0007] font-bold'
                : 'text-[#58413f] hover:bg-[#d3e4fe]/20'
            }`}
          >
            <IconComponent className={`w-6 h-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} />
            <span className="text-[11px] font-medium mt-1 uppercase tracking-wider leading-none">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
