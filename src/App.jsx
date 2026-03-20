import { useState, useEffect } from 'react';
import {
  Search, Mic, Camera, MapPin, Star, Shield, Clock, CheckCircle,
  ChevronRight, Zap, TrendingDown, AlertTriangle,
  Home, Wrench, Droplets, Thermometer, Cpu, MessageSquare,
  DollarSign, BarChart2, FileText, ArrowRight,
  Lock, Unlock, Navigation, Filter,
  X, Plus, Minus, Check, Award, Activity, Send,
  Eye, TrendingUp, Bell, CreditCard, Banknote, Layers, Grid, List
} from 'lucide-react';

const VIEWS = {
  INTAKE: 'intake',
  IOT_TRIGGER: 'iot_trigger',
  AR_SCAN: 'ar_scan',
  ANALYZING: 'analyzing',
  SUMMARY: 'summary',
  ESTIMATOR: 'estimator',
  QUOTES: 'quotes',
  NEGOTIATOR: 'negotiator',
  FOREMAN: 'foreman',
  BROKER: 'broker',
};

const SAMPLE_QUOTES = [
  { id: 1, name: 'AquaFlow Plumbing', rating: 4.9, reviews: 312, price: 1080, eta: '2 hrs', badge: 'Top Rated', reliability: 98, avatar: '🔧' },
  { id: 2, name: 'ProPipe Services', rating: 4.7, reviews: 218, price: 950, eta: '3 hrs', badge: 'Best Value', reliability: 95, avatar: '🔩' },
  { id: 3, name: 'FastFix Pro', rating: 4.6, reviews: 156, price: 875, eta: '4 hrs', badge: 'Fastest', reliability: 92, avatar: '⚡' },
];

