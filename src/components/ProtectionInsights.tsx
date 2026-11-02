import { Shield, Check, Info, TrendingUp, Sparkles, Download, ArrowRight, Lightbulb } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface ProtectionInsightsProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function ProtectionInsights({ navigateTo, transition }: ProtectionInsightsProps) {
  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={true}
        onBackClick={() => navigateTo('PROFILE', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Coverage Score */}
        <section className="bg-gradient-to-br from-white to-[#f8f9ff] border border-[#e5eeff] rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.04)]">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2
                className="text-sm font-bold text-[#0b1c30]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Coverage Score
              </h2>
              <p className="text-[9px] text-[#58413f]/60 font-bold uppercase tracking-wider">
                Overall Financial Security
              </p>
            </div>
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="28" fill="transparent" stroke="#eff4ff" strokeWidth="5" />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="transparent"
                  stroke="#6a0007"
                  strokeWidth="5"
                  strokeDasharray="175.9"
                  strokeDashoffset={175.9 * (1 - 0.85)}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="absolute text-base font-extrabold text-[#6a0007] tracking-tight">85</span>
            </div>
          </div>

          <div className="bg-[#eff4ff] p-3.5 rounded-xl border border-[#e5eeff] flex gap-2.5 items-start">
            <Check className="w-4.5 h-4.5 text-green-700 shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#58413f] leading-relaxed">
              Your protection profile is <span className="text-green-700 font-bold">Strong</span>. You are better protected than 82% of users.
            </p>
          </div>
        </section>

        {/* Premium Spending Chart */}
        <section className="bg-gradient-to-br from-white to-[#f8f9ff] border border-[#e5eeff] rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.04)]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2
                className="text-sm font-bold text-[#0b1c30]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Premium Spending
              </h2>
              <p className="text-[9px] text-[#58413f]/60 font-bold uppercase tracking-wider">
                Yearly View (2024)
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-extrabold text-[#6a0007] tracking-tight">₹1.4L</p>
              <p className="text-[10px] text-green-700 font-bold flex items-center gap-0.5 justify-end">
                <TrendingUp className="w-3.5 h-3.5" />
                +4% vs last year
              </p>
            </div>
          </div>

          {/* Simple animated bar chart */}
          <div className="flex items-end justify-between h-32 gap-3 px-2 pt-2">
            {[
              { label: 'Q1', h: 'h-[40%]' },
              { label: 'Q2', h: 'h-[65%]' },
              { label: 'Q3', h: 'h-[85%]', active: true },
              { label: 'Q4', h: 'h-[55%]' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 relative">
                <div
                  className={`w-full rounded-t-md transition-all duration-700 ${
                    bar.active ? 'bg-[#6a0007]' : 'bg-[#e5eeff] hover:bg-[#dce9ff]'
                  } ${bar.h}`}
                ></div>
                <span className={`text-[10px] font-bold ${bar.active ? 'text-[#6a0007]' : 'text-[#58413f]/60'}`}>
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#e5eeff] pt-3.5 mt-4 flex justify-around text-center">
            <div>
              <p className="text-[10px] text-[#58413f]/60 font-bold uppercase tracking-wider">Life</p>
              <p className="text-xs font-bold text-[#0b1c30]">₹45k</p>
            </div>
            <div className="border-l border-[#e5eeff] h-6 my-auto"></div>
            <div>
              <p className="text-[10px] text-[#58413f]/60 font-bold uppercase tracking-wider">Health</p>
              <p className="text-xs font-bold text-[#0b1c30]">₹62k</p>
            </div>
            <div className="border-l border-[#e5eeff] h-6 my-auto"></div>
            <div>
              <p className="text-[10px] text-[#58413f]/60 font-bold uppercase tracking-wider">Motor</p>
              <p className="text-xs font-bold text-[#0b1c30]">₹33k</p>
            </div>
          </div>
        </section>

        {/* Recommended Actions */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3
              className="text-base font-bold text-[#0b1c30]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Recommended Actions
            </h3>
            <button className="text-xs font-bold text-[#6a0007] hover:underline cursor-pointer">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {/* Action 1: Optimize Car Coverage */}
            <div
              onClick={() => navigateTo('COMPARE_PLANS', 'push')}
              className="bg-[#6a0007] text-white p-5 rounded-2xl shadow-md relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform text-left"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-105 transition-all"></div>
              <div className="flex gap-4 items-start relative z-10">
                <div className="bg-white/10 p-3 rounded-xl shrink-0">
                  <Shield className="w-5.5 h-5.5 text-white" />
                </div>
                <div className="space-y-3 flex-grow">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold">Optimize Car Coverage</h4>
                    <p className="text-xs text-white/80 leading-relaxed">
                      Add Zero-Dep to Car Insurance for better peace of mind. Your current policy doesn't cover depreciation on parts.
                    </p>
                  </div>
                  <button className="bg-white text-[#6a0007] px-4 py-2 rounded-full font-bold text-[10px] flex items-center gap-1 cursor-pointer uppercase tracking-wider shadow-sm">
                    Add Rider <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action 2: Health Top Up */}
            <div className="bg-white border border-[#e0bfbb]/30 p-4 rounded-2xl flex gap-4 shadow-[0px_4px_12px_rgba(140,25,25,0.01)] text-left">
              <div className="bg-[#eff4ff] p-3 rounded-xl shrink-0 text-[#6a0007]">
                <Shield className="w-5.5 h-5.5" />
              </div>
              <div className="space-y-1 flex-grow">
                <h4 className="text-xs font-bold text-[#0b1c30]">Health Top-Up</h4>
                <p className="text-[11px] text-[#58413f] leading-relaxed">
                  Inflation is rising. A ₹5L Top-Up plan costs only ₹240/month.
                </p>
                <p className="text-xs font-bold text-[#735c00] pt-1.5 uppercase tracking-wider">
                  Recommended for Coverage Gap
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Exposure Report */}
        <section className="bg-[#eff4ff] border border-[#e5eeff] rounded-2xl p-4 flex flex-col justify-between space-y-4">
          <div className="flex gap-3.5 items-start">
            <Lightbulb className="w-6 h-6 text-[#6a0007] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-[#0b1c30]">Risk Exposure Report</h4>
              <p className="text-[11px] text-[#58413f] leading-relaxed">
                Our AI analysis indicates you are well-covered for life and health, but slightly under-insured for global travel risks.
              </p>
            </div>
          </div>
          <button className="w-full bg-white hover:bg-slate-50 text-[#6a0007] font-bold text-xs py-3 rounded-xl border border-[#6a0007]/20 flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer">
            <Download className="w-4 h-4" />
            Download Detailed Report
          </button>
        </section>
      </main>

      <BottomNav currentScreen="PROFILE" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
