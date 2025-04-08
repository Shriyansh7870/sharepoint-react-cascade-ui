
import React from 'react';
import { Button } from "@/components/ui/button";
import { useSharePoint } from "@/utils/sharepointContext";
import { LogOut, User } from "lucide-react";

const SharePointHeader: React.FC = () => {
  const { isAuthenticated, currentUser, logout, login } = useSharePoint();

  return (
    <header className="bg-sharepoint-primary text-white py-3 px-4 shadow-md">
      <div className="sharepoint-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="font-semibold text-lg">SharePoint Integration</div>
          <div className="text-xs bg-white/20 px-2 py-0.5 rounded">App</div>
        </div>

        <div>
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <div className="text-sm flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{currentUser?.name}</span>
                <span className="mx-2 text-white/50">|</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">
                  {currentUser?.permissions.includes('admin') ? 'Admin' : 
                   currentUser?.permissions.includes('edit') ? 'Editor' : 'Viewer'}
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={logout} 
                className="text-white hover:bg-white/20"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={login} 
              className="text-white border-white/50 hover:bg-white/20 hover:text-white"
            >
              <User className="h-4 w-4 mr-1" />
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default SharePointHeader;
