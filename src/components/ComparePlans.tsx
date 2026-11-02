import { useState } from 'react';
import { Shield, Check, Star, Info, HelpCircle } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface ComparePlansProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function ComparePlans({ navigateTo, transition }: ComparePlansProps) {
  const [selectedPlan, setSelectedPlan] = useState<'gold' | 'platinum'>('gold');

  const plans = {
    gold: {
      name: 'Comprehensive Gold',
      price: '₹14,200',
      period: 'year',
      features: [
        'Personal Accident Cover (Up to ₹15L)',
        'Roadside Assistance (24/7 Support)',
        'Cashless at 4500+ network garages',
        'Third-Party Damage cover',
      ],
      tag: 'RECOMMENDED',
      color: 'border-[#6a0007]',
    },
    platinum: {
      name: 'Comprehensive Platinum',
      price: '₹18,500',
      period: 'year',
      features: [
        'Personal Accident Cover (Up to ₹20L)',
        'Roadside Assistance (24/7 Support)',
        'Engine Protect Add-on included',
        'Zero Depreciation coverage on parts',
        'Consumables cover & Key replacement',
      ],
      tag: 'ELITE PREMIUM',
      color: 'border-[#ffe088]',
    },
  };

  const handleSelectPlan = (planId: 'gold' | 'platinum') => {
    // Navigate to Buy Policy with push transition
    navigateTo('BUY_POLICY', 'push');
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="italic"
        showBack={true}
        onBackClick={() => navigateTo('HOME', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        <section className="space-y-1">
          <p className="text-xs font-bold text-[#58413f] uppercase tracking-wider">
            Premium Car Protection
          </p>
          <h2
            className="text-xl font-bold text-[#0b1c30]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Compare & Choose
          </h2>
        </section>

        {/* Plan Cards Toggle or Selector */}
        <div className="space-y-4">
          {/* Gold Plan Card */}
          <div
            onClick={() => setSelectedPlan('gold')}
            className={`bg-white border rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.03)] cursor-pointer transition-all duration-300 relative overflow-hidden ${
              selectedPlan === 'gold' ? 'border-[#6a0007] ring-2 ring-[#6a0007]/10' : 'border-[#e0bfbb]/30'
            }`}
          >
            <div className="absolute top-0 right-0">
              <span className="bg-[#6a0007] text-white font-bold text-[8px] px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                RECOMMENDED
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-[#6a0007]/5 rounded-xl text-[#6a0007]">
                <Shield className="w-6 h-6 stroke-[1.8px]" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#0b1c30]">Comprehensive Gold</h3>
                <p className="text-[10px] text-[#58413f]/60 font-medium">Standard all-inclusive cover</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-extrabold text-[#6a0007] tracking-tight">₹14,200</span>
              <span className="text-xs text-[#58413f]/70 font-semibold">/ year</span>
            </div>

            <div className="space-y-2 border-t border-[#e5eeff] pt-3">
              {plans.gold.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <Check className="w-4 h-4 text-[#6a0007] shrink-0 mt-0.5" />
                  <span className="text-[#58413f] font-medium leading-normal">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectPlan('gold');
              }}
              className="w-full bg-[#6a0007] hover:bg-[#6a0007]/95 text-white py-3 rounded-xl font-bold text-xs tracking-wide shadow-md shadow-[#6a0007]/10 active:scale-95 transition-all mt-5 cursor-pointer flex items-center justify-center gap-1.5"
            >
              Select Plan
            </button>
          </div>

          {/* Platinum Plan Card */}
          <div
            onClick={() => setSelectedPlan('platinum')}
            className={`bg-[#0b1c30] text-white border rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.05)] cursor-pointer transition-all duration-300 relative overflow-hidden ${
              selectedPlan === 'platinum' ? 'border-[#ffe088] ring-2 ring-[#ffe088]/20' : 'border-transparent'
            }`}
          >
            <div className="absolute top-0 right-0">
              <span className="bg-[#ffe088] text-[#241a00] font-bold text-[8px] px-3 py-1 rounded-bl-xl uppercase tracking-widest flex items-center gap-1">
                <Star className="w-2.5 h-2.5 fill-[#241a00]" />
                ELITE PREMIUM
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-white/10 rounded-xl text-[#ffe088]">
                <Star className="w-6 h-6 stroke-[1.8px] fill-[#ffe088]/20" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#ffe088]">Comprehensive Platinum</h3>
                <p className="text-[10px] text-white/50 font-medium">Bespoke luxury auto insurance</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-3xl font-extrabold text-[#ffe088] tracking-tight">₹18,500</span>
              <span className="text-xs text-white/70 font-semibold">/ year</span>
            </div>

            <div className="space-y-2 border-t border-white/10 pt-3">
              {plans.platinum.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <Check className="w-4 h-4 text-[#ffe088] shrink-0 mt-0.5" />
                  <span className="text-white/85 font-medium leading-normal">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSelectPlan('platinum');
              }}
              className="w-full bg-[#ffe088] hover:bg-[#ffe088]/95 text-[#241a00] py-3 rounded-xl font-bold text-xs tracking-wide shadow-lg shadow-[#ffe088]/10 active:scale-95 transition-all mt-5 cursor-pointer flex items-center justify-center gap-1.5"
            >
              Select Plan
            </button>
          </div>
        </div>

        {/* Why compare banner */}
        <div className="bg-[#eff4ff] border border-[#e5eeff] rounded-2xl p-4 flex gap-3 items-start">
          <Info className="w-5 h-5 text-[#6a0007] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-[#0b1c30]">Important Information</h4>
            <p className="text-[11px] text-[#58413f] leading-relaxed">
              Premium quotes are subject to verification of your motor registration, continuous claims history records, and KYC matching.
            </p>
          </div>
        </div>
      </main>

      <BottomNav currentScreen="COMPARE_PLANS" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
