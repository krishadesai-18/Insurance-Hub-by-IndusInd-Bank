import React, { useState } from 'react';
import { Fingerprint, Smile, Lock } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import { ScreenType, TransitionType } from '../types';

interface LoginScreenProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function LoginScreen({ navigateTo, transition }: LoginScreenProps) {
  const [mobile, setMobile] = useState('');
  const [mpin, setMpin] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigateTo('ONBOARDING', 'push');
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={false}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={false}
      />

      <main className="flex-grow overflow-y-auto p-6 pb-8 flex flex-col justify-between min-h-0">
        <div className="space-y-8 mt-4">
          {/* Welcome Text */}
          <div className="text-center space-y-2">
            <h2
              className="text-[28px] font-semibold text-[#0b1c30] tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Welcome back
            </h2>
            <p className="text-[#58413f]/80 text-sm font-medium">
              Access your protected future
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[12px] font-semibold tracking-wider text-[#58413f] uppercase block">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#0b1c30]/70 font-semibold border-r border-[#e0bfbb] pr-3">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10 digit number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="w-full bg-[#f8f9ff] border border-[#e0bfbb] rounded-xl py-3.5 pl-16 pr-4 focus:border-[#6a0007] focus:ring-0 text-sm text-[#0b1c30] placeholder-[#58413f]/40 font-semibold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[12px] font-semibold tracking-wider text-[#58413f] uppercase block">
                  MPIN
                </label>
                <button
                  type="button"
                  className="text-xs font-bold text-[#6a0007] hover:underline"
                >
                  Forgot MPIN?
                </button>
              </div>
              <input
                type="password"
                required
                maxLength={4}
                placeholder="••••"
                value={mpin}
                onChange={(e) => setMpin(e.target.value.replace(/\D/g, '').slice(0, 4))}
                className="w-full bg-[#f8f9ff] border border-[#e0bfbb] rounded-xl py-3.5 px-4 text-center tracking-[1em] font-bold text-lg focus:border-[#6a0007] focus:ring-0 placeholder-[#58413f]/30"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6a0007] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-[#6a0007]/10 active:scale-95 hover:bg-[#6a0007]/95 transition-all mt-4 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Biometrics */}
          <div className="flex justify-center items-center gap-8 pt-2">
            <button className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-[#6a0007]/5 group-hover:bg-[#6a0007]/10 flex items-center justify-center text-[#6a0007] border border-[#6a0007]/10 transition-colors">
                <Fingerprint className="w-7 h-7 stroke-[1.5px]" />
              </div>
              <span className="text-xs font-medium text-[#58413f]">Touch ID</span>
            </button>
            <button className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-[#6a0007]/5 group-hover:bg-[#6a0007]/10 flex items-center justify-center text-[#6a0007] border border-[#6a0007]/10 transition-colors">
                <Smile className="w-7 h-7 stroke-[1.5px]" />
              </div>
              <span className="text-xs font-medium text-[#58413f]">Face ID</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 pt-6">
          <p className="text-sm text-[#58413f] font-medium text-center">
            First time here?{' '}
            <button
              onClick={() => navigateTo('ONBOARDING', 'push')}
              className="font-bold text-[#6a0007] hover:underline cursor-pointer"
            >
              Register Now
            </button>
          </p>
        </div>
      </main>
    </ScreenWrapper>
  );
}
