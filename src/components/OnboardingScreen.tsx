import { Shield, ArrowUpDown, Calendar, Zap } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import { ScreenType, TransitionType } from '../types';

interface OnboardingScreenProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function OnboardingScreen({ navigateTo, transition }: OnboardingScreenProps) {
  const steps = [
    {
      title: 'Manage all policies',
      desc: 'View your entire portfolio across life, health, and motor in one dashboard.',
      icon: Shield,
      bgColor: 'bg-[#6a0007]/10',
      iconColor: 'text-[#6a0007]',
    },
    {
      title: 'Compare plans easily',
      desc: 'Find the perfect balance of coverage and premium with our smart engine.',
      icon: ArrowUpDown,
      bgColor: 'bg-[#ffe088]/20',
      iconColor: 'text-[#735c00]',
    },
    {
      title: 'Renew on time',
      desc: 'Automated alerts and 1-tap renewals ensure continuous protection.',
      icon: Calendar,
      bgColor: 'bg-[#6a0007]/5',
      iconColor: 'text-[#6a0007]',
    },
    {
      title: 'File claims digitally',
      desc: 'Our concierge claims process is entirely paperless and lightning fast.',
      icon: Zap,
      bgColor: 'bg-[#eff4ff]',
      iconColor: 'text-[#213145]',
    },
  ];

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={true}
        onBackClick={() => navigateTo('LOGIN', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={false}
      />

      <main className="flex-grow overflow-y-auto p-6 pb-8 flex flex-col justify-between min-h-0">
        <div className="space-y-6">
          {/* Hero Banner / Promo Image Placeholder */}
          <div className="relative h-44 rounded-2xl overflow-hidden shadow-md">
            {/* Real aesthetic background of a luxury sedan */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbZDwVQTdwGIp22GVvPGaAiYveVocVyF6BJkREIrGpWsvEebjHsC_5O3w0quvWcmsHW_Zin_adr9YjKNcXcg54gl1RkefyYFbN6CnpUrip0nbTbL1Ob9QhTqna07Ow-X7Q6k6mHbrTm3QgleHYcefiQ5H57Tya1NpZ_Emw_VJ7LK5INYCOn45F0OqM0xpsjFS8JelNgYm9wE5y0J4dTbCuh9VbG3YFf5ZgD2aRCqKIWRJz6cF0AzR_yR0M5lU8bAjkPQF6fBkt3bk')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 flex flex-col justify-end p-4">
              <span className="text-[10px] font-bold text-[#ffe088] bg-[#6a0007] px-2 py-0.5 rounded-full w-max uppercase tracking-wider mb-1">
                Motor Elite
              </span>
              <h3
                className="text-white text-lg font-bold leading-snug"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Comprehensive Coverage for your journey.
              </h3>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5">
            <span className="w-6 h-1.5 rounded-full bg-[#6a0007]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0bfbb]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#e0bfbb]"></span>
          </div>

          {/* Intro Text */}
          <div className="text-center space-y-2 px-2">
            <h2
              className="text-xl font-bold text-[#6a0007] leading-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Welcome to Your Private Insurance Vault
            </h2>
            <p className="text-xs text-[#58413f]/80 leading-relaxed font-medium">
              Experience effortless protection and wealth management with IndusProtect.
            </p>
          </div>

          {/* Features list */}
          <div className="space-y-3 pt-1">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#e0bfbb]/30 rounded-xl p-3 flex items-start gap-3 shadow-[0px_4px_12px_rgba(140,25,25,0.02)]"
                >
                  <div className={`p-2.5 rounded-xl ${step.bgColor} ${step.iconColor} shrink-0`}>
                    <Icon className="w-5 h-5 stroke-[1.8px]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-[#0b1c30]">{step.title}</h4>
                    <p className="text-[11px] text-[#58413f]/80 leading-normal">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 pt-6">
          <button
            id="get-started"
            onClick={() => navigateTo('HOME', 'push')}
            className="w-full bg-[#6a0007] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-[#6a0007]/15 active:scale-95 hover:bg-[#6a0007]/95 transition-all cursor-pointer"
          >
            Get Started
          </button>
          <p className="text-[10px] text-[#58413f]/50 font-bold tracking-wider uppercase">
            Securely managed by IndusInd Bank
          </p>
        </div>
      </main>
    </ScreenWrapper>
  );
}
