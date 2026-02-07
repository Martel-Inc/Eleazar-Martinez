
import React, { useState } from 'react';
import { LogoAnimation } from './components/LogoAnimation';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './views/DashboardView';
import { SystemsView } from './views/SystemsView';
import { PersonalView } from './views/PersonalView';
import { TaskManagementView } from './views/TaskManagementView';
import { SuperAdminView } from './views/SuperAdminView';
import { UserRole, CompanyPlan, Company, AppContextType } from './types';
import { 
  ShieldCheck, 
  User, 
  Zap, 
  Briefcase, 
  ChevronRight, 
  ArrowLeft,
  Star,
  LogIn,
  Crown,
  Search,
  Bell,
  Settings,
  MessageSquare
} from 'lucide-react';

const MaiaTextLogo = ({ className = "text-4xl" }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="maia-logo-neon font-black italic tracking-tighter leading-none select-none">
      <span className="text-white">MA</span>
      <span className="text-[#22c55e]">I</span>
      <span className="text-white">A</span>
    </div>
    <div className="maia-logo-neon font-black italic tracking-[0.2em] text-white text-[0.325em] uppercase -mt-[0.05em] opacity-100 whitespace-nowrap select-none">
      MASTER CONTROL
    </div>
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginStep, setLoginStep] = useState<'menu' | 'roles'>('menu');
  const [userRole, setUserRole] = useState<UserRole>(UserRole.ADMIN);
  const [activeContext, setActiveContext] = useState<AppContextType>('CORE');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedMasterId, setSelectedMasterId] = useState<string | null>(null);

  const [company] = useState<Company>({
    id: 'MC-7724',
    name: 'MASTER CONTROL HQ',
    logo: 'logomaster.png',
    address: 'Av. Paseo de la Reforma 402, CDMX',
    phone: '+52 55 8890 1234',
    email: 'ops@mastercontrol.ai',
    schedule: '08:00 - 20:00',
    giro: 'ERP Corporativo',
    plan: CompanyPlan.MASTER,
    modules: ['master_restaurant', 'master_rrhh'],
    onboardingCompleted: true
  });

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsLoggedIn(true);
    if (role === UserRole.SUPER_ADMIN) {
      setActiveContext('SUPER_ADMIN');
      setActiveTab('sa_dashboard');
    } else {
      setActiveContext('CORE');
      setActiveTab(role === UserRole.COLABORADOR ? 'tareas' : 'dashboard');
    }
  };

  if (showSplash) return <LogoAnimation onComplete={() => setShowSplash(false)} />;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 relative font-['Inter'] overflow-hidden">
        <div className="absolute top-[-30%] left-[-30%] w-[80%] h-[80%] bg-emerald-900/10 rounded-full blur-[250px] pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-30%] w-[80%] h-[80%] bg-purple-900/10 rounded-full blur-[250px] pointer-events-none" />

        <div className="max-w-md w-full relative z-10">
          <div className="maia-panel-neon rounded-[4rem] p-12 transition-all border-[4px] border-[#22c55e] shadow-[0_0_50px_rgba(34,197,94,0.4)]">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-10">
                <MaiaTextLogo className="text-6xl" />
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-[9px] font-black uppercase tracking-[0.8em] opacity-60">SISTEMA INTEGRAL</p>
                <h2 className="text-[#22c55e] text-[10px] font-black tracking-[1.2em] uppercase">PROTOCOLO DE ACCESO</h2>
              </div>
            </div>

            <div className="space-y-5">
              {loginStep === 'menu' ? (
                <>
                  <button onClick={() => setLoginStep('roles')} className="w-full py-6 bg-white/5 text-white border-[3px] border-[#22c55e]/40 rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.6em] flex items-center justify-center gap-4 hover:bg-[#22c55e]/10 hover:border-[#22c55e] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all">
                    <LogIn className="w-4 h-4 text-[#22c55e]" /> INICIAR SESIÓN
                  </button>
                  <button className="w-full py-6 bg-emerald-500/5 border-[3px] border-emerald-500/20 text-[#22c55e] rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.6em] flex items-center justify-center gap-4 hover:bg-emerald-500/10 transition-all">
                    <Star className="w-4 h-4" /> SOLICITAR DEMO
                  </button>
                  <button onClick={() => handleLogin(UserRole.SUPER_ADMIN)} className="w-full py-6 bg-purple-500/5 border-[3px] border-purple-500/20 text-purple-300 rounded-[2.5rem] font-black text-[10px] uppercase tracking-[0.6em] flex items-center justify-center gap-4 hover:bg-purple-500/10 hover:border-purple-500 transition-all">
                    <Crown className="w-4 h-4 text-purple-400" /> SUPER ADMINISTRADOR
                  </button>
                </>
              ) : (
                <div className="space-y-3 animate-in fade-in slide-in-from-right-12 duration-500">
                  <button onClick={() => setLoginStep('menu')} className="flex items-center gap-3 text-[10px] font-black text-[#22c55e] uppercase tracking-[0.4em] mb-8 hover:opacity-50 transition-opacity">
                    <ArrowLeft className="w-4 h-4" /> REGRESAR
                  </button>
                  <LoginOption onClick={() => handleLogin(UserRole.ADMIN)} icon={<ShieldCheck />} label="DIRECCIÓN GENERAL" />
                  <LoginOption onClick={() => handleLogin(UserRole.SUPERVISOR)} icon={<Briefcase />} label="GERENCIA OPERATIVA" />
                  <LoginOption onClick={() => handleLogin(UserRole.JEFE_DE_AREA)} icon={<Zap />} label="JEFE DE ÁREA" />
                  <LoginOption onClick={() => handleLogin(UserRole.COLABORADOR)} icon={<User />} label="PERSONAL EQUIPO" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex font-['Inter'] relative text-white overflow-hidden">
      <Sidebar 
        userRole={userRole} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        activeContext={activeContext}
        company={company}
        onSelectMaster={(mid) => { setSelectedMasterId(mid); setActiveContext('MASTER_MODULE'); }}
        onExitMaster={() => { setSelectedMasterId(null); setActiveContext('CORE'); setActiveTab('dashboard'); }}
        onLogout={() => { setIsLoggedIn(false); setLoginStep('menu'); }}
      />
      
      <main className="flex-1 h-screen overflow-y-auto relative z-10 flex flex-col scrollbar-hide">
        <header className="h-24 bg-black/95 border-b-2 border-[#22c55e]/30 sticky top-0 z-40 backdrop-blur-3xl px-12 flex items-center justify-between">
          <div className="flex items-center gap-16 flex-1">
             <div className="relative w-[400px]">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
               <input type="text" placeholder="BÚSQUEDA DE PROTOCOLOS..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-14 pr-6 text-[10px] font-black uppercase tracking-[0.3em] text-white focus:border-[#22c55e] outline-none transition-all" />
             </div>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex items-center gap-6 border-r border-white/10 pr-12">
              <button className="p-3 text-slate-500 hover:text-[#22c55e] transition-all relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#22c55e] rounded-full shadow-[0_0_15px_#22c55e]" />
              </button>
              <button className="p-3 text-slate-500 hover:text-white transition-all"><MessageSquare className="w-6 h-6" /></button>
              <button className="p-3 text-slate-500 hover:text-white transition-all"><Settings className="w-6 h-6" /></button>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm font-black text-white uppercase tracking-widest">USER PRO 2024</p>
                <p className="text-[10px] font-black text-[#22c55e] uppercase tracking-[0.5em] leading-none mt-2">{userRole}</p>
              </div>
              <div className="w-12 h-12 rounded-xl border-2 border-[#22c55e] p-1 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                 <img src={`https://i.pravatar.cc/150?u=${userRole}`} alt="Perfil" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-12 space-y-12">
          {activeContext === 'SUPER_ADMIN' && <SuperAdminView />}
          {activeContext === 'CORE' && (
            <>
              {activeTab === 'dashboard' && <DashboardView company={company} role={userRole} />}
              {activeTab === 'sistemas' && <SystemsView />}
              {activeTab === 'personal' && <PersonalView />}
              {activeTab === 'tareas' && <TaskManagementView role={userRole} />}
            </>
          )}
          {activeContext === 'MASTER_MODULE' && (
             <div className="h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-3xl rounded-[7rem] border-2 border-[#22c55e]/40 p-24 text-center space-y-16 shadow-[0_0_100px_rgba(34,197,94,0.1)]">
                <MaiaTextLogo className="text-7xl" />
                <h2 className="text-6xl font-black text-white tracking-tighter uppercase">ECOSISTEMA MASTER</h2>
                <p className="text-[#22c55e] font-black text-3xl uppercase tracking-[1em]">{selectedMasterId?.replace('_', ' ')}</p>
                <button onClick={() => { setSelectedMasterId(null); setActiveContext('CORE'); setActiveTab('dashboard'); }} className="px-16 py-6 bg-black border-2 border-[#22c55e] text-[#22c55e] rounded-[3rem] font-black text-[10px] uppercase tracking-[0.8em] hover:bg-[#22c55e] hover:text-black transition-all">
                  VOLVER AL NÚCLEO
                </button>
             </div>
          )}
        </div>
      </main>
    </div>
  );
}

const LoginOption = ({ onClick, icon, label }: any) => (
  <button onClick={onClick} className="group w-full py-5 bg-white/5 text-white border-[2px] border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.5em] flex items-center justify-between px-10 hover:border-[#22c55e] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all">
    <div className="flex items-center gap-8">
      <div className="text-slate-600 group-hover:text-[#22c55e] transition-colors">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <span>{label}</span>
    </div>
    <ChevronRight className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
  </button>
);
