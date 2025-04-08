
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { toast } from "sonner";

interface SubBoxProps {
  id: string;
  title: string;
  content: string;
  icon: string;
}

// Helper function to get icon component from string name
const getIconByName = (name: string) => {
  const IconComponent = (LucideIcons as Record<string, React.FC<any>>)[
    name.charAt(0).toUpperCase() + name.slice(1)
  ] || LucideIcons.FileText;
  
  return <IconComponent size={18} />;
};

const SubBox: React.FC<SubBoxProps> = ({ id, title, content, icon }) => {
  const handleClick = () => {
    // In a real app, this would trigger a navigation or action
    toast.info(`Opening ${title}...`);
  };

  return (
    <Card className="p-3 animate-zoom-in cursor-pointer hover:bg-sharepoint-secondary/5 transition-colors duration-200 flex flex-col h-full" onClick={handleClick}>
      <div className="flex items-center gap-2 mb-1">
        <div className="text-sharepoint-primary">
          {getIconByName(icon)}
        </div>
        <h4 className="font-medium text-sm">{title}</h4>
      </div>
      <p className="text-xs text-gray-500 mb-2">{content}</p>
      <div className="mt-auto">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs w-full text-sharepoint-primary hover:text-sharepoint-primary/80 hover:bg-sharepoint-primary/10"
        >
          Open
        </Button>
      </div>
    </Card>
  );
};

export default SubBox;
