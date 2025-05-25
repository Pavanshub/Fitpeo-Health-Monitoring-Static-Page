import { X as CloseIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/navLinks';
import { Button } from '@/components/ui/button';

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Dynamically get icon from Lucide based on string name
  const getIcon = (iconName: string): LucideIcons.LucideIcon => {
    return (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    ];
  };

  return (
    <aside className={cn(
      "fixed md:relative w-full md:w-[200px] bg-white border-r h-screen flex flex-col py-6 transition-transform duration-300 z-50",
      !isOpen && "transform -translate-x-full md:translate-x-0"
    )}>
      <div className="px-6 mb-8 flex justify-between items-center">
        <h1 className="text-xl font-semibold cursor-pointer">
          <span className="text-cyan-500">Health</span>Care.
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative transition-colors duration-300"
          onClick={onClose}
        >
          <CloseIcon className="h-6 w-6 absolute hover:text-accent-foreground" />
        </Button>
      </div>

      <div className="flex flex-col flex-1">
        <div className="mb-6">
          <h2 className="text-xs uppercase text-muted-foreground font-medium tracking-wider px-6 mb-3">
            General
          </h2>
          <nav className="space-y-1">
            {navLinks
              .filter(link => link.category === 'general')
              .map(link => {
                const Icon = getIcon(link.icon);
                const isActive = link.id === 'dashboard';
                
                return (
                  <a
                    key={link.id}
                    href="#"
                    className={cn(
                      "flex items-center gap-3 px-6 py-2 text-sm font-medium transition-all duration-300",
                      isActive 
                        ? "text-primary bg-primary/5 border-r-2 border-primary" 
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {link.title}
                  </a>
                );
              })}
          </nav>
        </div>
        
        <div>
          <h2 className="text-xs uppercase text-muted-foreground font-medium tracking-wider px-6 mb-3">
            Tools
          </h2>
          <nav className="space-y-1">
            {navLinks
              .filter(link => link.category === 'tools')
              .map(link => {
                const Icon = getIcon(link.icon);
                
                return (
                  <a
                    key={link.id}
                    href="#"
                    className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                    {link.title}
                  </a>
                );
              })}
          </nav>
        </div>
      </div>
    </aside>
  );
}