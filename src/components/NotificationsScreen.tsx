import { Mail, Shield, AlertTriangle, Gift, Clock, Trash2, ArrowRight } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface NotificationsScreenProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function NotificationsScreen({ navigateTo, transition }: NotificationsScreenProps) {
  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={true}
        onBackClick={() => navigateTo('HOME', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={false}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Quick Stats Banners */}
        <section className="grid grid-cols-2 gap-3.5">
          <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#e5eeff] flex flex-col justify-between h-28 relative overflow-hidden group active:scale-95 transition-transform duration-200 cursor-pointer">
            <div>
              <p className="text-[10px] font-bold tracking-wider text-[#58413f]/60 uppercase mb-1">
                UNREAD
              </p>
              <p className="text-3xl font-extrabold text-[#6a0007] tracking-tight">3</p>
            </div>
            <p className="text-xs font-bold text-[#0b1c30] flex items-center gap-0.5">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </p>
            <Mail className="absolute -right-2 -bottom-2 w-16 h-16 text-[#6a0007]/5 group-hover:scale-110 transition-transform" />
          </div>

          <div className="bg-[#6a0007] text-white p-4 rounded-xl border border-[#6a0007]/10 flex flex-col justify-between h-28 relative overflow-hidden group active:scale-95 transition-transform duration-200 cursor-pointer shadow-md shadow-[#6a0007]/5">
            <div>
              <p className="text-[10px] font-bold tracking-wider text-white/60 uppercase mb-1">
                URGENT
              </p>
              <p className="text-3xl font-extrabold text-white tracking-tight">1</p>
            </div>
            <p className="text-xs font-bold text-white flex items-center gap-0.5">
              Take Action <ArrowRight className="w-3.5 h-3.5 text-[#ffe088]" />
            </p>
            <AlertTriangle className="absolute -right-2 -bottom-2 w-16 h-16 text-white/5 group-hover:scale-110 transition-transform" />
          </div>
        </section>

        {/* Notifications list: Today */}
        <section className="space-y-3.5">
          <h2 className="text-[10px] font-extrabold text-[#58413f]/60 uppercase tracking-widest px-1">
            Today
          </h2>

          <div className="space-y-3">
            {/* Urgent: Renewal Reminder */}
            <div className="bg-white border border-[#e0bfbb]/30 rounded-2xl p-4 flex gap-4 border-l-4 border-l-[#6a0007] shadow-sm">
              <div className="w-11 h-11 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007] shrink-0 border border-[#6a0007]/10">
                <AlertTriangle className="w-5.5 h-5.5 stroke-[1.8px]" />
              </div>
              <div className="space-y-3 flex-grow text-left">
                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-[#0b1c30]">Renewal Reminder</h3>
                    <span className="text-[10px] text-[#58413f]/60 font-semibold uppercase">2h ago</span>
                  </div>
                  <p className="text-xs text-[#58413f] leading-relaxed">
                    Your Car policy expires in 7 days. Renew now to maintain continuous coverage and your No Claim Bonus.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('RENEWAL_REMINDER', 'push')}
                  className="bg-[#6a0007] text-white px-4 py-2.5 rounded-xl font-bold text-[10px] hover:opacity-90 active:scale-95 transition-all flex items-center gap-1 shadow-md shadow-[#6a0007]/10 cursor-pointer uppercase tracking-wider"
                >
                  Renew Policy
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Info: Claim Update */}
            <div
              onClick={() => navigateTo('CLAIM_TRACKING', 'push')}
              className="bg-white border border-[#e0bfbb]/20 rounded-2xl p-4 flex gap-4 shadow-[0px_4px_12px_rgba(140,25,25,0.01)] hover:border-[#6a0007]/10 cursor-pointer active:scale-[0.99] transition-all text-left"
            >
              <div className="w-11 h-11 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#6a0007] shrink-0">
                <Shield className="w-5.5 h-5.5 stroke-[1.8px] fill-[#6a0007]/5" />
              </div>
              <div className="space-y-0.5 flex-grow">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-[#0b1c30]">Claim Update</h3>
                  <span className="text-[10px] text-[#58413f]/60 font-semibold uppercase">5h ago</span>
                </div>
                <p className="text-xs text-[#58413f] leading-relaxed">
                  Surveyor assigned for claim <span className="font-bold text-[#0b1c30]">#IND-CLM-778</span>. They will contact you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notifications list: Earlier This Week */}
        <section className="space-y-3.5">
          <h2 className="text-[10px] font-extrabold text-[#58413f]/60 uppercase tracking-widest px-1">
            Earlier this week
          </h2>

          <div className="space-y-3">
            {/* Offer Benefit */}
            <div className="bg-white border border-[#e0bfbb]/20 rounded-2xl p-4 flex gap-4 shadow-[0px_4px_12px_rgba(140,25,25,0.01)]">
              <div className="w-11 h-11 rounded-full bg-[#fed65b]/20 flex items-center justify-center text-[#735c00] shrink-0">
                <Gift className="w-5.5 h-5.5 stroke-[1.8px] fill-[#735c00]/5" />
              </div>
              <div className="space-y-3 flex-grow text-left">
                <div className="space-y-0.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-[#0b1c30]">New Benefit</h3>
                    <span className="text-[10px] text-[#58413f]/60 font-semibold uppercase">Tue</span>
                  </div>
                  <p className="text-xs text-[#58413f] leading-relaxed">
                    15% discount on Health top-ups for you. Exclusive loyalty reward for your continued trust.
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <button className="border border-[#6a0007] text-[#6a0007] hover:bg-[#6a0007]/5 px-4 py-2 rounded-xl font-bold text-[10px] transition-all cursor-pointer uppercase tracking-wider">
                    Claim Offer
                  </button>
                  <button className="text-[#58413f]/70 hover:underline px-4 py-2 font-bold text-[10px] uppercase tracking-wider cursor-pointer">
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Security Login */}
            <div className="bg-white border border-[#e0bfbb]/20 rounded-2xl p-4 flex gap-4 shadow-[0px_4px_12px_rgba(140,25,25,0.01)] opacity-60">
              <div className="w-11 h-11 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#58413f] shrink-0">
                <Shield className="w-5.5 h-5.5 stroke-[1.8px]" />
              </div>
              <div className="space-y-0.5 flex-grow text-left">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-[#0b1c30]">Security Login</h3>
                  <span className="text-[10px] text-[#58413f]/60 font-semibold uppercase">Mon</span>
                </div>
                <p className="text-xs text-[#58413f] leading-relaxed">
                  New login detected on iPhone 15 Pro, Mumbai. If this wasn't you, secure your account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Empty status message */}
        <div className="py-8 flex flex-col items-center justify-center text-center opacity-40 gap-1.5">
          <Clock className="w-5 h-5 text-[#58413f]" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#58413f]">
            End of notifications for the last 7 days
          </p>
        </div>
      </main>

      {/* Floating clear all trigger */}
      <button className="absolute bottom-24 right-5 bg-[#0b1c30] hover:bg-slate-800 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center active:scale-95 z-40 transition-all cursor-pointer">
        <Trash2 className="w-5.5 h-5.5" />
      </button>

      <BottomNav currentScreen="PROFILE" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
