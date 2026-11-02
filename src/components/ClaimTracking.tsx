import { Shield, ArrowLeft, Phone, Calendar, Info, Clock, Check, HelpCircle, ChevronRight, Headphones } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface ClaimTrackingProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function ClaimTracking({ navigateTo, transition }: ClaimTrackingProps) {
  const timelineSteps = [
    { label: 'Submitted', desc: 'Your claim documents were successfully received on Oct 24.', status: 'completed' },
    { label: 'Under Review', desc: 'Policy coverage verification completed by our backend team.', status: 'completed' },
    { label: 'Survey / Verification', desc: 'Field officer is currently inspecting the vehicle damage.', status: 'active' },
    { label: 'Approval', desc: 'Awaiting final assessment report from the surveyor.', status: 'pending' },
    { label: 'Settlement', desc: 'Funds will be disbursed to your registered bank account.', status: 'pending' },
  ];

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={true}
        onBackClick={() => navigateTo('MY_POLICIES', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Claim Summary Card */}
        <section className="bg-white border border-[#e0bfbb]/20 shadow-[0px_4px_20px_rgba(140,25,25,0.04)] rounded-2xl p-4 flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] font-bold tracking-wider text-[#58413f]/60 uppercase">Claim ID</p>
            <h2
              className="text-xl font-bold text-[#6a0007] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              #IND-CLM-778
            </h2>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#735c00] animate-ping"></span>
              <p className="text-[11px] text-[#0b1c30] font-bold">Motor Insurance Protection</p>
            </div>
          </div>
          <span className="bg-[#fed65b]/20 text-[#735c00] font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            In Progress
          </span>
        </section>

        {/* Status Update Banner */}
        <section className="bg-[#6a0007] text-white rounded-2xl p-4 shadow-md flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Info className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-3 flex-1">
            <div className="space-y-0.5">
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Current Update</p>
              <p className="text-xs font-semibold leading-relaxed">
                Surveyor assigned. Contact: Rajesh Kumar (+91 98XXX...)
              </p>
            </div>
            <div className="inline-flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              Est. Res: 3-5 business days
            </div>
          </div>
        </section>

        {/* Timeline Journey */}
        <section className="space-y-4">
          <h3
            className="text-base font-bold text-[#6a0007]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Claim Journey
          </h3>

          <div className="relative pl-7 space-y-6">
            {/* Vertical Line indicator */}
            <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#fed65b]/30"></div>

            {timelineSteps.map((step, i) => {
              const isActive = step.status === 'active';
              const isCompleted = step.status === 'completed';

              return (
                <div key={i} className="relative flex gap-4 items-start">
                  {/* Timeline Badge icon */}
                  <div
                    className={`absolute -left-[27px] w-6 h-6 rounded-full flex items-center justify-center border-4 border-[#f8f9ff] z-10 transition-all ${
                      isCompleted
                        ? 'bg-green-600 text-white'
                        : isActive
                        ? 'bg-[#6a0007] text-white scale-110 shadow-md ring-4 ring-[#6a0007]/10'
                        : 'bg-slate-200 border-slate-100'
                    }`}
                  >
                    {isCompleted && <Check className="w-3 h-3 stroke-[3px]" />}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </div>

                  <div className={`space-y-0.5 ${isActive ? 'opacity-100' : isCompleted ? 'opacity-85' : 'opacity-50'}`}>
                    <h4 className={`text-xs font-bold ${isActive ? 'text-[#6a0007]' : isCompleted ? 'text-green-700' : 'text-[#0b1c30]'}`}>
                      {step.label}
                    </h4>
                    <p className="text-[11px] text-[#58413f] leading-relaxed">{step.desc}</p>

                    {isActive && (
                      <button className="mt-2.5 bg-white border border-[#6a0007]/20 hover:bg-[#6a0007]/5 text-[10px] font-bold text-[#6a0007] py-2 px-4 rounded-xl flex items-center gap-1 active:scale-95 transition-all cursor-pointer">
                        <Phone className="w-3.5 h-3.5" />
                        Contact Officer
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Assistance Card Redirect (xpath: a[contains(., 'Need Assistance?')]) -> Screen 17029257189375536605 */}
        <section className="pt-2">
          <button
            onClick={() => navigateTo('SUPPORT', 'push')}
            className="w-full bg-[#e5eeff] hover:bg-[#dce9ff] border border-[#e0bfbb]/10 rounded-2xl p-4 flex items-center justify-between transition-all active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#735c00] shadow-sm">
                <Headphones className="w-5.5 h-5.5 stroke-[1.8px]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0b1c30]">Need Assistance?</p>
                <p className="text-[11px] text-[#58413f]/80 leading-normal font-medium">Talk to our claims expert</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#58413f]/80" />
          </button>
        </section>
      </main>

      <BottomNav currentScreen="MY_POLICIES" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
