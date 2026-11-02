import { useState } from 'react';
import { ScreenType, TransitionType } from './types';

// Import all 16 screens
import InitialScreen from './components/InitialScreen';
import LoginScreen from './components/LoginScreen';
import OnboardingScreen from './components/OnboardingScreen';
import HomeDashboard from './components/HomeDashboard';
import MyPolicies from './components/MyPolicies';
import ComparePlans from './components/ComparePlans';
import DiscoverInsurance from './components/DiscoverInsurance';
import BuyPolicy from './components/BuyPolicy';
import AIAssistant from './components/AIAssistant';
import FileClaim from './components/FileClaim';
import ClaimTracking from './components/ClaimTracking';
import RenewalReminder from './components/RenewalReminder';
import SupportScreen from './components/SupportScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ProtectionInsights from './components/ProtectionInsights';
import ProfileScreen from './components/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('INITIAL');
  const [transition, setTransition] = useState<TransitionType>('none');

  const navigateTo = (screen: ScreenType, transitionType: TransitionType = 'push') => {
    setTransition(transitionType);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'INITIAL':
        return <InitialScreen navigateTo={navigateTo} transition={transition} />;
      case 'LOGIN':
        return <LoginScreen navigateTo={navigateTo} transition={transition} />;
      case 'ONBOARDING':
        return <OnboardingScreen navigateTo={navigateTo} transition={transition} />;
      case 'HOME':
        return <HomeDashboard navigateTo={navigateTo} transition={transition} />;
      case 'MY_POLICIES':
        return <MyPolicies navigateTo={navigateTo} transition={transition} />;
      case 'COMPARE_PLANS':
        return <ComparePlans navigateTo={navigateTo} transition={transition} />;
      case 'DISCOVER':
        return <DiscoverInsurance navigateTo={navigateTo} transition={transition} />;
      case 'BUY_POLICY':
        return <BuyPolicy navigateTo={navigateTo} transition={transition} />;
      case 'AI_ASSISTANT':
        return <AIAssistant navigateTo={navigateTo} transition={transition} />;
      case 'FILE_CLAIM':
        return <FileClaim navigateTo={navigateTo} transition={transition} />;
      case 'CLAIM_TRACKING':
        return <ClaimTracking navigateTo={navigateTo} transition={transition} />;
      case 'RENEWAL_REMINDER':
        return <RenewalReminder navigateTo={navigateTo} transition={transition} />;
      case 'SUPPORT':
        return <SupportScreen navigateTo={navigateTo} transition={transition} />;
      case 'NOTIFICATIONS':
        return <NotificationsScreen navigateTo={navigateTo} transition={transition} />;
      case 'PROTECTION_INSIGHTS':
        return <ProtectionInsights navigateTo={navigateTo} transition={transition} />;
      case 'PROFILE':
        return <ProfileScreen navigateTo={navigateTo} transition={transition} />;
      default:
        return <InitialScreen navigateTo={navigateTo} transition={transition} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#faf8f7] text-[#0b1c30] flex justify-center items-center font-sans antialiased">
      {/* Mobile Frame Container mimicking an elegant device display */}
      <div className="w-full max-w-[440px] h-screen max-h-[920px] sm:h-[880px] sm:rounded-[40px] sm:border-[8px] sm:border-[#0b1c30] sm:shadow-[0_25px_60px_-15px_rgba(106,0,7,0.15)] bg-white overflow-hidden flex flex-col relative">
        {/* Screen Content Render */}
        <div className="flex-grow flex flex-col overflow-hidden relative">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
