
import React, { useState } from 'react';
import { LogoAnimation } from './components/LogoAnimation';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './views/DashboardView';
import { SystemsView } from './views/SystemsView';
import { PersonalView } from './views/PersonalView';
import { TaskManagementView } from './views/TaskManagementView';
import { SuperAdminView } from './views/SuperAdminView';
import { PlansView } from './views/PlansView';
import { MasterRestaurantView } from './views/MasterRestaurantView';
import { UserRole, CompanyPlan, Company, AppContextType } from './types';
import { PLAN_DETAILS, MASTER_MODULES } from './constants';
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
  MessageSquare,
  Mail,
  Lock,
  AlertCircle,
  Cpu,
  Database,
  Cloud,
  Shield,
  FileCheck,
  LockIcon,
  Globe,
  HardDrive
} from 'lucide-react';

const MaiaTextLogo = ({ className = "text-4xl" }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="maia-logo-neon font-black italic tracking-[0.1em] leading-none select-none flex gap-1">
      <span className="text-white">M</span>
      <span className="text-white">A</span>
      <span className="text-[#22c55e]">I</span>
      <span className="text-white">A</span>
    </div>
    <div className="font-black italic tracking-[0.4em] text-white/60 text-[0.3em] uppercase mt-2 whitespace-nowrap select-none">
      MASTER CONTROL
    </div>
  </div>
);

const SecurityBadges = () => (
  <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
    <div className="flex flex-col items-center gap-2 security-badge-3d group">
      <div className="w-10 h-10 rounded-full border border-blue-500 bg-blue-900/20 flex items-center justify-center text-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
        <Globe className="w-5 h-5" />
      </div>
      <span className="text-[6px] font-black uppercase tracking-[0.2em] text-blue-400">GDPR COMPLIANCE</span>
    </div>
    <div className="flex flex-col items-center gap-2 security-badge-3d group">
      <div className="w-10 h-10 rounded-full border border-indigo-500 bg-indigo-900/20 flex items-center justify-center text-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all">
        <FileCheck className="w-5 h-5" />
      </div>
      <span className="text-[6px] font-black uppercase tracking-[0.2em] text-indigo-400">ISO 27001 SECURE</span>
    </div>
    <div className="flex flex-col items-center gap-2 security-badge-3d group">
      <div className="w-10 h-10 rounded-full border border-amber-500 bg-amber-900/20 flex items-center justify-center text-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all">
        <ShieldCheck className="w-5 h-5" />
      </div>
      <span className="text-[6px] font-black uppercase tracking-[0.2em] text-amber-400">ISO 27018 CLOUD</span>
    </div>
    <div className="flex flex-col items-center gap-2 security-badge-3d group">
      <div className="w-10 h-10 rounded-full border border-sky-500 bg-sky-900/20 flex items-center justify-center text-sky-400 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.4)] transition-all">
        <HardDrive className="w-5 h-5" />
      </div>
      <span className="text-[6px] font-black uppercase tracking-[0.2em] text-sky-400">AICPA SOC TYPE II</span>
    </div>
    <div className="flex flex-col items-center gap-2 security-badge-3d group">
      <div className="w-10 h-10 rounded-full border border-blue-700 bg-blue-900/20 flex items-center justify-center text-blue-200 group-hover:shadow-[0_0_15px_rgba(29,78,216,0.4)] transition-all">
        <LockIcon className="w-5 h-5" />
      </div>
      <span className="text-[6px] font-black uppercase tracking-[0.2em] text-blue-300">HIPAA PROTECTED</span>
    </div>
  </div>
);

