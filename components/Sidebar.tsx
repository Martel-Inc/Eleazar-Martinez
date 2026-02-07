
import React from 'react';
import { CORE_MENU, MASTER_MODULES, SUPER_ADMIN_MENU } from '../constants';
import { UserRole, AppContextType, Company } from '../types';
import { LogOut, ChevronRight } from 'lucide-react';

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
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.8em] mb-8 px-8">SISTEMA NÚCLEO</p>
        {menu.map(item => (
          <SidebarItem 
            key={item.id} 
            item={item} 
            active={activeTab === item.id} 
            onClick={() => setActiveTab(item.id)} 
          />
        ))}

        {company.modules.length > 0 && userRole === UserRole.ADMIN && (
          <div className="mt-16 space-y-4">
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.8em] mb-8 px-8">MÓDULOS MASTER</p>
            {MASTER_MODULES.filter(m => company.modules.includes(m.id)).map(mod => (
              <SidebarItem 
                key={mod.id} 
                item={mod} 
                active={false} 
                onClick={() => onSelectMaster(mod.id)} 
                variant="master"
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-72 bg-[#000000] border-r-2 border-[#22c55e]/20 h-screen flex flex-col sticky top-0 z-50">
      <div className="p-12 flex flex-col items-center justify-center">
        <MaiaTextLogo className="text-3xl" />
      </div>

      <nav className="flex-1 px-8 overflow-y-auto pb-16 space-y-3 scrollbar-hide">
        {renderMenuContent()}
      </nav>

      <div className="p-10 bg-black border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <button 
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-4 py-4 text-rose-500 bg-rose-500/5 border-2 border-rose-500/20 rounded-[2rem] text-[9px] font-black uppercase tracking-[0.8em] hover:bg-rose-500/10 transition-all shadow-[0_0_10px_rgba(244,63,94,0.1)] hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]"
        >
          <LogOut className="w-4 h-4" /> DESCONECTAR
        </button>
      </div>
    </aside>
  );
};

const SidebarItem = ({ item, active, onClick, variant }: any) => (
  <button
    onClick={onClick}
    className={`w-full group flex items-center justify-between gap-6 px-8 py-4 rounded-[2rem] transition-all border-2 ${
      active 
      ? 'bg-[#22c55e]/10 border-[#22c55e] text-[#22c55e] shadow-[0_0_40px_rgba(34,197,94,0.2)]' 
      : 'border-transparent text-slate-500 hover:text-white hover:bg-white/5'
    }`}
  >
    <div className="flex items-center gap-6">
      <div className={`transition-colors ${active ? 'text-[#22c55e]' : 'group-hover:text-[#22c55e]'}`}>
        {React.cloneElement(item.icon as any, { size: 16 })}
      </div>
      <span className="font-black text-[9px] uppercase tracking-[0.6em]">{item.name}</span>
    </div>
    {variant === 'master' && <ChevronRight className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-all" />}
  </button>
);
