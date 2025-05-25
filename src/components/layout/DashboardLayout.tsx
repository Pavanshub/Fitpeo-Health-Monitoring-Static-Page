import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-muted/30">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <div className="md:hidden flex justify-between items-center p-4 bg-white border-b">
          <h1 className="text-xl font-semibold cursor-pointer">
          <span className="text-cyan-500">Health</span>Care.
        </h1>
          <Button
            variant="ghost"
            size="icon"
            className="relative transition-colors duration-300"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6 absolute hover:text-accent-foreground" />
          </Button>
        </div>
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-muted/10">
          {children}
        </main>
      </div>
    </div>
  );
}