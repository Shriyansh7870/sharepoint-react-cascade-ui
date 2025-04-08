
import React from "react";
import { SharePointProvider } from "@/utils/sharepointContext";
import SharePointHeader from "@/components/SharePointHeader";
import MainBox from "@/components/MainBox";

const boxData = [
  {
    id: 'box1',
    title: 'Document Management',
    description: 'Access and manage all your SharePoint documents',
    requiredPermission: 'view' as const,
    color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-sharepoint-primary'
  },
  {
    id: 'box2',
    title: 'Sites & Workspaces',
    description: 'Explore your SharePoint sites and workspaces',
    requiredPermission: 'view' as const,
    color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-400'
  },
  {
    id: 'box3',
    title: 'Lists & Libraries',
    description: 'Manage SharePoint lists and document libraries',
    requiredPermission: 'edit' as const,
    color: 'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-400'
  },
  {
    id: 'box4',
    title: 'Security Management',
    description: 'Configure permissions and access controls',
    requiredPermission: 'admin' as const,
    color: 'bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-400'
  },
  {
    id: 'box5',
    title: 'Analytics & Reporting',
    description: 'View usage statistics and reports',
    requiredPermission: 'edit' as const,
    color: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-l-4 border-cyan-400'
  },
  {
    id: 'box6',
    title: 'Settings & Configuration',
    description: 'Manage site settings and configuration',
    requiredPermission: 'admin' as const,
    color: 'bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-400'
  }
];

const Index = () => {
  return (
    <SharePointProvider>
      <div className="min-h-screen bg-gray-50">
        <SharePointHeader />
        <main className="sharepoint-container py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-sharepoint-text">SharePoint Dashboard</h1>
            <p className="text-gray-500">Access and manage your SharePoint content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {boxData.map((box) => (
              <MainBox
                key={box.id}
                id={box.id}
                title={box.title}
                description={box.description}
                requiredPermission={box.requiredPermission}
                color={box.color}
              />
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="text-sm font-medium text-blue-800 mb-1">SharePoint Integration Notes</h3>
            <p className="text-xs text-blue-600">
              This React application demonstrates SharePoint UI integration. In a production environment, 
              it would connect to the SharePoint REST API for document management and site operations.
            </p>
          </div>
        </main>
        
        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="sharepoint-container">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} SharePoint React Integration | Built with React, Tailwind CSS and shadcn/ui
            </p>
          </div>
        </footer>
      </div>
    </SharePointProvider>
  );
};

export default Index;
