import { Rotate3DIcon, ZoomInIcon } from 'lucide-react';
import { healthStatuses } from '@/data/healthData';


export function AnatomySection() {

  

  return (
    <div className="relative h-[400px] bg-white border rounded-2xl p-2 overflow-hidden">
      <div className="absolute top-3 cursor-pointer right-4 bg-white rounded-full p-2 shadow-sm">
        <ZoomInIcon className="h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="flex justify-center items-center h-full">
        <div className="relative">
          <img 
            src="./../../../public/images/human-body.jpg" 
            alt="Human anatomy" 
            className="h-[300px] object-cover"
          />
          
          {/* Health indicators */}
          {healthStatuses.map((item) => (
            <div 
              key={item.id}
              className="absolute transform -translate-x-1/2"
              style={{ 
                top: item.position.top, 
                left: item.position.left
              }}
            >
              
              {item.id === 'heart' && (
                <div className="relative">
                  <div className="absolute top-10 -left-16 bg-green-700 text-white text-xs px-1 py-1 rounded-md">
                    <span className="absolute inset-0 rounded-md opacity-75"></span>
                    {item.name}
                  </div>
                  <div className="h-6 w-6 bg-blue-700/25 rounded-sm">
                    <span className="absolute inset-0 animate-ping bg-green-700/25 rounded-full opacity-75"></span>
                  </div>
                </div>
              )}
              {item.id === 'leg' && (
                <div className="relative">
                  <div className="absolute top-10 -left-16 bg-green-700 text-white text-xs px-1 py-1 rounded-md">
                    <span className="absolute inset-0 rounded-md opacity-75"></span>
                    {item.name}
                  </div>
                  <div className="h-6 w-6 bg-blue-700/25 rounded-sm">
                    <span className="absolute inset-0 animate-ping bg-green-700/25 rounded-full opacity-75"></span>
                  </div>
                </div>
              )}
              
            
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        
        <Rotate3DIcon className="h-4 w-4 text-gray-800" />
        
      </div>
    </div>
  );
}