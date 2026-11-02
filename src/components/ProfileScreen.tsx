import { useState } from 'react';
import { Shield, User, LogOut, FileText, Users, Lock, HelpCircle, Info, ChevronRight, CreditCard, Landmark, X, Download, Eye, Plus, CheckCircle } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface ProfileScreenProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function ProfileScreen({ navigateTo, transition }: ProfileScreenProps) {
  const [activeModal, setActiveModal] = useState<'none' | 'documents' | 'payment' | 'security'>('none');
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadDoc = (docName: string) => {
    setDownloadSuccess(docName);
    setTimeout(() => setDownloadSuccess(null), 1500);
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={false}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* User Profile Header Card */}
        <section className="bg-white border border-[#e0bfbb]/30 rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.03)] text-center space-y-4">
          <div className="relative w-20 h-20 mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007] border-2 border-[#6a0007]/10 overflow-hidden shadow-inner">
              <User className="w-12 h-12 stroke-[1.5px]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#6a0007] text-white rounded-full flex items-center justify-center border-2 border-white shadow-md">
              <Shield className="w-3.5 h-3.5 fill-[#ffe088] text-[#ffe088]" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-base text-[#0b1c30]">Rohan Malhotra</h3>
            <p className="text-xs text-[#58413f]/80 font-medium">rohan.malhotra@indusprotect.com</p>
            <p className="text-[10px] text-[#58413f]/60 font-bold uppercase tracking-wider">+91 98765 43210</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className="bg-[#fed65b] text-[#241a00] text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Elite Member
            </span>
            <span className="bg-[#6a0007]/5 text-[#6a0007] text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest border border-[#6a0007]/10">
              KYC Verified
            </span>
          </div>
        </section>

        {/* Quick Accounts / Methods Grid (Interactive) */}
        <section className="grid grid-cols-2 gap-3.5">
          <button
            onClick={() => setActiveModal('payment')}
            className="bg-white border border-[#e0bfbb]/20 p-4 rounded-2xl shadow-[0px_4px_12px_rgba(140,25,25,0.01)] flex items-start gap-3 active:scale-95 transition-all text-left cursor-pointer hover:border-[#6a0007]/15"
          >
            <div className="p-2.5 bg-[#eff4ff] rounded-xl text-[#6a0007] shrink-0">
              <Landmark className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-[#0b1c30]">Bank Accounts</h4>
              <p className="text-[9px] text-[#58413f]/60 font-bold uppercase">2 Linked</p>
            </div>
          </button>

          <button
            onClick={() => setActiveModal('payment')}
            className="bg-white border border-[#e0bfbb]/20 p-4 rounded-2xl shadow-[0px_4px_12px_rgba(140,25,25,0.01)] flex items-start gap-3 active:scale-95 transition-all text-left cursor-pointer hover:border-[#6a0007]/15"
          >
            <div className="p-2.5 bg-[#eff4ff] rounded-xl text-[#6a0007] shrink-0">
              <CreditCard className="w-5 h-5 stroke-[1.8px]" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-[#0b1c30]">Payment</h4>
              <p className="text-[9px] text-[#58413f]/60 font-bold uppercase">4 Active</p>
            </div>
          </button>
        </section>

        {/* Protection Insights Section Trigger */}
        <section className="pt-1">
          <button
            onClick={() => navigateTo('PROTECTION_INSIGHTS', 'push')}
            className="w-full bg-[#eff4ff] border border-[#e5eeff] rounded-2xl p-4 flex justify-between items-center cursor-pointer active:scale-[0.99] transition-all hover:bg-[#dce9ff]"
            id="protection-insights-trigger"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6a0007] shadow-sm shrink-0">
                <Shield className="w-5 h-5 fill-[#6a0007]/5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-[#0b1c30]">Protection Insights</h4>
                <p className="text-[10px] text-[#58413f] font-medium leading-normal">
                  View Coverage Score & Premium Spending Q3 Chart
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#58413f]/80 shrink-0" />
          </button>
        </section>

        {/* Vault & Identity List */}
        <section className="bg-white border border-[#e0bfbb]/20 rounded-2xl overflow-hidden shadow-[0px_4px_12px_rgba(140,25,25,0.01)]">
          <div className="bg-[#f8f9ff] border-b border-[#e5eeff] px-4 py-2.5 text-[9px] font-bold text-[#58413f]/60 uppercase tracking-widest">
            Vault & Identity
          </div>
          <div className="divide-y divide-[#e5eeff]">
            <button
              onClick={() => setActiveModal('documents')}
              className="w-full px-4 py-3.5 flex justify-between items-center cursor-pointer hover:bg-[#6a0007]/5 transition-colors text-left"
            >
              <div className="flex items-center gap-3 text-[#0b1c30]">
                <FileText className="w-4.5 h-4.5 text-[#58413f] stroke-[1.8px]" />
                <span className="text-xs font-bold text-[#58413f]">Saved Documents</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-[#eff4ff] text-[#6a0007] text-[8px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                  3 NEW
                </span>
                <ChevronRight className="w-4 h-4 text-[#58413f]/40" />
              </div>
            </button>

            <button
              onClick={() => setActiveModal('security')}
              className="w-full px-4 py-3.5 flex justify-between items-center cursor-pointer hover:bg-[#6a0007]/5 transition-colors text-left"
            >
              <div className="flex items-center gap-3 text-[#0b1c30]">
                <Lock className="w-4.5 h-4.5 text-[#58413f] stroke-[1.8px]" />
                <span className="text-xs font-bold text-[#58413f]">Security Settings</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#58413f]/40" />
            </button>
          </div>
        </section>

        {/* Assistance & Logout List */}
        <section className="bg-white border border-[#e0bfbb]/20 rounded-2xl overflow-hidden shadow-[0px_4px_12px_rgba(140,25,25,0.01)]">
          <div className="bg-[#f8f9ff] border-b border-[#e5eeff] px-4 py-2.5 text-[9px] font-bold text-[#58413f]/60 uppercase tracking-widest">
            Assistance
          </div>
          <div className="divide-y divide-[#e5eeff]">
            <div
              onClick={() => navigateTo('SUPPORT', 'push')}
              className="px-4 py-3.5 flex justify-between items-center cursor-pointer hover:bg-[#6a0007]/5 transition-colors"
            >
              <div className="flex items-center gap-3 text-[#0b1c30]">
                <HelpCircle className="w-4.5 h-4.5 text-[#58413f] stroke-[1.8px]" />
                <span className="text-xs font-bold text-[#58413f]">Help & Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#58413f]/40" />
            </div>

            <div className="px-4 py-3.5 flex justify-between items-center cursor-pointer hover:bg-[#6a0007]/5 transition-colors">
              <div className="flex items-center gap-3 text-[#0b1c30]">
                <Info className="w-4.5 h-4.5 text-[#58413f] stroke-[1.8px]" />
                <span className="text-xs font-bold text-[#58413f]">About IndusProtect</span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#58413f]/40" />
            </div>

            {/* Logout button */}
            <div
              onClick={() => navigateTo('LOGIN', 'push_back')}
              className="px-4 py-4 flex justify-between items-center cursor-pointer bg-[#6a0007]/5 hover:bg-[#6a0007]/10 transition-colors text-[#6a0007]"
            >
              <div className="flex items-center gap-3">
                <LogOut className="w-4.5 h-4.5 stroke-[2px]" />
                <span className="text-xs font-bold">Logout</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </div>
          </div>
        </section>

        {/* Footer Version Details */}
        <div className="text-center space-y-1 py-4 opacity-40">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#58413f]">
            Version 4.2.1-Premium
          </p>
          <p className="text-[8px] font-bold uppercase tracking-widest text-[#58413f]">
            © 2026 IndusProtect Financial Services
          </p>
        </div>
      </main>

      {/* Dynamic Overlay Sheets (Simulating high fidelity premium modals) */}
      {activeModal !== 'none' && (
        <div className="absolute inset-0 z-50 bg-black/60 flex flex-col justify-end transition-opacity animate-fadeIn">
          {/* Dimmed Background dismiss */}
          <div className="flex-grow cursor-pointer" onClick={() => setActiveModal('none')}></div>

          {/* Modal content bottom sheet */}
          <div className="bg-white rounded-t-[32px] p-6 space-y-5 max-h-[80%] overflow-y-auto shadow-[0px_-8px_30px_rgba(0,0,0,0.15)] border-t border-[#e0bfbb]/40">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base text-[#0b1c30]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {activeModal === 'documents' && 'Saved Policy Documents'}
                {activeModal === 'payment' && 'Linked Bank & Cards'}
                {activeModal === 'security' && 'Security Settings'}
              </h3>
              <button
                onClick={() => setActiveModal('none')}
                className="w-8 h-8 rounded-full bg-[#f8f9ff] flex items-center justify-center text-[#58413f] border border-[#e0bfbb]/20 active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Detail - Documents */}
            {activeModal === 'documents' && (
              <div className="space-y-3 pb-4">
                {[
                  { name: 'Motor Insurance Certificate', id: 'IND-MOT-99210-Certificate.pdf', size: '1.2 MB' },
                  { name: 'Health Family Floater Policy', id: 'IND-HEA-890-Terms.pdf', size: '2.4 MB' },
                  { name: 'Term Life Insurance Deed', id: 'IND-LIF-221-Policy_Deed.pdf', size: '3.1 MB' },
                ].map((doc, i) => (
                  <div key={i} className="bg-[#f8f9ff] p-4 rounded-xl border border-[#e5eeff] flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-[#0b1c30]">{doc.name}</p>
                      <p className="text-[10px] text-[#58413f]/60 font-semibold uppercase">{doc.id} • {doc.size}</p>
                    </div>
                    <button
                      onClick={() => handleDownloadDoc(doc.id)}
                      className="w-10 h-10 rounded-full bg-[#6a0007]/5 border border-[#6a0007]/10 flex items-center justify-center text-[#6a0007] hover:bg-[#6a0007]/10 active:scale-90 transition-all cursor-pointer"
                    >
                      {downloadSuccess === doc.id ? (
                        <CheckCircle className="w-5 h-5 text-green-600 animate-bounce" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
                {downloadSuccess && (
                  <div className="bg-green-100 border border-green-200 text-green-800 text-[11px] font-bold text-center py-2 rounded-xl">
                    Downloaded {downloadSuccess} to Secure Vault storage successfully!
                  </div>
                )}
              </div>
            )}

            {/* Modal Detail - Payment */}
            {activeModal === 'payment' && (
              <div className="space-y-4 pb-4">
                {/* Linked Accounts */}
                <div className="space-y-2">
                  <p className="text-[9px] font-extrabold text-[#58413f]/60 uppercase tracking-wider">Linked IndusInd Bank Accounts</p>
                  <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#e5eeff] flex gap-3.5 items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#6a0007] shadow-sm">
                      <Landmark className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0b1c30]">Indus Premium Savings Account</p>
                      <p className="text-[10px] text-[#58413f]/60 font-semibold uppercase">A/C •••• 4210 • Balance: ₹12.4 Lakhs</p>
                    </div>
                  </div>
                </div>

                {/* Credit Cards */}
                <div className="space-y-2">
                  <p className="text-[9px] font-extrabold text-[#58413f]/60 uppercase tracking-wider">Active Insurance Payment Cards</p>
                  <div className="bg-[#6a0007] text-white p-4 rounded-xl flex justify-between items-center shadow-lg relative overflow-hidden">
                    <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/3 translate-x-1/3"></div>
                    <div className="space-y-3 relative z-10">
                      <div>
                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">IndusInd Signature</p>
                        <p className="text-xs font-extrabold text-[#ffe088]">Rohan Malhotra</p>
                      </div>
                      <p className="text-sm font-bold tracking-[0.15em]">•••• •••• •••• 1009</p>
                    </div>
                    <div className="text-right text-white/50 text-[10px] font-bold uppercase relative z-10">
                      VISA
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#6a0007]/5 border border-[#6a0007]/15 text-[#6a0007] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer">
                  <Plus className="w-4 h-4" />
                  Add New Account or Card
                </button>
              </div>
            )}

            {/* Modal Detail - Security */}
            {activeModal === 'security' && (
              <div className="space-y-4 pb-4">
                <div className="space-y-2">
                  <p className="text-[9px] font-extrabold text-[#58413f]/60 uppercase tracking-wider">Biometrics & Vault Protection</p>
                  
                  {/* Face ID Toggle */}
                  <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#e5eeff] flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-[#0b1c30]">Biometric Login (Face ID/Touch ID)</p>
                      <p className="text-[10px] text-[#58413f]/60 font-medium">Use biometrics for quick 1-tap renewals</p>
                    </div>
                    <button
                      onClick={() => setBiometricsEnabled(!biometricsEnabled)}
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${biometricsEnabled ? 'bg-[#6a0007]' : 'bg-slate-300'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${biometricsEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                  </div>

                  {/* Pin Setup */}
                  <div className="bg-[#f8f9ff] p-4 rounded-xl border border-[#e5eeff] flex justify-between items-center cursor-pointer hover:bg-slate-50">
                    <div>
                      <p className="text-xs font-bold text-[#0b1c30]">Change Secure MPIN</p>
                      <p className="text-[10px] text-[#58413f]/60 font-medium">Change your 4-digit banking secure MPIN</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#58413f]/60" />
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 text-[10px] leading-relaxed font-semibold rounded-xl flex gap-2">
                  <Shield className="w-5 h-5 text-yellow-700 shrink-0 mt-0.5" />
                  <span>Always maintain active biometrics. IndusProtect sessions expire automatically after 5 minutes of inactivity for your private vault security.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <BottomNav currentScreen="PROFILE" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
