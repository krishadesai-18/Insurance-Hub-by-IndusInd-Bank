import { useState } from 'react';
import { Shield, Bolt, Car, Clock, Sparkles, Check, Phone, ArrowRight, Zap, RefreshCw, ChevronRight, Loader2, CheckCircle2, Download, Landmark } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface RenewalReminderProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function RenewalReminder({ navigateTo, transition }: RenewalReminderProps) {
  const [renewalState, setRenewalState] = useState<'reminder' | 'processing' | 'confirmed'>('reminder');
  const [processingStep, setProcessingStep] = useState(0);

  const handleRenewNow = () => {
    setRenewalState('processing');
    setProcessingStep(0);
    
    // Simulate multi-step secure payment processing
    setTimeout(() => {
      setProcessingStep(1);
      setTimeout(() => {
        setProcessingStep(2);
        setTimeout(() => {
          setRenewalState('confirmed');
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const getProcessingText = () => {
    switch (processingStep) {
      case 0:
        return 'Authenticating Secure MPIN Session...';
      case 1:
        return 'Authorizing Funds with IndusInd Savings...';
      case 2:
        return 'Generating Digitally Signed Certificate...';
      default:
        return 'Connecting to Private Vault...';
    }
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={renewalState === 'reminder'}
        onBackClick={() => navigateTo('HOME', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      {renewalState === 'reminder' && (
        <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
          {/* Urgent Alert Banner */}
          <section className="relative overflow-hidden rounded-2xl bg-white border border-[#ffe088] p-5 shadow-lg">
            <div className="absolute top-4 right-4 flex items-center gap-1">
              <span className="w-2.5 h-2.5 bg-[#6a0007] rounded-full animate-ping"></span>
              <span className="w-2.5 h-2.5 bg-[#6a0007] rounded-full"></span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#6a0007] tracking-widest uppercase">
                  Policy Renewal
                </span>
                <h2
                  className="text-xl font-extrabold text-[#0b1c30] leading-tight"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Your Motor Insurance <br />
                  expires in <span className="text-[#6a0007]">7 days!</span>
                </h2>
                <p className="text-[11px] text-[#58413f]/80 leading-relaxed font-semibold">
                  Policy No: IND-MOT-99210 • Honda City (MH01-CE-1234)
                </p>
              </div>

              {/* NCB savings highlight */}
              <div className="bg-[#eff4ff] rounded-xl p-3 flex items-start gap-2.5 border border-[#e5eeff]">
                <Sparkles className="w-4.5 h-4.5 text-[#735c00] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#0b1c30]">Retain your 20% No-Claim Bonus</p>
                  <p className="text-[11px] text-[#58413f] leading-normal font-medium">
                    Secure your savings by renewing before <span className="font-bold text-[#0b1c30]">15 Oct</span>.
                  </p>
                </div>
              </div>

              {/* Action button */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleRenewNow}
                  className="w-full bg-[#6a0007] text-white font-bold text-xs py-3.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  Renew Now in 1-Tap
                  <Zap className="w-4 h-4 text-[#ffe088]" />
                </button>
                <p className="text-center text-[10px] font-bold text-[#58413f]/60 uppercase tracking-widest">
                  ₹12,450 inclusive of GST
                </p>
              </div>
            </div>
          </section>

          {/* Elite Enhancements */}
          <section className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h3
                className="text-base font-bold text-[#0b1c30]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Elite Enhancements
              </h3>
              <span className="text-[10px] font-bold text-[#6a0007] tracking-widest uppercase">
                View All
              </span>
            </div>

            <div className="space-y-3">
              {/* PA Cover */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-[#e0bfbb]/30 flex flex-col justify-between h-40 group cursor-pointer active:scale-[0.99] transition-transform">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-[#fed65b]/20 rounded-full flex items-center justify-center text-[#735c00]">
                    <Shield className="w-5 h-5 fill-[#735c00]/10" />
                  </div>
                  <div className="bg-[#6a0007] text-white font-bold text-[8px] px-2.5 py-0.5 rounded uppercase tracking-widest">
                    BEST VALUE
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0b1c30]">Add Personal Accident cover</h4>
                  <div className="flex justify-between items-end mt-1">
                    <p className="text-[10px] text-[#58413f]/80 leading-normal font-semibold">
                      Coverage up to ₹15 Lakhs
                    </p>
                    <p className="text-sm font-extrabold text-[#6a0007]">
                      ₹350<span className="text-[10px] text-[#58413f]/60 font-medium">/yr</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Zero Dep Banner */}
              <div className="bg-white border border-[#e0bfbb]/20 rounded-2xl overflow-hidden shadow-sm flex h-28 hover:border-[#6a0007]/10 transition-colors">
                <div
                  className="w-1/3 h-full bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDedDOgmLrBAcuY_zWG24fAZdhP0wn09D4fUaAtfltJB9a9gecxCqXMJ72qSScfUPGVf66boS_uH821NOne5s4QTY7cWxW18Y293K9YUmuLGUnDhQcecs42Nbsq83C2vTMxAfrhDTEvubTxW6Gcameuf5fANozZhpg8OeFMLM762AytsfWM_XfMU4FoUdfyTg_0tLtHNOgerMH1CsWaDaAiDdlIHasCE8ljqzWsemetoWygqxa23sF1Fjpg2wGbz01tVfalNmjHX_E')`,
                  }}
                ></div>
                <div className="w-2/3 p-4 flex flex-col justify-center space-y-1 text-left">
                  <h4 className="text-xs font-bold text-[#0b1c30]">Zero Depreciation</h4>
                  <p className="text-[10px] text-[#58413f]/80 leading-normal font-medium">
                    Get full claims without any parts deduction.
                  </p>
                  <button className="text-[#6a0007] font-bold text-[10px] flex items-center gap-0.5 pt-1 uppercase tracking-wider hover:underline cursor-pointer">
                    ADD FOR ₹1,200 <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Why IndusProtect */}
          <section className="bg-[#e5eeff] rounded-3xl p-5 border border-white text-center space-y-4">
            <h3
              className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Why renew with IndusProtect?
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6a0007] shadow-sm">
                  <Bolt className="w-5 h-5 fill-[#6a0007]/5" />
                </div>
                <p className="text-[10px] font-bold text-[#0b1c30]">20-Min Claims</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6a0007] shadow-sm">
                  <Car className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold text-[#0b1c30]">4500+ Garages</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6a0007] shadow-sm">
                  <Shield className="w-5 h-5 fill-[#6a0007]/5" />
                </div>
                <p className="text-[10px] font-bold text-[#0b1c30]">Instant Policy</p>
              </div>
            </div>
          </section>

          {/* Secondary Contact Trigger */}
          <div className="flex items-center justify-center gap-2.5 py-4 border-t border-[#e0bfbb]/20">
            <p className="text-xs text-[#58413f] font-medium">Need assistance?</p>
            <button
              onClick={() => navigateTo('SUPPORT', 'push')}
              className="flex items-center gap-1 text-[#6a0007] font-bold text-xs uppercase tracking-wider hover:underline cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Manager
            </button>
          </div>
        </main>
      )}

      {renewalState === 'processing' && (
        <main className="flex-grow flex flex-col justify-center items-center p-6 text-center space-y-6">
          <div className="w-20 h-20 bg-[#6a0007]/5 border border-[#6a0007]/10 rounded-2xl flex items-center justify-center animate-pulse shadow-md">
            <Loader2 className="w-10 h-10 text-[#6a0007] animate-spin stroke-[1.5px]" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#0b1c30]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              1-Tap Secure Renewal
            </h3>
            <p className="text-xs text-green-700 font-extrabold tracking-widest uppercase flex items-center justify-center gap-1">
              <Landmark className="w-3.5 h-3.5" />
              Secure Banking Protocol
            </p>
          </div>

          <p className="text-xs text-[#58413f]/80 max-w-[260px] leading-relaxed font-semibold min-h-[40px] animate-fadeIn">
            {getProcessingText()}
          </p>

          <div className="w-full max-w-[280px] bg-[#eff4ff] rounded-full h-1.5 overflow-hidden border border-[#e5eeff]">
            <div 
              className="bg-[#6a0007] h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${(processingStep + 1) * 33.3}%` }}
            ></div>
          </div>

          <div className="text-[10px] text-[#58413f]/40 uppercase tracking-widest font-semibold pt-12">
            Secured by IndusInd Digital Vault • 256-Bit SSL
          </div>
        </main>
      )}

      {renewalState === 'confirmed' && (
        <main className="flex-grow p-5 pb-24 space-y-6 overflow-y-auto animate-fadeIn">
          {/* Confirmed Header Status */}
          <div className="text-center space-y-3 pt-4">
            <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto border border-green-500/20 shadow-lg shadow-green-500/5">
              <CheckCircle2 className="w-9 h-9 stroke-[1.5px]" />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl font-extrabold text-[#0b1c30]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Renewal Complete!
              </h2>
              <p className="text-xs text-[#58413f]/80 font-medium">
                Honda City is protected until <span className="font-bold text-[#0b1c30]">15 Oct 2025</span>
              </p>
            </div>
          </div>

          {/* Interactive Receipt */}
          <section className="bg-white border border-[#e0bfbb]/30 rounded-2xl overflow-hidden shadow-lg shadow-[#6a0007]/5">
            <div className="p-5 space-y-3.5">
              <div className="flex justify-between items-baseline border-b border-[#e5eeff] pb-3">
                <span className="text-[10px] font-bold text-[#58413f]/60 uppercase tracking-wider">Policy Receipt</span>
                <span className="bg-[#fed65b] text-[#241a00] text-[8px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider">
                  Success
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between font-medium text-[#58413f]/80">
                  <span>Policy ID</span>
                  <span className="font-bold text-[#0b1c30]">IND-MOT-99210-R2024</span>
                </div>
                <div className="flex justify-between font-medium text-[#58413f]/80">
                  <span>Transaction ID</span>
                  <span className="font-bold text-[#0b1c30]">TXN-IND-883719024</span>
                </div>
                <div className="flex justify-between font-medium text-[#58413f]/80">
                  <span>NCB Applied</span>
                  <span className="font-bold text-green-700">20% Loyalty Bonus</span>
                </div>
                <div className="flex justify-between font-medium text-[#58413f]/80">
                  <span>Base Premium</span>
                  <span className="font-bold text-[#0b1c30]">₹10,551</span>
                </div>
                <div className="flex justify-between font-medium text-[#58413f]/80">
                  <span>GST (18%)</span>
                  <span className="font-bold text-[#0b1c30]">₹1,899</span>
                </div>
                
                <div className="pt-3 border-t border-dashed border-[#e0bfbb]/40 flex justify-between items-center">
                  <span className="font-bold text-[#0b1c30]">Total Paid</span>
                  <span className="text-lg font-extrabold text-[#6a0007]">₹12,450</span>
                </div>
              </div>
            </div>

            <div className="bg-[#6a0007]/5 border-t border-[#6a0007]/10 px-5 py-3 flex justify-between items-center text-[10px] font-bold text-[#6a0007] uppercase tracking-wider">
              <span>Paid via IndusInd Savings</span>
              <span>••• 4210</span>
            </div>
          </section>

          {/* Confirmed Actions */}
          <div className="space-y-2.5 pt-2">
            <button className="w-full bg-[#6a0007] hover:bg-[#6a0007]/95 text-white py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer shadow-md shadow-[#6a0007]/10 uppercase tracking-wider">
              <Download className="w-4 h-4" />
              Download Policy PDF
            </button>
            <button 
              onClick={() => navigateTo('HOME', 'push_back')}
              className="w-full bg-white border border-[#6a0007]/20 hover:bg-[#6a0007]/5 text-[#6a0007] py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
            >
              Back to Portfolio Overview
            </button>
          </div>
        </main>
      )}

      <BottomNav currentScreen="MY_POLICIES" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