const TechFooter = ({ prominent = false }: { prominent?: boolean }) => (
  <div className={`fixed bottom-0 left-0 right-0 ${prominent ? 'h-12 bg-black/90' : 'h-8 bg-black/80'} backdrop-blur-2xl border-t border-[#22c55e]/30 z-[60] flex items-center px-8 justify-between overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)] transition-all`}>
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-3">
        <Cpu className="w-3 h-3 text-[#22c55e] animate-pulse" />
        <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.4em]">MAIA IA 5.0</span>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="w-3 h-3 text-[#22c55e]" />
        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">MARTEL INC.</span>
      </div>
      <div className="flex items-center gap-3">
        <Database className="w-3 h-3 text-[#22c55e]" />
        <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.4em]">MASTER CONTROL ERP</span>
      </div>
    </div>

    <div className="flex items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-ping" />
        <span className="text-[8px] font-black text-[#22c55e] uppercase tracking-[0.4em]">GEMINI IA INTEGRATED</span>
      </div>
      <div className="flex items-center gap-3">
        <Cloud className="w-4 h-4 text-sky-400" />
        <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.4em]">POWERED BY GOOGLE CLOUD</span>
      </div>
      <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-8">
        <span className="text-[7px] font-black text-slate-600 uppercase tracking-[0.4em]">ENC: AES-256-V2</span>
        <span className="text-[7px] font-black text-[#22c55e] uppercase tracking-[0.4em]">SYSTEM_ONLINE_L5</span>
      </div>
    </div>
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginStep, setLoginStep] = useState<'menu' | 'credentials'>('menu');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [userRole, setUserRole] = useState<UserRole>(UserRole.ADMIN);
  const [activeContext, setActiveContext] = useState<AppContextType>('CORE');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedMasterId, setSelectedMasterId] = useState<string | null>(null);

  const [company, setCompany] = useState<Company>({
    id: 'MC-TRIAL-01',
    name: 'EMPRESA PRUEBA',
    logo: 'logomaster.png',
    address: 'Configuración Central MAIA',
    phone: '800-MASTER-MAIA',
    email: 'admin@maia.com',
    schedule: '24/7 Operativo',
    giro: 'Multiservicios Master',
    plan: CompanyPlan.TRIAL,
    modules: [],
    onboardingCompleted: true,
    maxEmployees: 15,
    maxSupervisors: 1,
    maxManagers: 1,
    extraSupervisors: 0,
    extraEmployeeBlocks: 0
  });

  const handleRealLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Usuario Maestro configurado según instrucción: admin@maia.com posee todos los módulos y 2000 registros
    if (email === 'admin@maia.com' && password === 'Prueba123') {
      setUserRole(UserRole.ADMIN);
      setCompany({
        id: 'MC-MASTER-PRO-01',
        name: 'EMPRESA PRUEBA',
        logo: 'logomaster.png',
        address: 'HQ Master Control Center',
        phone: '800-MAIA-FULL',
        email: 'admin@maia.com',
        schedule: '24/7 Operativo',
        giro: 'Corporativo Industrial',
        plan: CompanyPlan.MASTER,
        // Activamos TODOS los módulos del ecosistema para el dueño
        modules: MASTER_MODULES.map(m => m.id),
        onboardingCompleted: true,
        maxEmployees: 999999,
        maxSupervisors: 999999,
        maxManagers: 999999,
        extraSupervisors: 0,
        extraEmployeeBlocks: 0
      });
      setIsLoggedIn(true);
      setActiveContext('CORE');
      setActiveTab('dashboard');
    } else if (email === 'superadmin@maia.com' && password === 'Maia123') {
      setUserRole(UserRole.SUPER_ADMIN);
      setIsLoggedIn(true);
      setActiveContext('SUPER_ADMIN');
      setActiveTab('sa_dashboard');
    } else {
      setError('Protocolo de autenticación fallido. Verifique sus credenciales.');
    }
  };

  const handleUpgrade = (newPlan: CompanyPlan) => {
    const details = PLAN_DETAILS[newPlan];
    setCompany(prev => ({
      ...prev,
      plan: newPlan,
      maxEmployees: details.limits.employees,
      maxSupervisors: details.limits.supervisors,
      maxManagers: details.limits.managers
    }));
  };

  const exitMasterContext = () => {
    setSelectedMasterId(null);
    setActiveContext('CORE');
    setActiveTab('dashboard');
  };

  if (showSplash) return <LogoAnimation onComplete={() => setShowSplash(false)} />;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6 relative font-['Inter'] overflow-hidden">
        <div className="max-w-md w-full relative z-10">
          <div className="maia-panel-neon rounded-[3.5rem] p-12 transition-all border-2 border-[#22c55e] shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-8">
                <MaiaTextLogo className="text-5xl" />
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-[8px] font-black uppercase tracking-[0.8em]">PROTOCOL INTERFACE</p>
                <h2 className="text-[#22c55e] text-[9px] font-black tracking-[1.2em] uppercase italic drop-shadow-[0_0_5px_#22c55e]">LOGIN_SYSTEM_V5</h2>
              </div>
            </div>

            {loginStep === 'menu' ? (
              <div className="space-y-6">
                <button onClick={() => setLoginStep('credentials')} className="w-full py-5 bg-white/5 text-white border-2 border-[#22c55e]/30 rounded-[2rem] font-black text-[9px] uppercase tracking-[0.6em] flex items-center justify-center gap-4 hover:bg-[#22c55e]/10 hover:border-[#22c55e] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all">
                  <LogIn className="w-4 h-4 text-[#22c55e]" /> INICIAR SESION
                </button>
                <button className="w-full py-5 bg-emerald-500/5 border-2 border-emerald-500/20 text-[#22c55e] rounded-[2rem] font-black text-[9px] uppercase tracking-[0.6em] flex items-center justify-center gap-4 hover:bg-emerald-500/10 transition-all">
                  <Star className="w-4 h-4" /> REGISTRO GRATIS
                </button>
                <div className="pt-6 text-center px-6">
                  <p className="text-[9px] font-black text-[#22c55e] uppercase tracking-[0.2em] leading-relaxed drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] animate-pulse">
                    ACCESO EXCLUSIVO A CLIENTES MASTER
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRealLogin} className="space-y-6 animate-in fade-in slide-in-from-right-12 duration-500">
                <button type="button" onClick={() => setLoginStep('menu')} className="flex items-center gap-3 text-[9px] font-black text-[#22c55e] uppercase tracking-[0.4em] mb-8 hover:opacity-60 transition-opacity">
                  <ArrowLeft className="w-4 h-4" /> REGRESAR
                </button>

                <div className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="email" 
                      placeholder="EMAIL DE USUARIO" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-black/40 border border-white/20 rounded-[1.8rem] py-4 pl-14 pr-6 text-[9px] font-black uppercase tracking-[0.3em] text-white focus:border-[#22c55e] outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="password" 
                      placeholder="CONTRASEÑA" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-black/40 border border-white/20 rounded-[1.8rem] py-4 pl-14 pr-6 text-[9px] font-black uppercase tracking-[0.3em] text-white focus:border-[#22c55e] outline-none transition-all placeholder:text-slate-700" 
                    />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-3 text-[8px] font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 p-4 rounded-2xl border border-rose-500/30">
                    <AlertCircle className="w-4 h-4" /> {error}
                  </div>
                )}

                <button type="submit" className="w-full py-5 bg-[#22c55e] text-black rounded-[2rem] font-black text-[10px] uppercase tracking-[0.8em] shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_#22c55e] active:scale-95 transition-all">
                  ENTRAR
                </button>
              </form>
            )}
          </div>
          <SecurityBadges />
        </div>
        <TechFooter prominent={true} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent flex font-['Inter'] relative text-white overflow-hidden">
      <Sidebar 
        userRole={userRole} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        activeContext={activeContext}
        company={company}
        onSelectMaster={(mid) => { setSelectedMasterId(mid); setActiveContext('MASTER_MODULE'); setActiveTab(mid); }}
        onExitMaster={exitMasterContext}
        onLogout={() => { setIsLoggedIn(false); setLoginStep('menu'); setEmail(''); setPassword(''); setError(''); }}
      />
      
      <main className="flex-1 h-screen overflow-y-auto relative z-10 flex flex-col scrollbar-hide pb-12">
        <header className="h-20 bg-black/70 border-b-2 border-[#22c55e]/30 sticky top-0 z-40 backdrop-blur-3xl px-12 flex items-center justify-between">
          <div className="flex items-center gap-16 flex-1">
             <div className="relative w-[380px]">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
               <input type="text" placeholder="BÚSQUEDA DE PROTOCOLOS..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-14 pr-6 text-[9px] font-black uppercase tracking-[0.3em] text-white focus:border-[#22c55e] outline-none transition-all" />
             </div>
          </div>

          <div className="flex items-center gap-10">
            <div className="flex items-center gap-6 border-r border-white/10 pr-10">
              <button className="p-2.5 text-slate-500 hover:text-[#22c55e] transition-all relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#22c55e] rounded-full shadow-[0_0_10px_#22c55e]" />
              </button>
              <button className="p-2.5 text-slate-500 hover:text-white transition-all"><MessageSquare className="w-5 h-5" /></button>
              <button className="p-2.5 text-slate-500 hover:text-white transition-all"><Settings className="w-5 h-5" /></button>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs font-black text-white uppercase tracking-widest">{userRole === UserRole.SUPER_ADMIN ? 'OMNI OPERATOR' : 'GERENTE GENERAL'}</p>
                <p className="text-[9px] font-black text-[#22c55e] uppercase tracking-[0.5em] mt-1">{userRole}</p>
              </div>
              <div className="w-10 h-10 rounded-xl border-2 border-[#22c55e] p-0.5 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                 <img src={`https://i.pravatar.cc/150?u=${userRole}`} alt="Perfil" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 p-10 space-y-10">
          {activeContext === 'SUPER_ADMIN' && <SuperAdminView />}
          {activeContext === 'CORE' && (
            <>
              {activeTab === 'dashboard' && <DashboardView company={company} role={userRole} />}
              {activeTab === 'sistemas' && <SystemsView />}
              {activeTab === 'personal' && <PersonalView />}
              {activeTab === 'tareas' && <TaskManagementView role={userRole} />}
              {activeTab === 'planes' && <PlansView company={company} onUpgrade={handleUpgrade} />}
              {activeTab === 'modulos_activos' && (
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-700">
                    {MASTER_MODULES.filter(m => company.modules.includes(m.id)).map(mod => (
                       <div key={mod.id} className="p-8 rounded-[3rem] bg-black/40 border-[3px] border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.2)] flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-black border border-[#22c55e]/30" style={{ color: mod.color }}>
                             {React.cloneElement(mod.icon as any, { size: 32 })}
                          </div>
                          <h4 className="text-lg font-black text-white uppercase tracking-widest">{mod.name}</h4>
                          <button onClick={() => { setSelectedMasterId(mod.id); setActiveContext('MASTER_MODULE'); setActiveTab(mod.id); }} className="px-6 py-2 bg-[#22c55e] text-black rounded-xl font-black text-[9px] uppercase tracking-[0.4em] hover:shadow-[0_0_15px_#22c55e] transition-all">
                             ACCEDER
                          </button>
                       </div>
                    ))}
                    {company.modules.length === 0 && (
                       <div className="col-span-full p-20 text-center border-2 border-dashed border-white/10 rounded-[4rem]">
                          <p className="text-slate-500 font-black uppercase tracking-[0.8em]">No hay módulos activos contratados</p>
                          <button onClick={() => setActiveTab('planes')} className="mt-8 px-10 py-4 border-2 border-[#22c55e] text-[#22c55e] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#22c55e] hover:text-black transition-all">
                             VER PLANES
                          </button>
                       </div>
                    )}
                 </div>
              )}
            </>
          )}
          {activeContext === 'MASTER_MODULE' && (
             <>
               {selectedMasterId === 'master_restaurant' ? (
                 <MasterRestaurantView onExit={exitMasterContext} />
               ) : (
                 <div className="h-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-3xl rounded-[6rem] border-2 border-[#22c55e]/40 p-20 text-center space-y-12 shadow-[0_0_100px_rgba(34,197,94,0.1)]">
                    <MaiaTextLogo className="text-7xl" />
                    <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">ECOSISTEMA <span className="text-[#22c55e]">MASTER</span></h2>
                    <p className="text-[#22c55e] font-black text-3xl uppercase tracking-[1em]">{selectedMasterId?.replace('_', ' ')}</p>
                    <button onClick={exitMasterContext} className="px-16 py-6 bg-black border-2 border-[#22c55e] text-[#22c55e] rounded-[3rem] font-black text-[10px] uppercase tracking-[0.8em] hover:bg-[#22c55e] hover:text-black transition-all">
                      VOLVER AL NÚCLEO
                    </button>
                 </div>
               )}
             </>
          )}
        </div>
      </main>
      <TechFooter prominent={false} />
    </div>
  );
}
