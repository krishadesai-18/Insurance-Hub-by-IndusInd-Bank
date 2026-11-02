import { useState } from 'react';
import { Download, Share2, Plus, Car, Heart, ClipboardList, ShieldAlert, ArrowRight, Clock, RefreshCw } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface MyPoliciesProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function MyPolicies({ navigateTo, transition }: MyPoliciesProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  const activePolicies = [
    {
      id: 'IND-MOT-456',
      type: 'Motor Insurance',
      title: 'Motor Insurance',
      expiry: '15 Oct, 2024',
      premium: '₹4,500',
      icon: Car,
      colorClass: 'text-[#6a0007]',
      bgColorClass: 'bg-[#6a0007]/5',
    },
  ];

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="italic"
        showBack={false}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Tab Navigation */}
        <div className="flex border-b border-[#e5eeff] relative">
          <button
            onClick={() => setActiveTab('active')}
            className={`relative flex-1 py-3 text-sm font-bold text-center transition-all cursor-pointer ${
              activeTab === 'active' ? 'text-[#6a0007]' : 'text-[#58413f]/60'
            }`}
          >
            Active
            {activeTab === 'active' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6a0007] rounded-t-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`relative flex-1 py-3 text-sm font-bold text-center transition-all cursor-pointer ${
              activeTab === 'past' ? 'text-[#6a0007]' : 'text-[#58413f]/60'
            }`}
          >
            Past
            {activeTab === 'past' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6a0007] rounded-t-full" />
            )}
          </button>
        </div>

        {activeTab === 'active' ? (
          <div className="space-y-4">
            {/* Motor Policy Card */}
            {activePolicies.map((policy) => {
              const PolicyIcon = policy.icon;
              return (
                <div
                  key={policy.id}
                  className="bg-white border border-[#e0bfbb]/30 rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.03)] relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#fed65b] text-[#241a00] font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Active
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3.5 rounded-xl ${policy.bgColorClass} ${policy.colorClass}`}>
                      <PolicyIcon className="w-7 h-7 stroke-[1.5px]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0b1c30]">{policy.title}</h3>
                      <p className="text-[11px] text-[#58413f]/70 font-semibold">Policy #{policy.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#e5eeff]">
                      <p className="text-[9px] text-[#58413f]/60 font-bold uppercase tracking-wider">
                        Expiry Date
                      </p>
                      <p className="text-xs font-bold text-[#0b1c30]">{policy.expiry}</p>
                    </div>
                    <div className="bg-[#f8f9ff] p-3 rounded-xl border border-[#e5eeff]">
                      <p className="text-[9px] text-[#58413f]/60 font-bold uppercase tracking-wider">
                        Premium
                      </p>
                      <p className="text-xs font-bold text-[#0b1c30]">{policy.premium}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#6a0007] hover:bg-[#6a0007]/95 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button className="w-12 h-12 border border-[#6a0007]/20 text-[#6a0007] rounded-xl flex items-center justify-center active:scale-95 transition-all hover:bg-[#6a0007]/5 cursor-pointer">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Health Policy Card (Elite Premium style in Maroon background) */}
            <div className="bg-[#6a0007] text-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(140,25,25,0.08)] relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-[#fed65b] text-[#241a00] font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Active
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Heart className="w-7 h-7 text-[#ffe088] fill-[#ffe088]/20 stroke-[1.5px]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Health Elite Plan</h3>
                  <p className="text-[11px] text-white/70">Policy #IND-HEA-890</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[9px] text-white/70 font-bold uppercase tracking-wider">
                      Total Sum Insured
                    </p>
                    <p className="text-xl font-bold text-[#ffe088] tracking-tight">₹10,00,000</p>
                  </div>
                  <ShieldAlert className="w-10 h-10 text-[#ffe088] opacity-60" />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-white/90">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#ffe088]" />
                  Renews in 182 days
                </div>
                <button className="font-bold underline underline-offset-4 hover:text-white transition-all cursor-pointer">
                  Manage Members
                </button>
              </div>
            </div>

            {/* Asymmetric Support / Quick Action Card Group */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* Claims Card (redirects to Claim Tracking/Claims section) */}
              <button
                onClick={() => navigateTo('CLAIM_TRACKING', 'push')}
                className="bg-[#eff4ff] border border-[#e5eeff] rounded-2xl p-4 flex flex-col justify-between h-32 active:scale-95 transition-all text-left cursor-pointer hover:border-[#6a0007]/10"
              >
                <ClipboardList className="w-8 h-8 text-[#6a0007] stroke-[1.5px]" />
                <div>
                  <p className="text-sm font-bold text-[#0b1c30]">Claims</p>
                  <p className="text-[11px] text-[#58413f]/80 font-medium">2 pending updates</p>
                </div>
              </button>

              {/* Renew Card */}
              <button
                onClick={() => navigateTo('RENEWAL_REMINDER', 'push')}
                className="bg-[#fed65b]/20 border border-[#fed65b]/30 rounded-2xl p-4 flex flex-col justify-between h-32 active:scale-95 transition-all text-left cursor-pointer hover:border-[#6a0007]/10"
              >
                <RefreshCw className="w-8 h-8 text-[#735c00] stroke-[1.8px]" />
                <div>
                  <p className="text-sm font-bold text-[#0b1c30]">Renew</p>
                  <p className="text-[11px] text-[#745c00] font-semibold">Quick pay enabled</p>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* Empty Past State */
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#f8f9ff] flex items-center justify-center text-[#58413f]/40 border border-[#e0bfbb]/20 shadow-inner">
              <ClipboardList className="w-8 h-8" />
            </div>
            <p className="text-sm font-bold text-[#0b1c30]">No past policies found</p>
            <p className="text-xs text-[#58413f]/60 max-w-[240px] leading-relaxed">
              Once your active policies expire, they will appear here for your records and renewals.
            </p>
          </div>
        )}
      </main>

      {/* FAB: Add / Import Policy */}
      <button
        onClick={() => navigateTo('DISCOVER', 'push')}
        className="absolute bottom-24 right-5 w-14 h-14 bg-[#6a0007] hover:bg-[#6a0007]/95 text-white rounded-full shadow-lg flex items-center justify-center z-40 active:scale-90 transition-all cursor-pointer"
      >
        <Plus className="w-7 h-7" />
      </button>

      <BottomNav currentScreen="MY_POLICIES" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
