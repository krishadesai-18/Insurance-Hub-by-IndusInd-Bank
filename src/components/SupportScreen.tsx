import { Mail, Phone, Clock, MessageSquare, ArrowRight, ShieldCheck, ChevronRight, User } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface SupportScreenProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function SupportScreen({ navigateTo, transition }: SupportScreenProps) {
  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={true}
        onBackClick={() => navigateTo('HOME', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        <section className="space-y-1">
          <p className="text-xs font-bold text-[#58413f] uppercase tracking-wider">
            Premium Concierge Desk
          </p>
          <h2
            className="text-xl font-bold text-[#0b1c30]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Assistance & Support
          </h2>
        </section>

        {/* Dedicated Officer Profile Card */}
        <section className="bg-white border border-[#e0bfbb]/30 rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.03)] space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007] border border-[#6a0007]/10 overflow-hidden">
                <User className="w-8 h-8 stroke-[1.5px]" />
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <p className="text-[10px] text-[#58413f]/60 font-bold uppercase tracking-wider">
                Relationship Manager
              </p>
              <h3 className="text-sm font-bold text-[#0b1c30]">Vikram Aditya Sen</h3>
              <p className="text-[10px] text-green-700 font-bold uppercase tracking-widest flex items-center gap-1 pt-0.5">
                <ShieldCheck className="w-3 h-3 fill-green-500/10" />
                Active Elite Advisor
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5 pt-1">
            <a
              href="tel:+919876543210"
              className="bg-[#6a0007] hover:bg-[#6a0007]/95 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-md shadow-[#6a0007]/10"
            >
              <Phone className="w-4 h-4" />
              Call Advisor
            </a>
            <a
              href="mailto:elite.support@indusind.com"
              className="bg-white border border-[#6a0007]/20 hover:bg-[#6a0007]/5 text-[#6a0007] font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <Mail className="w-4 h-4" />
              Email RM
            </a>
          </div>
        </section>

        {/* Operating Hours Banner */}
        <section className="bg-[#eff4ff] border border-[#e5eeff] rounded-2xl p-4 flex gap-3.5 items-start">
          <Clock className="w-5 h-5 text-[#6a0007] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-[#0b1c30]">Response Standards</h4>
            <p className="text-[11px] text-[#58413f] leading-relaxed">
              Available 24/7 for active claims emergencies. General inquiries are resolved within 2-4 business hours.
            </p>
          </div>
        </section>

        {/* Fast Action Callback Form */}
        <section className="space-y-3">
          <h3
            className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider px-1"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Request Quick Callback
          </h3>
          <div className="bg-white border border-[#e0bfbb]/20 rounded-2xl p-4 space-y-4">
            <p className="text-[11px] text-[#58413f]/80 leading-relaxed font-semibold">
              Enter your request priority and we will route your profile to an expert.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 py-2.5 bg-[#6a0007]/5 border border-[#6a0007]/15 rounded-xl text-xs font-bold text-[#6a0007] text-center active:scale-95 transition-all">
                Urgent (Claims)
              </button>
              <button className="flex-1 py-2.5 bg-[#f8f9ff] border border-[#e0bfbb]/30 rounded-xl text-xs font-bold text-[#58413f] text-center active:scale-95 transition-all">
                General Enquiry
              </button>
            </div>
            <button className="w-full bg-[#6a0007] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1 cursor-pointer">
              Submit Request
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Help Directory */}
        <section className="space-y-2">
          <h3
            className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider px-1"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Frequently Answered
          </h3>
          <div className="space-y-2">
            {[
              'How is my Protection Score calculated?',
              'What documents are needed for active motor claims?',
              'Can I pay premium installments in EMI?',
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#e0bfbb]/20 rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:border-[#6a0007]/10"
              >
                <p className="text-xs font-bold text-[#58413f]">{faq}</p>
                <ChevronRight className="w-4 h-4 text-[#58413f]/60" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav currentScreen="AI_ASSISTANT" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
