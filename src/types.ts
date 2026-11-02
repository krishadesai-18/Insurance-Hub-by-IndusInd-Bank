export type ScreenType =
  | 'INITIAL'             // Screen 2951587434757609399
  | 'LOGIN'               // Login Screen
  | 'ONBOARDING'          // Onboarding Screen
  | 'HOME'                // Home Dashboard
  | 'MY_POLICIES'         // My Policies
  | 'COMPARE_PLANS'       // Compare Plans
  | 'DISCOVER'            // Discover Insurance
  | 'BUY_POLICY'          // Buy Policy
  | 'AI_ASSISTANT'        // AI Assistant
  | 'FILE_CLAIM'          // File Claim
  | 'CLAIM_TRACKING'      // Claim Tracking
  | 'RENEWAL_REMINDER'    // Renewal Reminder
  | 'SUPPORT'             // Screen 17029257189375536605
  | 'NOTIFICATIONS'       // Notifications
  | 'PROTECTION_INSIGHTS' // Protection Insights
  | 'PROFILE';            // Profile Screen

export type TransitionType = 'push' | 'push_back' | 'slide_up' | 'none';

export interface AppState {
  currentScreen: ScreenType;
  transition: TransitionType;
  navigateTo: (screen: ScreenType, transitionType?: TransitionType) => void;
  userProfile: {
    name: string;
    email: string;
    mobile: string;
    kycVerified: boolean;
    protectionScore: number;
    activePoliciesCount: number;
  };
  claims: Array<{
    id: string;
    type: string;
    status: string;
    date: string;
    description: string;
    estimatedResolution: string;
    step: number;
  }>;
  selectedPlan: {
    name: string;
    price: number;
    type: string;
  } | null;
}
