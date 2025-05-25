import { BellIcon, PlusIcon, SearchIcon } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full bg-white px-4 sm:px-6 py-4 border-b">
      <div className="flex items-center gap-6 w-full max-w-2xl">
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            type="text" 
            placeholder="Search" 
            className="pl-10 bg-muted/30 border transition-all duration-300 focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative transition-colors duration-300"
        >
          <BellIcon className="h-6 w-6 absolute hover:text-accent-foreground" />
          <span className="absolute top-1 right-2 h-2 w-2 bg-blue-500 rounded-full ring-4 ring-blue-500/20 animate-pulse"></span>
        </Button>
        
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10 bg-white ring-2 ring-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-pointer">
          <div className=" object-fit">
            <img src="/images/Avatar.png" alt="Avatar Image" />
          </div>
        </Avatar>
        
        <Button 
          size="icon" 
          className="rounded-full bg-blue-700 hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
        >
          <PlusIcon className="absolute h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </header>
  );
}