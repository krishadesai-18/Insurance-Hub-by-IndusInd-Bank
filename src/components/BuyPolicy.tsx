import React, { useState } from 'react';
import { Shield, Check, User, ChevronRight, Lock, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface BuyPolicyProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function BuyPolicy({ navigateTo, transition }: BuyPolicyProps) {
  const [roadside, setRoadside] = useState(true);
  const [engineProtect, setEngineProtect] = useState(false);
  const [accidentCover, setAccidentCover] = useState(true);
  const [paymentState, setPaymentState] = useState<'idle' | 'processing' | 'success'>('idle');

  // Calculation
  const basePremium = 14200;
  let addOnsCost = 0;
  if (roadside) addOnsCost += 499;
  if (engineProtect) addOnsCost += 1250;
  if (accidentCover) addOnsCost += 350;

  const gst = Math.round((basePremium + addOnsCost) * 0.18);
  const total = basePremium + addOnsCost + gst;

  const handlePayment = (e: React.MouseEvent) => {
    e.preventDefault();
    setPaymentState('processing');
    setTimeout(() => {
      setPaymentState('success');
      setTimeout(() => {
        navigateTo('HOME', 'push');
      }, 1000);
    }, 1500);
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="italic"
        showBack={true}
        onBackClick={() => navigateTo('COMPARE_PLANS', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Progress Stepper */}
        <section className="relative py-2 px-1">
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#6a0007]/10 text-[#6a0007] flex items-center justify-center font-extrabold text-xs">
                1
              </div>
              <span className="text-[10px] font-bold text-[#6a0007] uppercase tracking-wider">Details</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#6a0007] text-white flex items-center justify-center font-extrabold text-xs ring-4 ring-[#6a0007]/10">
                2
              </div>
              <span className="text-[10px] font-bold text-[#6a0007] uppercase tracking-wider">Add-ons</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#58413f]/60 flex items-center justify-center font-extrabold text-xs">
                3
              </div>
              <span className="text-[10px] font-bold text-[#58413f]/60 uppercase tracking-wider">Payment</span>
            </div>
          </div>
          {/* Progress Line */}
          <div className="absolute top-6 left-8 right-8 h-[2px] bg-[#eff4ff] -z-0">
            <div className="h-full bg-[#6a0007] w-1/2 rounded-full"></div>
          </div>
        </section>

        {/* Policy Holder Card */}
        <section className="bg-white border border-[#e0bfbb]/30 rounded-2xl p-4 shadow-[0px_4px_12px_rgba(140,25,25,0.01)] space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#0b1c30]">Policy Holder</h3>
            <span className="px-2 py-0.5 bg-[#fed65b]/20 text-[#735c00] text-[9px] font-extrabold uppercase tracking-wider rounded">
              Verified KYC
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007] border border-[#6a0007]/10">
              <User className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0b1c30]">Rohan Malhotra</p>
              <div className="flex items-center gap-1">
                {/* Simulated bank corporate logo */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#6a0007]"></span>
                <p className="text-[10px] text-[#58413f]/60 font-semibold uppercase tracking-wider">
                  IndusInd Bank Limited
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons List */}
        <section className="space-y-3">
          <div className="flex items-end justify-between px-1">
            <h3 className="text-sm font-bold text-[#0b1c30]">Enhance Your Cover</h3>
            <span className="text-[10px] font-bold text-[#6a0007] uppercase tracking-wider">
              Recommended
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Roadside */}
            <div
              onClick={() => setRoadside(!roadside)}
              className={`flex items-center gap-4 p-4 bg-white border rounded-2xl transition-all duration-200 cursor-pointer hover:shadow-md ${
                roadside ? 'border-[#6a0007] bg-[#6a0007]/5' : 'border-[#e0bfbb]/30'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${roadside ? 'bg-[#6a0007] text-white' : 'bg-[#eff4ff] text-[#6a0007]'}`}>
                <Check className="w-5 h-5" />
              </div>
              <div className="flex-grow space-y-0.5">
                <p className="text-xs font-bold text-[#0b1c30]">Roadside Assistance</p>
                <p className="text-[10px] text-[#58413f]/80 leading-normal font-medium">24/7 Breakdown support & towing</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs font-bold text-[#6a0007]">+ ₹499</p>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mx-auto ${roadside ? 'bg-[#6a0007] border-[#6a0007]' : 'border-[#e0bfbb]'}`}>
                  {roadside && <Check className="w-3.5 h-3.5 text-white stroke-[2.5px]" />}
                </div>
              </div>
            </div>

            {/* Engine Protect */}
            <div
              onClick={() => setEngineProtect(!engineProtect)}
              className={`flex items-center gap-4 p-4 bg-white border rounded-2xl transition-all duration-200 cursor-pointer hover:shadow-md ${
                engineProtect ? 'border-[#6a0007] bg-[#6a0007]/5' : 'border-[#e0bfbb]/30'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${engineProtect ? 'bg-[#6a0007] text-white' : 'bg-[#eff4ff] text-[#6a0007]'}`}>
                <Check className="w-5 h-5" />
              </div>
              <div className="flex-grow space-y-0.5">
                <p className="text-xs font-bold text-[#0b1c30]">Engine Protect</p>
                <p className="text-[10px] text-[#58413f]/80 leading-normal font-medium">Coverage for water ingression</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs font-bold text-[#6a0007]">+ ₹1,250</p>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mx-auto ${engineProtect ? 'bg-[#6a0007] border-[#6a0007]' : 'border-[#e0bfbb]'}`}>
                  {engineProtect && <Check className="w-3.5 h-3.5 text-white stroke-[2.5px]" />}
                </div>
              </div>
            </div>

            {/* Personal Accident */}
            <div
              onClick={() => setAccidentCover(!accidentCover)}
              className={`flex items-center gap-4 p-4 bg-white border rounded-2xl transition-all duration-200 cursor-pointer hover:shadow-md ${
                accidentCover ? 'border-[#6a0007] bg-[#6a0007]/5' : 'border-[#e0bfbb]/30'
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${accidentCover ? 'bg-[#6a0007] text-white' : 'bg-[#eff4ff] text-[#6a0007]'}`}>
                <Check className="w-5 h-5" />
              </div>
              <div className="flex-grow space-y-0.5">
                <p className="text-xs font-bold text-[#0b1c30]">Personal Accident Cover</p>
                <p className="text-[10px] text-[#58413f]/80 leading-normal font-medium">Owner-Driver cover up to ₹15L</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs font-bold text-[#6a0007]">+ ₹350</p>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mx-auto ${accidentCover ? 'bg-[#6a0007] border-[#6a0007]' : 'border-[#e0bfbb]'}`}>
                  {accidentCover && <Check className="w-3.5 h-3.5 text-white stroke-[2.5px]" />}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section className="bg-white border border-[#e0bfbb]/20 shadow-[0px_4px_12px_rgba(140,25,25,0.01)] rounded-2xl overflow-hidden">
          <div className="p-4 space-y-2.5">
            <div className="flex justify-between items-center text-xs text-[#58413f]/80 font-medium">
              <span>Base Premium</span>
              <span className="font-semibold text-[#0b1c30]">₹{basePremium.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-[#58413f]/80 font-medium">
              <span>Add-ons selected</span>
              <span className="font-semibold text-[#0b1c30]">₹{addOnsCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-[#58413f]/80 font-medium">
              <span>GST (18%)</span>
              <span className="font-semibold text-[#0b1c30]">₹{gst.toLocaleString()}</span>
            </div>
            <div className="pt-2.5 mt-2 border-t border-dashed border-[#e5eeff] flex justify-between items-center">
              <span className="text-xs font-bold text-[#0b1c30]">Total Payable</span>
              <span className="text-lg font-bold text-[#6a0007]">₹{total.toLocaleString()}</span>
            </div>
          </div>
          <div className="bg-[#6a0007]/5 border-t border-[#6a0007]/10 px-4 py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#6a0007] uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 fill-[#6a0007]/10" />
            Secured by IndusInd Bank
          </div>
        </section>

        {/* Pay button */}
        <div className="pt-2">
          <button
            id="pay-button"
            disabled={paymentState !== 'idle'}
            onClick={handlePayment}
            className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
              paymentState === 'success'
                ? 'bg-green-600 text-white shadow-green-600/10'
                : 'bg-[#6a0007] text-white shadow-[#6a0007]/10 active:scale-95'
            }`}
          >
            {paymentState === 'idle' && (
              <>
                Proceed to Secure Payment
                <Lock className="w-4 h-4" />
              </>
            )}
            {paymentState === 'processing' && (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing Secure Payment...
              </>
            )}
            {paymentState === 'success' && (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Payment Successful!
              </>
            )}
          </button>
        </div>
      </main>

      <BottomNav currentScreen="DISCOVER" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
