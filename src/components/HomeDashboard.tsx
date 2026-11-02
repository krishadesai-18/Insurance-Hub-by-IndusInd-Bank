import { Shield, Sparkles, ChevronRight, RefreshCw, AlertTriangle, ArrowLeftRight, ArrowRight } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface HomeDashboardProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function HomeDashboard({ navigateTo, transition }: HomeDashboardProps) {
  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="italic"
        showBack={false}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Welcome Section */}
        <section className="space-y-1">
          <p className="text-xs font-bold text-[#58413f] uppercase tracking-wider">
            Good Morning, Rohan
          </p>
          <h2
            className="text-[26px] font-bold text-[#0b1c30] tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Portfolio Overview
          </h2>
        </section>

        {/* Protection Score Card */}
        <section className="bg-white border border-[#e0bfbb]/30 rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.04)] flex items-center justify-between relative overflow-hidden group active:scale-[0.99] transition-transform">
          <div className="z-10 space-y-3">
            <p className="text-[12px] font-semibold text-[#58413f] uppercase tracking-wider">
              Your Protection Score
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[#6a0007] tracking-tight">85%</span>
              <span className="text-xs font-bold text-[#735c00] bg-[#fed65b]/20 px-2 py-0.5 rounded-full">
                +2% this month
              </span>
            </div>
            <p className="text-xs text-[#58413f]/80 font-medium max-w-[200px] leading-relaxed">
              You're doing better than 92% of users.
            </p>
          </div>

          {/* Visual Progress Arc */}
          <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="transparent"
                stroke="#eff4ff"
                strokeWidth="7"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                fill="transparent"
                stroke="#6a0007"
                strokeWidth="7"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.85)}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute text-[#6a0007] flex items-center justify-center animate-pulse">
              <Shield className="w-9 h-9 stroke-[1.5px] fill-[#6a0007]/5" />
            </div>
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section className="grid grid-cols-4 gap-2.5">
          <button
            onClick={() => navigateTo('BUY_POLICY', 'push')}
            className="flex flex-col items-center justify-center gap-2 p-2 bg-white rounded-xl border border-[#e0bfbb]/20 active:scale-95 duration-150 cursor-pointer shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/15 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007]">
              <Shield className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <span className="text-[10px] font-bold text-[#0b1c30] text-center uppercase tracking-wide">
              Buy Policy
            </span>
          </button>

          <button
            onClick={() => navigateTo('RENEWAL_REMINDER', 'push')}
            className="flex flex-col items-center justify-center gap-2 p-2 bg-white rounded-xl border border-[#e0bfbb]/20 active:scale-95 duration-150 cursor-pointer shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/15 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#735c00]/5 flex items-center justify-center text-[#735c00]">
              <RefreshCw className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <span className="text-[10px] font-bold text-[#0b1c30] text-center uppercase tracking-wide">
              Renew
            </span>
          </button>

          <button
            onClick={() => navigateTo('FILE_CLAIM', 'push')}
            className="flex flex-col items-center justify-center gap-2 p-2 bg-white rounded-xl border border-[#e0bfbb]/20 active:scale-95 duration-150 cursor-pointer shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/15 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/5 flex items-center justify-center text-red-600">
              <AlertTriangle className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <span className="text-[10px] font-bold text-[#0b1c30] text-center uppercase tracking-wide">
              File Claim
            </span>
          </button>

          <button
            onClick={() => navigateTo('COMPARE_PLANS', 'push')}
            className="flex flex-col items-center justify-center gap-2 p-2 bg-white rounded-xl border border-[#e0bfbb]/20 active:scale-95 duration-150 cursor-pointer shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/15 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#213145]/5 flex items-center justify-center text-[#213145]">
              <ArrowLeftRight className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <span className="text-[10px] font-bold text-[#0b1c30] text-center uppercase tracking-wide">
              Compare
            </span>
          </button>
        </section>

        {/* AI Concierge Banner */}
        <section className="bg-gradient-to-r from-[#6a0007] to-[#800d15] text-white rounded-2xl p-4.5 shadow-md flex justify-between items-center relative overflow-hidden group active:scale-[0.99] transition-transform duration-150">
          <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="space-y-1 relative z-10 text-left">
            <div className="flex items-center gap-1.5 text-[#ffe088]">
              <Sparkles className="w-3.5 h-3.5 fill-[#ffe088]/20" />
              <span className="text-[9px] font-extrabold uppercase tracking-wider">AI Concierge Desk</span>
            </div>
            <h4 className="text-xs font-bold leading-snug">Need 1-Tap answers on your cover?</h4>
            <p className="text-[10px] text-white/80 leading-relaxed font-semibold">Our smart assistant is live to analyze your active claims</p>
          </div>
          <button
            onClick={() => navigateTo('AI_ASSISTANT', 'push')}
            className="bg-white hover:bg-[#ffe088] text-[#6a0007] font-bold text-[10px] px-3.5 py-2.5 rounded-xl uppercase tracking-wider shrink-0 shadow-sm relative z-10 active:scale-95 transition-all cursor-pointer"
          >
            Ask AI
          </button>
        </section>

        {/* Active Policies */}
        <section className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3
              className="text-lg font-bold text-[#0b1c30]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Active Policies
            </h3>
            <button
              onClick={() => navigateTo('MY_POLICIES', 'none')}
              className="text-xs font-bold text-[#6a0007] hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {/* Policy Card 1: Motor */}
            <div
              onClick={() => navigateTo('MY_POLICIES', 'none')}
              className="bg-white border border-[#e0bfbb]/20 rounded-2xl p-4 flex gap-4 items-center shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/15 transition-all active:scale-[0.99] duration-150 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-[#f8f9ff] flex items-center justify-center border border-[#e0bfbb]/30 overflow-hidden">
                <img
                  className="w-12 h-12 object-contain"
                  alt="A luxury sedan render"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbZDwVQTdwGIp22GVvPGaAiYveVocVyF6BJkREIrGpWsvEebjHsC_5O3w0quvWcmsHW_Zin_adr9YjKNcXcg54gl1RkefyYFbN6CnpUrip0nbTbL1Ob9QhTqna07Ow-X7Q6k6mHbrTm3QgleHYcefiQ5H57Tya1NpZ_Emw_VJ7LK5INYCOn45F0OqM0xpsjFS8JelNgYm9wE5y0J4dTbCuh9VbG3YFf5ZgD2aRCqKIWRJz6cF0AzR_yR0M5lU8bAjkPQF6fBkt3bk"
                />
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-[#0b1c30]">Motor Insurance</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-[#ffe088] text-[#241a00] rounded-full uppercase tracking-wider">
                    Active
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#58413f]">MH 01 AB 1234</p>
                <p className="text-[10px] text-[#58413f]/60 font-medium">Expires: 15 Oct 2024</p>
              </div>
            </div>

            {/* Policy Card 2: Health */}
            <div
              onClick={() => navigateTo('MY_POLICIES', 'none')}
              className="bg-white border-l-4 border-l-[#6a0007] border border-[#e0bfbb]/20 rounded-2xl p-4 flex gap-4 items-center shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/15 transition-all active:scale-[0.99] duration-150 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-[#f8f9ff] flex items-center justify-center border border-[#e0bfbb]/30 overflow-hidden">
                <img
                  className="w-12 h-12 object-contain"
                  alt="Medical cross 3D"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_BjTxbaUAhEw2-uibRqre8KLIFkXY1z3uXZbetOn3EOcHJXvU3yEmCY8YoF-UheNskxnqzB9pYgIpsB4Eset1js4jjM94s65Nzg_5srRU9_oH6O-b8VcPLoWt-su8A3vPfyWAf_pDgSmdCqcehKs8RVLgmlQ6qRje511BK6p-tYZivnx6gKg4Ly8l_hYyXVMfOdQYqdWqZa013rwlGhO0U9wPITiuUP2KiXX9oTwiWS-XMhfQkNH4fsdR04i6DElUQ0DFNQtMNSA"
                />
              </div>
              <div className="flex-grow space-y-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-bold text-[#0b1c30]">Health Insurance</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-[#ffe088] text-[#241a00] rounded-full uppercase tracking-wider">
                    Active
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#58413f]">Family Floater</p>
                <p className="text-[10px] text-[#6a0007] font-bold">₹10L Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Insight Card */}
        <section className="bg-[#6a0007] p-5 rounded-2xl shadow-lg overflow-hidden relative group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
          <div className="relative z-10 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">
                  AI INSIGHT
                </span>
                <p className="text-xs text-white leading-relaxed font-medium">
                  You might be underinsured for Health. Medical costs are rising—explore our top-up plans.
                </p>
              </div>
              <button
                onClick={() => navigateTo('COMPARE_PLANS', 'push')}
                className="bg-[#fed65b] text-[#241a00] px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer shadow-md shadow-[#6a0007]/20"
              >
                Explore Plans
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <BottomNav currentScreen="HOME" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
