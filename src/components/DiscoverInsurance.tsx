import { useState } from 'react';
import { Car, Heart, Shield, Users, Plane, Sliders, Sparkles, MessageSquare, Headphones } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface DiscoverInsuranceProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function DiscoverInsurance({ navigateTo, transition }: DiscoverInsuranceProps) {
  const [selectedCategory, setSelectedCategory] = useState<'motor' | 'health' | 'life' | 'travel'>('motor');

  const categories = [
    { id: 'motor' as const, label: 'Motor', icon: Car },
    { id: 'health' as const, label: 'Health', icon: Heart },
    { id: 'life' as const, label: 'Life', icon: Users },
    { id: 'travel' as const, label: 'Travel', icon: Plane },
  ];

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={false}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Featured Promo Card */}
        <section className="relative overflow-hidden rounded-2xl h-40 bg-[#6a0007] text-white flex flex-col justify-end p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.06)] group cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fed65b]/20 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:scale-125 transition-all"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>

          <div className="relative z-10 space-y-1">
            <span className="inline-block px-2.5 py-0.5 bg-[#fed65b] text-[#241a00] font-bold text-[8px] rounded-full uppercase tracking-wider mb-1">
              Featured
            </span>
            <h2 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Family Health Shield
            </h2>
            <p className="text-xs text-white/90 font-medium">15% discount for IndusInd customers</p>
          </div>

          <div className="absolute top-5 right-5">
            <Sparkles className="w-12 h-12 text-white/20 animate-pulse" />
          </div>
        </section>

        {/* Category Chips Scroll */}
        <section className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-5 py-3 rounded-full font-bold text-xs shrink-0 active:scale-95 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#6a0007] text-white shadow-md'
                    : 'bg-white border border-[#e0bfbb]/30 text-[#58413f] hover:bg-[#6a0007]/5'
                }`}
              >
                <CatIcon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </section>

        {/* Header Grid Actions */}
        <section className="flex items-center justify-between px-1">
          <h3 className="text-lg font-bold text-[#0b1c30]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Recommended for You
          </h3>
          <button className="flex items-center gap-1.5 text-[#6a0007] font-bold text-xs hover:underline cursor-pointer">
            <Sliders className="w-4 h-4" />
            Filters
          </button>
        </section>

        {/* Recommended list */}
        <section className="space-y-4">
          {/* Card 1: Car Insurance */}
          <div className="bg-white rounded-2xl border border-[#e0bfbb]/30 shadow-[0px_4px_20px_rgba(140,25,25,0.03)] overflow-hidden flex flex-col hover:border-[#6a0007]/20 transition-colors">
            <div className="relative h-32 w-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAU2_SxvrMGR4sDwd97YZkBzSauka-N4S4iypN-u82LdRdo3MpcuY-JU2_eApHR6gH-xdd1Be43Rs725cKExo4wIjIk5VsxY1mvX4xVYg7OEzw7Qrnp_sR1nyHm2av75xbm3sEpwi588QV-jzeSooCPlFqDxYYbYKWnEzK7DmC7eSjcsNPdRaP3CzjGajaiOyQUzMYr4wzjCQmz2xyiKvlfVqyUFeMPzlwokvJeEqdsQjHMvdinCzGP0ibiriEPvGtTFdF4Iy2l2Ks')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Best Seller
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col space-y-4">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-[#0b1c30] leading-snug">
                  Comprehensive Car Insurance
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold text-[#58413f] bg-[#eff4ff] px-2 py-0.5 rounded-md">
                    Roadside Assist
                  </span>
                  <span className="text-[10px] font-semibold text-[#58413f] bg-[#eff4ff] px-2 py-0.5 rounded-md">
                    Zero Dep
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#e5eeff] pt-3">
                <div>
                  <p className="text-[9px] text-[#58413f]/60 font-bold uppercase tracking-wider">Starting From</p>
                  <p className="text-base font-extrabold text-[#6a0007]">
                    ₹4,999<span className="text-xs text-[#58413f]/70 font-semibold">/yr</span>
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => navigateTo('COMPARE_PLANS', 'push')}
                    className="border border-[#6a0007]/30 hover:border-[#6a0007]/60 text-[#6a0007] px-3.5 py-2 rounded-xl font-bold text-[11px] active:scale-95 transition-all cursor-pointer"
                  >
                    Compare
                  </button>
                  <button
                    onClick={() => navigateTo('BUY_POLICY', 'push')}
                    className="bg-[#6a0007] text-white px-4 py-2 rounded-xl font-bold text-[11px] active:scale-95 transition-all cursor-pointer shadow-md shadow-[#6a0007]/10"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Health Floater */}
          <div className="bg-white rounded-2xl border border-[#e0bfbb]/30 shadow-[0px_4px_20px_rgba(140,25,25,0.03)] overflow-hidden flex flex-col hover:border-[#6a0007]/20 transition-colors">
            <div className="relative h-32 w-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWk51Q4zdIacdc7K37b6V6ZbvyCdqUivH132v39DdLqbdyvj-Yc-ngziupUeZCSfDWgYuRe0kMxVxG2pZ_Mq0y1TsPZ4gd48waobObuX3M8UJ1SWMj5UBpHvIHykw-9_6hs2HQNNhMEHnQmVVcwT6FRBQtma1vGXe9gbmlYTUciz3394G-qWOD9D3V50D7Vw9Al3-oo8OIku6ZtfkaUhvMz2kvaKYFYN2KR3M2Xcqs-4NLAtjtof7O3LFOW6JXvROlX7owGmeIc7M')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-3 left-4">
                <span className="bg-[#ffe088] text-[#241a00] text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  High Coverage
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col space-y-4">
              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-[#0b1c30] leading-snug">
                  Health Family Floater
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-semibold text-[#58413f] bg-[#eff4ff] px-2 py-0.5 rounded-md">
                    Cashless
                  </span>
                  <span className="text-[10px] font-semibold text-[#58413f] bg-[#eff4ff] px-2 py-0.5 rounded-md">
                    No-claim bonus
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#e5eeff] pt-3">
                <div>
                  <p className="text-[9px] text-[#58413f]/60 font-bold uppercase tracking-wider">Starting From</p>
                  <p className="text-base font-extrabold text-[#6a0007]">
                    ₹840<span className="text-xs text-[#58413f]/70 font-semibold">/mo</span>
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => navigateTo('COMPARE_PLANS', 'push')}
                    className="border border-[#6a0007]/30 hover:border-[#6a0007]/60 text-[#6a0007] px-3.5 py-2 rounded-xl font-bold text-[11px] active:scale-95 transition-all cursor-pointer"
                  >
                    Compare
                  </button>
                  <button
                    onClick={() => navigateTo('BUY_POLICY', 'push')}
                    className="bg-[#6a0007] text-white px-4 py-2 rounded-xl font-bold text-[11px] active:scale-95 transition-all cursor-pointer shadow-md shadow-[#6a0007]/10"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Need Assistance Card */}
        <section className="pt-2">
          <div
            onClick={() => navigateTo('AI_ASSISTANT', 'push')}
            className="bg-[#eff4ff] hover:bg-[#dce9ff] border border-[#e5eeff] rounded-2xl p-4 flex items-center gap-4 cursor-pointer active:scale-[0.99] transition-all"
            id="need-assistance-card"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#6a0007] shadow-sm shrink-0">
              <Headphones className="w-6 h-6 stroke-[1.8px]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-[#0b1c30]">Need Assistance?</h4>
              <p className="text-[11px] text-[#58413f] leading-normal font-medium">
                Our advisors are available 24/7 for IndusInd Platinum members.
              </p>
            </div>
          </div>
        </section>
      </main>

      <BottomNav currentScreen="DISCOVER" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
