import { useState, useRef, useEffect } from 'react';
import { Sparkles, Headphones, Send, Loader2, ArrowRight } from 'lucide-react';
import ScreenWrapper from './ScreenWrapper';
import Header from './Header';
import BottomNav from './BottomNav';
import { ScreenType, TransitionType } from '../types';

interface AIAssistantProps {
  navigateTo: (screen: ScreenType, transitionType: TransitionType) => void;
  transition: TransitionType;
}

export default function AIAssistant({ navigateTo, transition }: AIAssistantProps) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: "Hello Rohan! I'm your IndusProtect assistant. How can I help you today?",
      time: '10:02 AM',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiReply = {
        sender: 'ai' as const,
        text: `I've registered your request regarding: "${userMsg.text}". Let me verify your policy database credentials and generate a tailored response for you. Is there anything specific you would like me to retrieve?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 1200);
  };

  return (
    <ScreenWrapper transition={transition}>
      <Header
        styleType="new"
        showBack={false}
        onNotificationClick={() => navigateTo('NOTIFICATIONS', 'slide_up')}
        hasUnreadNotifications={true}
      />

      <main className="flex-grow p-5 pb-24 flex flex-col justify-between overflow-hidden">
        {/* Chat Area Scrollable */}
        <div className="flex-grow overflow-y-auto space-y-4 pr-1 scrollbar-hide">
          {/* Chat Messages */}
          {messages.map((msg, i) => {
            const isAi = msg.sender === 'ai';
            return (
              <div
                key={i}
                className={`flex gap-3 items-start animate-fadeIn ${
                  isAi ? 'justify-start' : 'justify-end'
                }`}
              >
                {isAi && (
                  <div className="w-9 h-9 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007] border border-[#6a0007]/10 shrink-0">
                    <Headphones className="w-5 h-5 stroke-[1.8px]" />
                  </div>
                )}
                <div
                  className={`p-4 max-w-[82%] relative ${
                    isAi
                      ? 'bg-white border border-[#e0bfbb]/20 text-[#0b1c30] rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-[0px_4px_12px_rgba(140,25,25,0.01)]'
                      : 'bg-[#6a0007] text-white rounded-tr-sm rounded-tl-2xl rounded-br-2xl rounded-bl-2xl shadow-md shadow-[#6a0007]/5'
                  }`}
                >
                  <p className="text-xs leading-relaxed font-medium">{msg.text}</p>
                  <p
                    className={`text-[9px] mt-1.5 font-bold uppercase tracking-wider text-right ${
                      isAi ? 'text-[#58413f]/40' : 'text-white/60'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Smart Recommendation Banner in the list flow */}
          <div className="bg-[#eff4ff] border border-[#e5eeff] rounded-2xl p-5 space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-1 text-[#735c00]">
              <Sparkles className="w-4 h-4 fill-[#735c00]/10" />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Smart Recommendation
              </span>
            </div>
            <h4
              className="text-sm font-bold text-[#0b1c30]"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Asset Protection Review
            </h4>
            <p className="text-xs text-[#58413f] leading-relaxed">
              Your premium car insurance is due for renewal next month. Would you like me to check for better coverage options?
            </p>
            <button
              onClick={() => navigateTo('COMPARE_PLANS', 'push')}
              className="bg-[#6a0007] hover:bg-[#6a0007]/95 text-white px-4 py-2.5 rounded-xl font-bold text-xs inline-flex items-center gap-1 shadow-md shadow-[#6a0007]/10 active:scale-95 transition-all cursor-pointer"
            >
              Show Options
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* AI Typing indicator */}
          {isTyping && (
            <div className="flex gap-3 items-start justify-start pl-1">
              <div className="w-9 h-9 rounded-full bg-[#6a0007]/5 flex items-center justify-center text-[#6a0007] border border-[#6a0007]/10 shrink-0">
                <Headphones className="w-5 h-5 stroke-[1.8px]" />
              </div>
              <div className="bg-white border border-[#e0bfbb]/20 text-[#58413f] p-4 rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-[0px_4px_12px_rgba(140,25,25,0.01)] flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#6a0007]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6a0007]/80">
                  Assistant is thinking...
                </span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Action Suggestion Chips */}
        <div className="py-2.5 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => {
              setInputText('Am I underinsured?');
            }}
            className="bg-white border border-[#e0bfbb]/30 hover:bg-[#6a0007]/5 text-xs font-semibold text-[#58413f] py-2 px-4 rounded-full active:scale-95 transition-all cursor-pointer"
          >
            Am I underinsured?
          </button>
          <button
            onClick={() => navigateTo('FILE_CLAIM', 'push')}
            className="bg-white border border-[#e0bfbb]/30 hover:bg-[#6a0007]/5 text-xs font-semibold text-[#58413f] py-2 px-4 rounded-full active:scale-95 transition-all cursor-pointer"
          >
            How to file a claim?
          </button>
          <button
            onClick={() => {
              setInputText("What's my cover?");
            }}
            className="bg-white border border-[#e0bfbb]/30 hover:bg-[#6a0007]/5 text-xs font-semibold text-[#58413f] py-2 px-4 rounded-full active:scale-95 transition-all cursor-pointer"
          >
            What's my cover?
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative pt-2 shrink-0">
          <input
            type="text"
            placeholder="Ask anything..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="w-full bg-[#f8f9ff] border border-[#e0bfbb] rounded-full py-4 pl-6 pr-14 text-xs font-semibold text-[#0b1c30] placeholder-[#58413f]/40 focus:border-[#6a0007] focus:ring-0 shadow-inner"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#6a0007] hover:bg-[#6a0007]/95 rounded-full flex items-center justify-center text-white active:scale-90 transition-all cursor-pointer shadow-md"
          >
            <Send className="w-4.5 h-4.5" />
          </button>
        </div>
      </main>

      <BottomNav currentScreen="AI_ASSISTANT" navigateTo={navigateTo} />
    </ScreenWrapper>
  );
}