function Badge({ children, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    green: 'bg-green-500/20 text-green-300 border-green-500/30',
    yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    red: 'bg-red-500/20 text-red-300 border-red-500/30',
    purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    indigo: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`bg-slate-800/60 border border-slate-700/50 rounded-2xl backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function Btn({ children, onClick, variant = 'primary', className = '', disabled = false, size = 'md' }) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600',
    success: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-lg shadow-green-500/25',
    danger: 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white',
    ghost: 'bg-transparent hover:bg-slate-700/50 text-slate-300 border border-slate-700',
  };
  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-5 py-2.5 text-sm', lg: 'px-7 py-3.5 text-base' };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-semibold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {children}
    </button>
  );
}

function IoTTriggerView({ onDismiss, onAccept }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-900">
      <div className="max-w-md w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl animate-pulse" />
          <Card className="relative p-8 border-red-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">IoT Smart Alert</p>
                <h2 className="text-lg font-bold text-white">Flume Water Monitor</h2>
              </div>
              <div className="ml-auto w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span className="text-red-300 font-semibold text-sm">Abnormal Flow Detected</span>
              </div>
              <p className="text-slate-300 text-sm">
                Continuous flow of <strong className="text-white">0.8 GPM for 47 minutes</strong> at 2:14 AM — strong indicator of a pipe leak.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: 'Flow Rate', value: '0.8 GPM' },
                { label: 'Duration', value: '47 min' },
                { label: 'Est. Loss', value: '37.6 gal' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-slate-700/50 rounded-xl p-3 text-center">
                  <div className="text-white font-bold text-sm">{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Trade Jobs AI has pre-filled an intake form. Dispatch a plumber now?
            </p>
            <div className="flex gap-3">
              <Btn onClick={onDismiss} variant="ghost" className="flex-1">Dismiss</Btn>
              <Btn onClick={onAccept} variant="primary" className="flex-1">
                <Zap className="w-4 h-4 inline mr-2" />Auto-Dispatch
              </Btn>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ARScanView({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const phases = ['Initializing LiDAR', 'Spatial Mapping', 'Measuring Clearances', 'Analyzing Components', 'Scan Complete'];
  const phasesLen = phases.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); setTimeout(onComplete, 600); return 100; }
        const next = p + 2;
        setPhase(Math.min(Math.floor(next / 25), phasesLen - 1));
        return next;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete, phasesLen]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-900">
      <div className="max-w-sm w-full text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
          <div className="absolute inset-4 rounded-full border-2 border-blue-500/40 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Grid className="w-10 h-10 text-blue-400" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">AR LiDAR Scanning</h2>
        <p className="text-blue-400 font-semibold mb-1">{phases[phase]}</p>
        <p className="text-slate-400 text-sm mb-6">Measuring spatial dimensions to ensure exact part fitment</p>
        <div className="space-y-2 mb-6 text-left">
          {phases.map((p, i) => (
            <div key={i} className={`flex items-center gap-3 p-2 rounded-lg transition-all ${i <= phase ? 'opacity-100' : 'opacity-30'}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${i < phase ? 'bg-green-500' : i === phase ? 'bg-blue-500 animate-pulse' : 'bg-slate-600'}`}>
                {i < phase && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className={`text-sm ${i === phase ? 'text-blue-300 font-medium' : i < phase ? 'text-green-300' : 'text-slate-500'}`}>{p}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded-xl p-3">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Scan Progress</span><span>{progress}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function IntakeView({ onSubmit, onIoTDemo }) {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { icon: Droplets, label: 'Plumbing', color: 'text-blue-400' },
    { icon: Zap, label: 'Electrical', color: 'text-yellow-400' },
    { icon: Thermometer, label: 'HVAC', color: 'text-red-400' },
    { icon: Home, label: 'General', color: 'text-green-400' },
    { icon: Wrench, label: 'Appliances', color: 'text-purple-400' },
    { icon: Layers, label: 'Remodel', color: 'text-indigo-400' },
  ];

  const handleSubmit = () => {
    const text = typeof inputText === 'string' ? inputText.trim() : '';
    if (text.length > 0 || selectedCategory) {
      onSubmit(text || `${selectedCategory} repair needed`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 pb-24 pt-16 px-6">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
            <Zap className="w-3.5 h-3.5" />AI-Powered Home Services
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Trade Jobs <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
          </h1>
          <p className="text-lg text-blue-200/80 max-w-xl mx-auto mb-10">
            Describe your home repair. Our AI agents estimate, negotiate, and manage the entire job — guaranteed.
          </p>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 mb-4">
              <Search className="w-5 h-5 text-blue-300 shrink-0" />
              <input
                type="text"
                value={inputText}
                onChange={e => { const v = e.target.value; setInputText(typeof v === 'string' ? v : ''); }}
                placeholder="Describe your issue (e.g., water heater leaking...)"
                className="flex-1 bg-transparent text-white placeholder-blue-300/60 outline-none text-sm"
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
              <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" aria-label="Voice input"><Mic className="w-4 h-4 text-blue-300" /></button>
              <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors" aria-label="Camera"><Camera className="w-4 h-4 text-blue-300" /></button>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-blue-200/70 text-sm">1842 Maple Street, Austin TX</span>
            </div>
            <Btn onClick={handleSubmit} size="lg" className="w-full">
              <Search className="w-4 h-4 inline mr-2" />Find Verified Pros
            </Btn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0,80 C300,0 900,0 1200,80 L1200,80 L0,80 Z" fill="#0f172a" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {categories.map(({ icon: Icon, label, color }) => (
            <button key={label} onClick={() => setSelectedCategory(label)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${selectedCategory === label ? 'bg-blue-600/30 border-blue-500 text-white' : 'bg-slate-800/80 border-slate-700/50 text-slate-300 hover:border-slate-500 hover:text-white'}`}>
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>

        <Card className="p-5 mb-8 border-blue-500/30 cursor-pointer hover:border-blue-400/50 transition-all" onClick={onIoTDemo}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">Smart Home Alert Demo</span>
                <Badge color="blue">IoT Feature</Badge>
              </div>
              <p className="text-slate-400 text-sm">Simulate a Flume water sensor detecting a pipe leak at 2 AM</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: Shield, label: 'Licensed & Insured', sub: 'All pros verified', color: 'text-blue-400' },
            { icon: DollarSign, label: 'AI Price Match', sub: 'Always fair market rate', color: 'text-green-400' },
            { icon: Star, label: '4.9\u2605 Avg Rating', sub: '50,000+ reviews', color: 'text-yellow-400' },
          ].map(({ icon: Icon, label, sub, color }) => (
            <Card key={label} className="p-4 text-center">
              <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
              <div className="text-white font-semibold text-sm">{label}</div>
              <div className="text-slate-400 text-xs">{sub}</div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors" onClick={() => onSubmit('broker_view')}>
            <BarChart2 className="w-4 h-4" />Pro / Broker Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

function AnalyzingView({ onComplete }) {
  const [step, setStep] = useState(0);
  const steps = [
    'Parsing your job request...',
    'Verifying permit requirements...',
    'Querying live parts inventory...',
    'Checking contractor schedules...',
    'Running fair-price analysis...',
    'Qualifying local professionals...',
    'Building your strategy...',
  ];

  useEffect(() => {
    if (step < steps.length - 1) {
      const t = setTimeout(() => setStep(s => s + 1), 600);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [step, steps.length, onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-900">
      <div className="max-w-md w-full text-center">
        <div className="relative w-28 h-28 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/30" style={{ borderTopColor: '#3b82f6', animation: 'spin 1s linear infinite' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Cpu className="w-8 h-8 text-blue-400 animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">AI Agents Working</h2>
        <p className="text-slate-400 mb-8">Dispatching multi-agent analysis pipeline...</p>
        <div className="space-y-2 text-left">
          {steps.map((s, i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${i <= step ? 'opacity-100' : 'opacity-20'}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${i < step ? 'bg-green-500' : i === step ? 'bg-blue-500 animate-pulse' : 'bg-slate-600'}`}>
                {i < step && <Check className="w-3 h-3 text-white" />}
              </div>
              <span className={`text-sm ${i === step ? 'text-blue-300 font-medium' : i < step ? 'text-slate-300' : 'text-slate-500'}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntakeSummaryView({ onNext, jobRequest }) {
  const timelineSteps = [
    {
      icon: MessageSquare, label: 'Transcript', time: '0.8s', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/60',
      detail: '"Water heater in garage is leaking from the bottom. Been going for 2 days. Hot water still works but floor is wet."',
      sub: 'Intent: Repair/Replacement \u00b7 Urgency: High \u00b7 Location: Garage',
    },
    {
      icon: Eye, label: 'Analysis', time: '1.2s', color: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-500/60',
      detail: 'Identified: 50-gallon gas water heater, approx. age 8-11 years (past avg. lifespan). Failure mode: Tank corrosion / drain valve failure.',
      sub: 'Confidence: 94% \u00b7 Replacement recommended over repair',
    },
    {
      icon: Award, label: 'Qualification', time: '2.1s', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/60',
      detail: '14 licensed plumbers in your area. Filtered to 6 with water heater replacement certification. Permit required (City of Austin \u2014 auto-filed).',
      sub: '3 pros available today \u00b7 Avg. response time: 2.3 hrs',
    },
    {
      icon: TrendingDown, label: 'Strategy', time: '3.4s', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/60',
      detail: 'Target price: $850 (labor + Rheem 50-gal unit from Home Depot \u2014 in stock 0.4mi). Opening bid: $780. Walk-away: $950.',
      sub: 'Negotiation leverage: 3 comparable quotes available',
    },
  ];

  const stats = [
    { label: 'Agents Deployed', value: '7', icon: Cpu },
    { label: 'Data Points', value: '2,840', icon: BarChart2 },
    { label: 'Analysis Time', value: '3.4s', icon: Clock },
    { label: 'Confidence', value: '94%', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Badge color="blue">Agent 1 \u00b7 Intake Coordinator</Badge>
          <h1 className="text-3xl font-bold text-white mt-3 mb-2">AI Understanding Summary</h1>
          <p className="text-slate-400">Review what our AI understood before proceeding to estimation</p>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-8">
          {stats.map(({ label, value, icon: Icon }) => (
            <Card key={label} className="p-4 text-center">
              <Icon className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white">{value}</div>
              <div className="text-slate-400 text-xs">{label}</div>
            </Card>
          ))}
        </div>
        <Card className="p-5 mb-6 border-blue-500/30">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Parsed Job Request</p>
              <p className="text-white font-medium">{jobRequest || 'Water heater leaking from the bottom, garage unit'}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <Badge color="blue">Plumbing</Badge>
                <Badge color="red">Urgent</Badge>
                <Badge color="yellow">Permit Required</Badge>
                <Badge color="purple">Replacement Likely</Badge>
              </div>
            </div>
          </div>
        </Card>
        <div className="space-y-1 mb-8">
          {timelineSteps.map((step, idx) => (
            <div key={step.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${step.bg} border-2 ${step.border}`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
                </div>
                {idx < timelineSteps.length - 1 && <div className="w-0.5 flex-1 bg-slate-700 mt-1 min-h-[24px]" />}
              </div>
              <Card className="flex-1 p-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">{step.label}</span>
                    <Badge color="green"><Check className="w-2.5 h-2.5" />Complete</Badge>
                  </div>
                  <span className="text-slate-500 text-xs">{step.time}</span>
                </div>
                <p className="text-slate-300 text-sm mb-1">{step.detail}</p>
                <p className="text-slate-500 text-xs">{step.sub}</p>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <Btn variant="ghost" className="flex-1">Edit Details</Btn>
          <Btn onClick={onNext} className="flex-1" size="lg">
            Proceed to Estimator <ArrowRight className="w-4 h-4 inline ml-1" />
          </Btn>
        </div>
      </div>
    </div>
  );
}

function EstimatorView({ onNext }) {
  const [showBNPL, setShowBNPL] = useState(false);
  const breakdown = [
    { label: 'Labor (4-5 hrs)', low: 200, high: 320, avg: 260 },
    { label: 'Rheem 50-gal Gas Unit', low: 520, high: 580, avg: 549, note: '\u2713 In stock \u2014 Home Depot 0.4mi', live: true },
    { label: 'Disposal & Haul-Away', low: 40, high: 80, avg: 60 },
    { label: 'City Permit (Auto-filed)', low: 35, high: 35, avg: 35 },
    { label: 'Overhead & Platform Fee', low: 28, high: 46, avg: 37 },
  ];
  const total = { low: 823, high: 1061, avg: 941 };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Badge color="purple">Agent 3 \u00b7 The Estimator</Badge>
          <h1 className="text-3xl font-bold text-white mt-3 mb-2">Fair Price Analysis</h1>
          <p className="text-slate-400">Live market data \u00b7 Real inventory \u00b7 Zero guesswork</p>
        </div>
        <Card className="p-6 mb-6 border-green-500/30 text-center">
          <p className="text-slate-400 text-sm mb-3">Your Fair Market Range</p>
          <div className="flex items-end justify-center gap-4 mb-4">
            <div><div className="text-slate-400 text-xs mb-1">LOW</div><div className="text-3xl font-bold text-green-400">${total.low}</div></div>
            <div className="pb-2"><div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 rounded" /></div>
            <div><div className="text-slate-400 text-xs mb-1">HIGH</div><div className="text-3xl font-bold text-yellow-400">${total.high}</div></div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
            <p className="text-blue-300 text-sm">
              <Zap className="w-3.5 h-3.5 inline mr-1" />
              AI Negotiation Target: <strong className="text-white">$850</strong> \u2014 10% below market avg
            </p>
          </div>
        </Card>
        <Card className="p-5 mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-blue-400" />Cost Breakdown
          </h3>
          <div className="space-y-3">
            {breakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
                <div>
                  <div className="text-slate-200 text-sm font-medium">{item.label}</div>
                  {item.note && (
                    <div className="flex items-center gap-1 mt-0.5">
                      {item.live && <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
                      <span className="text-green-400 text-xs">{item.note}</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold">${item.avg}</div>
                  <div className="text-slate-500 text-xs">${item.low}\u2013${item.high}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2">
              <div className="text-white font-bold">Total Estimate</div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">${total.avg}</div>
                <div className="text-slate-400 text-xs">Range: ${total.low}\u2013${total.high}</div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-5 mb-6 border-indigo-500/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-400" />
              <span className="text-white font-semibold">Pay Over Time with Affirm</span>
            </div>
            <button onClick={() => setShowBNPL(!showBNPL)} className="text-indigo-400 hover:text-indigo-300 text-sm">
              {showBNPL ? 'Hide' : 'Show Options'}
            </button>
          </div>
          {showBNPL ? (
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[{ months: 3, payment: 316, apr: '0%' }, { months: 6, payment: 167, apr: '0%' }, { months: 12, payment: 94, apr: '9.9%' }].map(({ months, payment, apr }) => (
                <div key={months} className="bg-slate-700/50 rounded-xl p-3 text-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <div className="text-white font-bold text-lg">${payment}/mo</div>
                  <div className="text-slate-400 text-xs">{months} months \u00b7 {apr} APR</div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400 text-sm">Or as low as <strong className="text-indigo-300">$94/month</strong> with 12-month Affirm financing.</p>
          )}
        </Card>
        <div className="flex gap-3">
          <Btn variant="ghost" className="flex-1">Get 2nd Opinion</Btn>
          <Btn onClick={onNext} size="lg" className="flex-1">
            View Contractor Quotes <ArrowRight className="w-4 h-4 inline ml-1" />
          </Btn>
        </div>
      </div>
    </div>
  );
}

function QuotesView({ onSelect }) {
  const [sortBy, setSortBy] = useState('rating');
  const [selectedId, setSelectedId] = useState(null);
  const sorted = [...SAMPLE_QUOTES].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.eta.localeCompare(b.eta);
  });

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <Badge color="indigo">Quote Deck</Badge>
          <h1 className="text-3xl font-bold text-white mt-3 mb-2">Select Your Pro</h1>
          <p className="text-slate-400">All quotes AI-verified against market rates \u00b7 3 available today</p>
        </div>
        <div className="flex gap-2 mb-6">
          <span className="text-slate-400 text-sm flex items-center gap-1"><Filter className="w-3.5 h-3.5" />Sort:</span>
          {['rating', 'price', 'eta'].map(s => (
            <button key={s} onClick={() => setSortBy(s)}
              className={`px-3 py-1 rounded-lg text-sm transition-all capitalize ${sortBy === s ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
              {s === 'eta' ? 'Fastest' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <div className="space-y-4 mb-6">
          {sorted.map((quote) => (
            <Card key={quote.id} className={`p-5 cursor-pointer transition-all ${selectedId === quote.id ? 'border-blue-500/60 bg-blue-500/10' : 'hover:border-slate-600'}`} onClick={() => setSelectedId(quote.id)}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center text-2xl shrink-0">
                  {quote.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-white font-bold">{quote.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          <span className="text-yellow-300 text-sm font-semibold">{quote.rating}</span>
                        </div>
                        <span className="text-slate-500 text-xs">({quote.reviews} reviews)</span>
                        <Badge color={quote.badge === 'Top Rated' ? 'yellow' : quote.badge === 'Best Value' ? 'green' : 'blue'}>{quote.badge}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">${quote.price}</div>
                      <div className="text-slate-400 text-xs">ETA: {quote.eta}</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-3 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <div className="w-20 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${quote.reliability}%` }} />
                      </div>
                      <span className="text-slate-400 text-xs">{quote.reliability}% reliable</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Shield className="w-3 h-3 text-blue-400" />Licensed & Insured
                    </div>
                  </div>
                </div>
              </div>
              {selectedId === quote.id && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <Btn onClick={() => onSelect(quote)} className="w-full">
                    <Zap className="w-4 h-4 inline mr-2" />Start AI Negotiation with {quote.name}
                  </Btn>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function NegotiatorView({ contractor, onAccept }) {
  const startPrice = contractor ? contractor.price : 1080;
  const [bidHistory, setBidHistory] = useState([
    { side: 'pro', amount: startPrice, label: `${contractor ? contractor.name : 'Contractor'}'s Opening Ask` },
  ]);
  const [userOffer, setUserOffer] = useState('780');
  const [remainingCounters, setRemainingCounters] = useState(3);
  const [phase, setPhase] = useState('open');
  const [proThinking, setProThinking] = useState(false);
  const TARGET = 850;

  const lastBid = bidHistory[bidHistory.length - 1];
  const lastAmount = lastBid ? lastBid.amount : startPrice;

  const handleSendOffer = () => {
    const offerVal = parseInt(userOffer, 10);
    if (isNaN(offerVal) || offerVal <= 0 || remainingCounters <= 0 || proThinking) return;
    const newHistory = [...bidHistory, { side: 'user', amount: offerVal, label: 'Your Offer' }];
    setBidHistory(newHistory);
    const newRemaining = remainingCounters - 1;
    setRemainingCounters(newRemaining);
    setPhase('negotiating');
    setProThinking(true);

    setTimeout(() => {
      const lastProBid = newHistory.filter(b => b.side === 'pro').slice(-1)[0];
      const proLast = lastProBid ? lastProBid.amount : startPrice;
      const midpoint = Math.round((proLast + offerVal) / 2);

      if (offerVal >= TARGET || midpoint <= TARGET) {
        setBidHistory(h => [...h, { side: 'pro', amount: TARGET, label: `${contractor ? contractor.name : 'Pro'} Final Counter` }]);
        setPhase('accepted');
      } else if (newRemaining === 0) {
        setBidHistory(h => [...h, { side: 'pro', amount: midpoint, label: `${contractor ? contractor.name : 'Pro'} Final Counter` }]);
        setPhase('done');
      } else {
        setBidHistory(h => [...h, { side: 'pro', amount: midpoint, label: `${contractor ? contractor.name : 'Pro'} Counter` }]);
        setUserOffer(String(Math.round((midpoint + offerVal) / 2)));
      }
      setProThinking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <Badge color="yellow">Agent 4 \u00b7 The Negotiator</Badge>
          <h1 className="text-3xl font-bold text-white mt-3 mb-1">AI Negotiation Room</h1>
          <p className="text-slate-400">
            Negotiating with <strong className="text-white">{contractor ? contractor.name : 'Contractor'}</strong> \u00b7 Target: <span className="text-green-400">${TARGET}</span>
          </p>
        </div>

        {phase === 'accepted' && (
          <div className="bg-green-900/30 border border-green-500/40 rounded-xl p-4 mb-6 text-center">
            <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-green-300 font-semibold">Deal Reached at ${lastAmount}!</p>
            <p className="text-slate-400 text-sm">You saved ${startPrice - lastAmount} from the opening ask</p>
          </div>
        )}
        {phase === 'done' && (
          <div className="bg-yellow-900/30 border border-yellow-500/40 rounded-xl p-4 mb-6 text-center">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <p className="text-yellow-300 font-semibold">All counters used \u2014 accept current offer or move on</p>
          </div>
        )}

        <Card className="p-5 mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-green-400" />Bid History
          </h3>
          <div className="space-y-3">
            {bidHistory.map((bid, i) => (
              <div key={i} className={`flex items-center gap-3 ${bid.side === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${bid.side === 'pro' ? 'bg-slate-700' : 'bg-blue-600'}`}>
                  {bid.side === 'pro' ? '🔧' : '👤'}
                </div>
                <div className={`rounded-xl p-3 max-w-xs ${bid.side === 'pro' ? 'bg-slate-700' : 'bg-blue-600/30 border border-blue-500/30'}`}>
                  <div className="text-xs text-slate-400 mb-0.5">{bid.label}</div>
                  <div className="text-white font-black text-xl">${bid.amount.toLocaleString()}</div>
                </div>
              </div>
            ))}
            {proThinking && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">🔧</div>
                <div className="bg-slate-700 rounded-xl p-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="flex gap-2 mb-2">
          {[1, 2, 3].map(i => (
            <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= remainingCounters ? 'bg-blue-500' : 'bg-slate-700'}`} />
          ))}
        </div>
        <p className="text-slate-400 text-sm text-center mb-6">{remainingCounters} counter{remainingCounters !== 1 ? 's' : ''} remaining</p>

        {phase !== 'accepted' && remainingCounters > 0 && !proThinking && (
          <Card className="p-5 mb-6">
            <h3 className="text-white font-semibold mb-4">Your Move</h3>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-slate-400 text-sm">Your Offer: $</span>
              <div className="flex items-center gap-2 bg-slate-700 rounded-xl px-4 py-2 flex-1">
                <button onClick={() => setUserOffer(v => String(Math.max(0, parseInt(v || '0', 10) - 25)))} className="text-slate-300 hover:text-white">
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={userOffer}
                  onChange={e => setUserOffer(e.target.value)}
                  className="flex-1 bg-transparent text-white text-center font-bold text-lg outline-none"
                />
                <button onClick={() => setUserOffer(v => String(parseInt(v || '0', 10) + 25))} className="text-slate-300 hover:text-white">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex gap-3">
              <Btn onClick={() => onAccept(lastAmount)} variant="ghost" className="flex-1">Accept ${lastAmount}</Btn>
              <Btn onClick={handleSendOffer} variant="primary" className="flex-1" disabled={proThinking}>
                <Send className="w-4 h-4 inline mr-1" />Counter with ${userOffer}
              </Btn>
            </div>
          </Card>
        )}

        {(phase === 'accepted' || phase === 'done') && (
          <Btn onClick={() => onAccept(lastAmount)} variant="success" size="lg" className="w-full">
            <Check className="w-5 h-5 inline mr-2" />
            Lock in Deal at ${lastAmount} \u00b7 Hire {contractor ? contractor.name : 'Pro'}
          </Btn>
        )}
      </div>
    </div>
  );
}

function ForemanView({ contractor, dealPrice }) {
  const [activeTab, setActiveTab] = useState('tracker');
  const [scopeApproved, setScopeApproved] = useState(false);
  const [scopeVisible, setScopeVisible] = useState(false);
  const [lockOpen, setLockOpen] = useState(false);
  const [beforeAfter, setBeforeAfter] = useState(50);

  const milestones = [
    { id: 1, label: 'Pro dispatched & en route', status: 'complete', time: '10:14 AM' },
    { id: 2, label: 'Arrived on site', status: 'complete', time: '10:47 AM' },
    { id: 3, label: 'Old unit drained & removed', status: 'active', time: 'In Progress' },
    { id: 4, label: 'New unit installed', status: 'pending', time: '~12:30 PM' },
    { id: 5, label: 'System test & commissioning', status: 'pending', time: '~1:00 PM' },
    { id: 6, label: 'AI vision verification', status: 'pending', time: '~1:15 PM' },
  ];

  const tabs = ['tracker', 'vision', 'scope', 'map'];
  const proName = contractor ? contractor.name : 'Pro';
  const total = dealPrice + (scopeApproved ? 185 : 0);

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <Badge color="green">Agent 6 \u00b7 The Foreman</Badge>
          <h1 className="text-2xl font-bold text-white mt-3 mb-1">Active Job Dashboard</h1>
          <p className="text-slate-400">{proName} \u00b7 Locked at <span className="text-green-400">${dealPrice}</span></p>
        </div>

        {!scopeVisible && (
          <button onClick={() => setScopeVisible(true)} className="w-full mb-4 bg-yellow-900/30 border border-yellow-500/40 rounded-xl p-4 text-left hover:bg-yellow-900/40 transition-all">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 animate-pulse" />
              <div>
                <p className="text-yellow-300 font-semibold text-sm">\u26a0 Scope Creep Alert \u2014 Tap to Review</p>
                <p className="text-slate-400 text-xs">Pro discovered corrosion on secondary pipe \u2014 change order pending</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
            </div>
          </button>
        )}

        {scopeVisible && !scopeApproved && (
          <Card className="p-5 mb-4 border-yellow-500/30">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />Change Order Request
            </h3>
            <div className="bg-slate-700/50 rounded-xl p-3 mb-4 text-sm">
              <p className="text-slate-300 mb-2">
                <strong className="text-white">Pro Note:</strong> Found heavy corrosion on the hot water supply line. Recommend replacing 4ft section now while the system is open.
              </p>
              <div className="flex items-center gap-2 text-yellow-300">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Additional cost: <strong>+$185</strong> (AI-verified fair market rate)</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Btn variant="ghost" className="flex-1" onClick={() => setScopeVisible(false)}>Decline</Btn>
              <Btn variant="success" className="flex-1" onClick={() => { setScopeApproved(true); setScopeVisible(false); }}>
                <Check className="w-4 h-4 inline mr-1" />Approve +$185
              </Btn>
            </div>
          </Card>
        )}
        {scopeApproved && (
          <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-3 mb-4">
            <p className="text-green-300 text-sm flex items-center gap-2">
              <Check className="w-4 h-4" />Change order approved \u2014 escrow updated to ${total}
            </p>
          </div>
        )}

        <Card className="p-4 mb-6 flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${lockOpen ? 'bg-green-500/20' : 'bg-slate-700'}`}>
            {lockOpen ? <Unlock className="w-5 h-5 text-green-400" /> : <Lock className="w-5 h-5 text-slate-400" />}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Yale Smart Lock</p>
            <p className="text-slate-400 text-xs">{lockOpen ? 'One-time PIN: 4821 \u00b7 Expires when job completes' : 'Pro has not yet entered geofence'}</p>
          </div>
          <Btn variant={lockOpen ? 'danger' : 'primary'} size="sm" className="ml-auto" onClick={() => setLockOpen(!lockOpen)}>
            {lockOpen ? 'Revoke' : 'Grant Access'}
          </Btn>
        </Card>

        <div className="flex gap-1 bg-slate-800 rounded-xl p-1 mb-6">
          {tabs.map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-all ${activeTab === t ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
              {t === 'vision' ? 'AI Vision' : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'tracker' && (
          <Card className="p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />Milestone Tracker
            </h3>
            <div className="space-y-3">
              {milestones.map(m => (
                <div key={m.id} className="flex gap-3 items-start">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${m.status === 'complete' ? 'bg-green-500' : m.status === 'active' ? 'bg-blue-500 animate-pulse' : 'bg-slate-700'}`}>
                    {m.status === 'complete' && <Check className="w-3.5 h-3.5 text-white" />}
                    {m.status === 'active' && <Activity className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className={`text-sm font-medium ${m.status === 'complete' ? 'text-slate-300' : m.status === 'active' ? 'text-white' : 'text-slate-500'}`}>{m.label}</div>
                    <div className="text-xs text-slate-500">{m.time}</div>
                  </div>
                  {m.status === 'active' && <Badge color="blue">Active</Badge>}
                </div>
              ))}
            </div>
          </Card>
        )}

        {activeTab === 'vision' && (
          <Card className="p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-400" />AI Vision Before/After Comparison
            </h3>
            <div className="relative h-48 bg-slate-700 rounded-xl overflow-hidden mb-4 select-none">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-red-900/60 to-transparent">
                <div className="text-center">
                  <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-2" />
                  <p className="text-red-300 font-semibold text-sm">BEFORE</p>
                  <p className="text-slate-400 text-xs">Leaking unit detected</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-l from-green-900/60 to-transparent"
                style={{ clipPath: `inset(0 0 0 ${beforeAfter}%)` }}>
                <div className="text-center">
                  <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-2" />
                  <p className="text-green-300 font-semibold text-sm">AFTER</p>
                  <p className="text-slate-400 text-xs">New unit verified \u2713</p>
                </div>
              </div>
              <div className="absolute inset-y-0 flex items-center" style={{ left: `${beforeAfter}%`, transform: 'translateX(-50%)' }}>
                <div className="w-1 h-full bg-white/80" />
                <div className="absolute w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <ArrowRight className="w-3 h-3 text-slate-800" />
                </div>
              </div>
            </div>
            <input type="range" min="0" max="100" value={beforeAfter} onChange={e => setBeforeAfter(Number(e.target.value))} className="w-full accent-blue-500" />
            <p className="text-slate-400 text-xs text-center mt-2">Drag to compare \u00b7 AI verified defect resolution</p>
          </Card>
        )}

        {activeTab === 'scope' && (
          <Card className="p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-yellow-400" />Job Scope
            </h3>
            <div className="space-y-3">
              {[
                { item: 'Remove & dispose of 50-gal water heater', cost: 60, status: 'complete' },
                { item: 'Supply & install Rheem RTG-95XLN', cost: 549, status: 'active' },
                { item: 'Reconnect gas & water lines', cost: 120, status: 'pending' },
                ...(scopeApproved ? [{ item: 'Hot water supply line replacement (4ft)', cost: 185, status: 'approved', extra: true }] : []),
                { item: 'System commissioning & test', cost: 80, status: 'pending' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-700/50 last:border-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${s.status === 'complete' ? 'bg-green-400' : s.status === 'active' ? 'bg-blue-400 animate-pulse' : s.status === 'approved' ? 'bg-yellow-400' : 'bg-slate-600'}`} />
                    <span className={`text-sm ${s.extra ? 'text-yellow-300' : 'text-slate-300'}`}>{s.item}</span>
                    {s.extra && <Badge color="yellow">Change Order</Badge>}
                  </div>
                  <span className="text-white font-semibold text-sm shrink-0">${s.cost}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 font-bold">
                <span className="text-white">Total</span>
                <span className="text-white">${total}</span>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'map' && (
          <Card className="p-5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-blue-400" />Live Dispatch Tracker
            </h3>
            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block">
                  <Navigation className="w-8 h-8 text-blue-400 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 border-2 border-slate-800" />
                </div>
                <p className="text-white font-semibold mt-2 text-sm">{proName}</p>
                <p className="text-blue-300 text-xs">On-site \u00b7 1842 Maple St</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[{ label: 'Status', value: 'On-Site' }, { label: 'Arrived', value: '10:47 AM' }, { label: 'Est. Done', value: '1:15 PM' }].map(({ label, value }) => (
                <div key={label} className="bg-slate-700/50 rounded-xl p-3 text-center">
                  <div className="text-white font-semibold text-sm">{value}</div>
                  <div className="text-slate-400 text-xs">{label}</div>
                </div>
              ))}
            </div>
          </Card>
        )}

        <div className="mt-6 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-xs">Escrow Balance</p>
            <p className="text-white font-bold text-xl">${total}</p>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-xs">Releases on AI Verification</p>
            <Badge color="green">Funds Protected</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrokerDashboard({ onBack }) {
  const [showFactoring, setShowFactoring] = useState(false);
  const jobs = [
    { id: 'TJ-8821', type: 'Water Heater', client: 'M. Johnson', status: 'active', amount: 850, pro: 'AquaFlow' },
    { id: 'TJ-8820', type: 'AC Repair', client: 'S. Garcia', status: 'pending', amount: 420, pro: 'CoolBreeze' },
    { id: 'TJ-8819', type: 'Panel Upgrade', client: 'R. Chen', status: 'complete', amount: 2200, pro: 'VoltPro' },
    { id: 'TJ-8818', type: 'Roof Patch', client: 'T. Williams', status: 'complete', amount: 680, pro: 'TopShield' },
  ];
  const stats = [
    { label: 'Active Jobs', value: '12', icon: Activity, color: 'text-blue-400' },
    { label: 'Month GMV', value: '$48.2k', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Avg. Savings', value: '14%', icon: TrendingDown, color: 'text-yellow-400' },
    { label: 'Satisfaction', value: '4.9\u2605', icon: Star, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Broker Dashboard</h1>
            <p className="text-slate-400">Pro/Admin \u00b7 Trade Jobs AI Platform</p>
          </div>
          <Btn variant="ghost" onClick={onBack} size="sm">\u2190 Back to App</Btn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <Card key={label} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-slate-400 text-xs">{label}</span>
              </div>
              <div className="text-2xl font-black text-white">{value}</div>
            </Card>
          ))}
        </div>
        <Card className="p-5 mb-6 border-green-500/30">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Banknote className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">Instant Payout Factoring</span>
              <Badge color="green">New</Badge>
            </div>
            <button onClick={() => setShowFactoring(!showFactoring)} className="text-green-400 text-sm">
              {showFactoring ? 'Hide' : 'Cash Out Now'}
            </button>
          </div>
          {showFactoring ? (
            <div className="space-y-3">
              <div className="bg-slate-700/50 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">Available to Factor</div>
                  <div className="text-slate-400 text-sm">TJ-8819, TJ-8818 (completed jobs)</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-green-400">$2,880</div>
                  <div className="text-slate-400 text-xs">After 1.5% fee</div>
                </div>
              </div>
              <Btn variant="success" className="w-full">
                <Zap className="w-4 h-4 inline mr-2" />Instant Pay to Debit \u2014 $2,880
              </Btn>
            </div>
          ) : (
            <p className="text-slate-400 text-sm">Don't wait for ACH. Get paid instantly for a <strong className="text-white">1.5% fee</strong>. Available: <strong className="text-green-400">$2,880</strong></p>
          )}
        </Card>
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold flex items-center gap-2"><List className="w-4 h-4 text-blue-400" />Job Queue</h3>
            <div className="flex gap-2"><Badge color="blue">12 Active</Badge><Badge color="green">8 Done</Badge></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-2 pr-4">Job ID</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Client</th>
                  <th className="text-left py-2 pr-4">Pro</th>
                  <th className="text-right py-2 pr-4">Amount</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => (
                  <tr key={job.id} className="border-b border-slate-700/50 last:border-0">
                    <td className="py-3 pr-4 text-blue-400 font-mono">{job.id}</td>
                    <td className="py-3 pr-4 text-slate-200">{job.type}</td>
                    <td className="py-3 pr-4 text-slate-300">{job.client}</td>
                    <td className="py-3 pr-4 text-slate-300">{job.pro}</td>
                    <td className="py-3 pr-4 text-white font-semibold text-right">${job.amount.toLocaleString()}</td>
                    <td className="py-3">
                      <Badge color={job.status === 'active' ? 'blue' : job.status === 'complete' ? 'green' : 'yellow'}>{job.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

const NAV_STEPS = [
  { view: VIEWS.INTAKE, label: 'Intake' },
  { view: VIEWS.SUMMARY, label: 'Summary' },
  { view: VIEWS.ESTIMATOR, label: 'Estimate' },
  { view: VIEWS.QUOTES, label: 'Quotes' },
  { view: VIEWS.NEGOTIATOR, label: 'Negotiate' },
  { view: VIEWS.FOREMAN, label: 'Foreman' },
];

function NavBar({ currentView }) {
  const currentIdx = NAV_STEPS.findIndex(s => s.view === currentView);
  if (currentIdx === -1) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-t border-slate-800 px-4 py-3">
      <div className="max-w-3xl mx-auto flex items-center gap-1">
        {NAV_STEPS.map((step, i) => (
          <div key={step.view} className="flex items-center flex-1">
            <div className={`flex flex-col items-center flex-1 ${i <= currentIdx ? 'opacity-100' : 'opacity-30'}`}>
              <div className={`w-2 h-2 rounded-full mb-1 ${i < currentIdx ? 'bg-green-400' : i === currentIdx ? 'bg-blue-400 animate-pulse' : 'bg-slate-600'}`} />
              <span className={`text-xs ${i === currentIdx ? 'text-blue-300 font-semibold' : i < currentIdx ? 'text-green-300' : 'text-slate-500'}`}>{step.label}</span>
            </div>
            {i < NAV_STEPS.length - 1 && <div className={`h-0.5 w-3 mx-0.5 rounded ${i < currentIdx ? 'bg-green-400' : 'bg-slate-700'}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState(VIEWS.INTAKE);
  const [jobRequest, setJobRequest] = useState('');
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [dealPrice, setDealPrice] = useState(null);

  const handleIntakeSubmit = (text) => {
    if (text === 'broker_view') { setView(VIEWS.BROKER); return; }
    setJobRequest(typeof text === 'string' ? text : '');
    setView(VIEWS.ANALYZING);
  };

  return (
    <div className="min-h-screen bg-slate-900 pb-20">
      {view === VIEWS.IOT_TRIGGER && (
        <IoTTriggerView onDismiss={() => setView(VIEWS.INTAKE)} onAccept={() => { setJobRequest('Water leak detected by Flume sensor'); setView(VIEWS.AR_SCAN); }} />
      )}
      {view === VIEWS.AR_SCAN && <ARScanView onComplete={() => setView(VIEWS.ANALYZING)} />}
      {view === VIEWS.INTAKE && <IntakeView onSubmit={handleIntakeSubmit} onIoTDemo={() => setView(VIEWS.IOT_TRIGGER)} />}
      {view === VIEWS.ANALYZING && <AnalyzingView onComplete={() => setView(VIEWS.SUMMARY)} />}
      {view === VIEWS.SUMMARY && <IntakeSummaryView jobRequest={jobRequest} onNext={() => setView(VIEWS.ESTIMATOR)} />}
      {view === VIEWS.ESTIMATOR && <EstimatorView onNext={() => setView(VIEWS.QUOTES)} />}
      {view === VIEWS.QUOTES && <QuotesView onSelect={c => { setSelectedContractor(c); setView(VIEWS.NEGOTIATOR); }} />}
      {view === VIEWS.NEGOTIATOR && <NegotiatorView contractor={selectedContractor} onAccept={price => { setDealPrice(price); setView(VIEWS.FOREMAN); }} />}
      {view === VIEWS.FOREMAN && <ForemanView contractor={selectedContractor} dealPrice={dealPrice || 850} />}
      {view === VIEWS.BROKER && <BrokerDashboard onBack={() => setView(VIEWS.INTAKE)} />}
      <NavBar currentView={view} />
    </div>
  );
}
