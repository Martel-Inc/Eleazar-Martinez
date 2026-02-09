
import React, { useState } from 'react';
import { CORE_MENU, MASTER_MODULES, SUPER_ADMIN_MENU } from '../constants';
import { UserRole, AppContextType, Company } from '../types';
import { LogOut, ChevronRight, Lock, Minus, Plus } from 'lucide-react';

const MaiaTextLogo = ({ className = "text-2xl" }: { className?: string }) => (
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

interface SidebarProps {
  userRole: UserRole;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeContext: AppContextType;
  company: Company;
  onSelectMaster: (mid: string) => void;
  onExitMaster: () => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  userRole, 
  activeTab, 
  setActiveTab, 
  activeContext, 
  company,
  onSelectMaster,
  onLogout
}) => {
  const [isMasterSuiteExpanded, setIsMasterSuiteExpanded] = useState(true);

  const renderMenuContent = () => {
    if (activeContext === 'SUPER_ADMIN') {
      return SUPER_ADMIN_MENU.map(item => (
        <SidebarItem 
          key={item.id} 
          item={item} 
          active={activeTab === item.id} 
          onClick={() => setActiveTab(item.id)} 
        />
      ));
    }

    const menu = CORE_MENU.filter(item => item.roles.includes(userRole));
    return (
      <div className="space-y-4">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.8em] mb-4 px-8">SISTEMA NÚCLEO</p>
        <div className="space-y-1">
          {menu.map(item => (
            <SidebarItem 
              key={item.id} 
              item={item} 
              active={activeTab === item.id} 
              onClick={() => setActiveTab(item.id)} 
            />
          ))}
        </div>

        {userRole === UserRole.ADMIN && (
          <div className="mt-12 space-y-4">
            <div 
              className="flex items-center justify-between px-8 mb-4 cursor-pointer group/header"
              onClick={() => setIsMasterSuiteExpanded(!isMasterSuiteExpanded)}
            >
              <div className="flex items-center gap-2">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.8em] group-hover/header:text-[#22c55e] transition-colors">SUITE MASTER</p>
                {isMasterSuiteExpanded ? (
                  <Minus className="w-3 h-3 text-slate-600 group-hover/header:text-[#22c55e]" />
                ) : (
                  <Plus className="w-3 h-3 text-slate-600 group-hover/header:text-[#22c55e]" />
                )}
              </div>
              <div className="px-2 py-0.5 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded text-[7px] font-black text-[#22c55e] uppercase tracking-widest">
                ECOSISTEMA
              </div>
            </div>
            
            {isMasterSuiteExpanded && (
              <div className="space-y-1 px-4 animate-in fade-in slide-in-from-top-2 duration-300">
                {MASTER_MODULES.map(mod => {
                  const isInstalled = company.modules.includes(mod.id);
                  return (
                    <SidebarItem 
                      key={mod.id} 
                      item={mod} 
                      active={activeTab === mod.id} 
                      onClick={() => isInstalled && onSelectMaster(mod.id)} 
                      variant="master"
                      locked={!isInstalled}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-72 bg-black/40 backdrop-blur-3xl border-r-2 border-[#22c55e]/30 h-screen flex flex-col sticky top-0 z-50">
      <div className="p-12 flex flex-col items-center justify-center">
        <MaiaTextLogo className="text-3xl" />
      </div>

      <nav className="flex-1 overflow-y-auto pb-16 space-y-3 scrollbar-hide">
        {renderMenuContent()}
      </nav>

      <div className="p-8 bg-black/40 border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-4 py-3.5 text-rose-500 bg-rose-500/5 border-2 border-rose-500/20 rounded-2xl text-[9px] font-black uppercase tracking-[0.8em] hover:bg-rose-500/10 transition-all"
        >
          <LogOut className="w-4 h-4" /> DESCONECTAR
        </button>
      </div>
    </aside>
  );
};

const SidebarItem = ({ item, active, onClick, variant, locked }: any) => (
  <button
    onClick={onClick}
    disabled={locked}
    className={`w-full group flex items-center justify-between gap-4 px-6 py-3 rounded-xl transition-all border-2 ${
      active 
      ? 'bg-[#22c55e]/10 border-[#22c55e] text-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.1)]' 
      : locked
        ? 'border-transparent text-slate-600 cursor-not-allowed opacity-40 grayscale'
        : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
    }`}
  >
    <div className="flex items-center gap-4">
      <div className={`transition-colors flex items-center justify-center w-5 h-5 ${active ? 'text-[#22c55e]' : ''}`} style={(!locked && variant === 'master') ? { color: item.color } : {}}>
        {React.cloneElement(item.icon as any, { size: 16 })}
      </div>
      <span className="font-black text-[9px] uppercase tracking-[0.4em] whitespace-nowrap">{item.name}</span>
    </div>
    {variant === 'master' && (
      locked ? <Lock className="w-3 h-3 text-slate-700" /> : <ChevronRight className="w-3 h-3 opacity-20 group-hover:opacity-100 transition-all" />
    )}
  </button>
);
