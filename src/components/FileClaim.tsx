import React, { useState } from 'react';
import { Shield, ArrowLeft, Calendar, FileText, Upload, AlertCircle } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface FileClaimProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function FileClaim({ navigateTo, transition }: FileClaimProps) {
  const [selectedType, setSelectedCategory] = useState<'accident' | 'damage' | 'medical'>('accident');
  const [incidentDate, setIncidentDate] = useState('');
  const [description, setDescription] = useState('');

  const claimTypes = [
    { id: 'accident' as const, label: 'Motor Accident', desc: 'Collision with another vehicle' },
    { id: 'damage' as const, label: 'Vehicle Damage', desc: 'Theft, fire, or natural calamity' },
    { id: 'medical' as const, label: 'Hospitalization', desc: 'Medical emergency or planned surgery' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo('CLAIM_TRACKING', 'push');
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="italic"
        showBack={true}
        onBackClick={() => navigateTo('MY_POLICIES', 'push_back')}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 space-y-5 overflow-y-auto">
        {/* Progress Stepper */}
        <section className="relative py-2 px-1">
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#6a0007] text-white flex items-center justify-center font-extrabold text-xs ring-4 ring-[#6a0007]/10">
                1
              </div>
              <span className="text-[10px] font-bold text-[#6a0007] uppercase tracking-wider">Type</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#58413f]/60 flex items-center justify-center font-extrabold text-xs">
                2
              </div>
              <span className="text-[10px] font-bold text-[#58413f]/60 uppercase tracking-wider">Details</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#58413f]/60 flex items-center justify-center font-extrabold text-xs">
                3
              </div>
              <span className="text-[10px] font-bold text-[#58413f]/60 uppercase tracking-wider">Submit</span>
            </div>
          </div>
          {/* Progress Line */}
          <div className="absolute top-6 left-8 right-8 h-[2px] bg-[#eff4ff] -z-0">
            <div className="h-full bg-[#6a0007]/30 w-1/3 rounded-full"></div>
          </div>
        </section>

        {/* Header Question */}
        <section className="space-y-1">
          <h3
            className="text-lg font-bold text-[#0b1c30]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            What happened?
          </h3>
          <p className="text-xs text-[#58413f]/80 leading-relaxed font-medium">
            Select the category that best describes your situation to help us speed up your claim.
          </p>
        </section>

        {/* Claim Types Selection */}
        <section className="space-y-2.5">
          {claimTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedCategory(type.id)}
              className={`p-4 bg-white border rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${
                selectedType === type.id
                  ? 'border-[#6a0007] bg-[#6a0007]/5 ring-1 ring-[#6a0007]/15'
                  : 'border-[#e0bfbb]/30'
              }`}
            >
              <div className={`p-3 rounded-xl shrink-0 ${selectedType === type.id ? 'bg-[#6a0007] text-white' : 'bg-[#eff4ff] text-[#6a0007]'}`}>
                <AlertCircle className="w-5 h-5 stroke-[1.8px]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#0b1c30]">{type.label}</h4>
                <p className="text-[10px] text-[#58413f]/80 leading-normal">{type.desc}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Incident Details Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <h4
              className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Details & Documentation
            </h4>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-[#58413f] uppercase block">
              Date of Incident
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6a0007]" />
              <input
                type="date"
                required
                value={incidentDate}
                onChange={(e) => setIncidentDate(e.target.value)}
                className="w-full bg-[#f8f9ff] border border-[#e0bfbb] rounded-xl py-3.5 pl-12 pr-4 focus:border-[#6a0007] focus:ring-0 text-xs font-semibold text-[#0b1c30]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-[#58413f] uppercase block">
              Description
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us briefly what happened..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#f8f9ff] border border-[#e0bfbb] rounded-xl p-4 focus:border-[#6a0007] focus:ring-0 text-xs font-medium text-[#0b1c30] placeholder-[#58413f]/40 leading-relaxed resize-none"
            />
          </div>

          {/* Drag & Drop File Upload Box */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider text-[#58413f] uppercase block">
              Upload Photos / Documents
            </label>
            <div className="border-2 border-dashed border-[#e0bfbb] bg-white rounded-2xl p-6 text-center cursor-pointer hover:bg-[#6a0007]/5 transition-all">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007]">
                  <Upload className="w-6 h-6 stroke-[1.8px]" />
                </div>
                <p className="text-xs font-bold text-[#0b1c30]">Tap to upload files</p>
                <p className="text-[10px] text-[#58413f]/60 max-w-[200px] leading-relaxed">
                  Upload photos of damage or medical bills (Max 10MB)
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6a0007] text-white py-3.5 rounded-xl font-bold text-xs tracking-wide shadow-md shadow-[#6a0007]/10 active:scale-95 transition-all mt-4 cursor-pointer uppercase"
          >
            Submit Claim
          </button>
        </form>

        <p className="text-center text-[10px] font-bold text-[#58413f]/50 tracking-wide flex items-center justify-center gap-1">
          <Shield className="w-3.5 h-3.5 text-[#6a0007]/50" />
          Secure 256-bit SSL Submission
        </p>
      </main>

      <BottomNav currentScreen="MY_POLICIES" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
