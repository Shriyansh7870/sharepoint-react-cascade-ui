
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";
import { sharepointConfig, initializeSharePointContext } from './sharepointConfig';

// Define types for our SharePoint context
type Permission = 'view' | 'edit' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  permissions: Permission[];
}

interface SharePointContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  hasPermission: (permission: Permission) => boolean;
  login: () => Promise<void>;
  logout: () => void;
  isSharePointInitialized: boolean;
  sharepointSiteUrl: string;
}

// Mock SharePoint users for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@company.com',
    permissions: ['view', 'edit', 'admin']
  },
  {
    id: '2',
    name: 'Editor User',
    email: 'editor@company.com',
    permissions: ['view', 'edit']
  },
  {
    id: '3',
    name: 'Viewer User',
    email: 'viewer@company.com',
    permissions: ['view']
  }
];

// Create context with default values
const SharePointContext = createContext<SharePointContextType>({
  isAuthenticated: false,
  currentUser: null,
  hasPermission: () => false,
  login: async () => {},
  logout: () => {},
  isSharePointInitialized: false,
  sharepointSiteUrl: ""
});

export const useSharePoint = () => useContext(SharePointContext);

interface SharePointProviderProps {
  children: ReactNode;
}

export const SharePointProvider: React.FC<SharePointProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isSharePointInitialized, setIsSharePointInitialized] = useState<boolean>(false);

  // Simulate checking for an existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('sharepointUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setCurrentUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem('sharepointUser');
      }
    }
    
    // Initialize the SharePoint context
    initializeSharePointContext()
      .then(success => {
        setIsSharePointInitialized(success);
        if (success) {
          toast.success("SharePoint context initialized successfully");
        } else {
          toast.error("Failed to initialize SharePoint context");
        }
      });
  }, []);

  // Function to check if user has a specific permission
  const hasPermission = (permission: Permission): boolean => {
    if (!currentUser) return false;
    return currentUser.permissions.includes(permission);
  };

  // Simulated login function
  const login = async (): Promise<void> => {
    try {
      // In a real app, this would call SharePoint API
      // For demo, we'll just use the first mock user
      const user = mockUsers[0];
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('sharepointUser', JSON.stringify(user));
      toast.success(`Welcome, ${user.name}`);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Authentication failed. Please try again.");
    }
  };

  // Logout function
  const logout = (): void => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('sharepointUser');
    toast.info("You have been logged out.");
  };

  return (
    <SharePointContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        hasPermission,
        login,
        logout,
        isSharePointInitialized,
        sharepointSiteUrl: sharepointConfig.siteUrl
      }}
    >
      {children}
    </SharePointContext.Provider>
  );
};
