
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Lock } from "lucide-react";
import { useSharePoint } from "@/utils/sharepointContext";
import { Button } from "@/components/ui/button";
import SubBoxContainer from "@/components/SubBoxContainer";
import { toast } from "sonner";

interface MainBoxProps {
  id: string;
  title: string;
  description: string;
  requiredPermission: 'view' | 'edit' | 'admin';
  color: string;
}

const MainBox: React.FC<MainBoxProps> = ({
  id,
  title,
  description,
  requiredPermission,
  color,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { hasPermission, isAuthenticated, login } = useSharePoint();
  const hasAccess = hasPermission(requiredPermission);

  const toggleExpand = () => {
    if (!isAuthenticated) {
      toast.error("Please login to access this content");
      return;
    }
    
    if (!hasAccess) {
      toast.error(`You need ${requiredPermission} permission to access this content`);
      return;
    }
    
    setIsExpanded(prev => !prev);
  };

  return (
    <Card className={`box-shadow-sharepoint box-shadow-sharepoint-hover p-5 transition-all duration-200 ${color} h-full`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        
        {!isAuthenticated ? (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => login()}
            className="flex items-center gap-1"
          >
            <Lock className="h-4 w-4" />
            Login
          </Button>
        ) : !hasAccess ? (
          <div className="flex items-center text-gray-500">
            <Lock className="h-4 w-4 mr-1" />
            <span className="text-xs">Restricted</span>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleExpand}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>
      
      <p className="text-sm text-gray-500 mt-1 mb-2">{description}</p>
      
      {isExpanded && hasAccess && (
        <div className="mt-4 animate-fade-in">
          <SubBoxContainer parentBoxId={id} />
        </div>
      )}
    </Card>
  );
};

export default MainBox;
