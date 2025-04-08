
import React from 'react';
import SubBox from '@/components/SubBox';

// Types for sub-box data
interface SubBoxData {
  id: string;
  title: string;
  content: string;
  icon: string;
}

// Mock data for sub-boxes based on parent box
const mockSubBoxes: Record<string, SubBoxData[]> = {
  'box1': [
    { id: 'sub1-1', title: 'Documents', content: 'Access all your SharePoint documents', icon: 'file' },
    { id: 'sub1-2', title: 'Recent', content: 'Recently accessed files', icon: 'clock' },
    { id: 'sub1-3', title: 'Shared', content: 'Files shared with you', icon: 'share' },
    { id: 'sub1-4', title: 'Recycle Bin', content: 'Recover deleted documents', icon: 'trash' },
    { id: 'sub1-5', title: 'Analytics', content: 'Document usage statistics', icon: 'bar-chart' }
  ],
  'box2': [
    { id: 'sub2-1', title: 'Team Sites', content: 'Access all team sites', icon: 'users' },
    { id: 'sub2-2', title: 'Project Sites', content: 'All project related sites', icon: 'briefcase' },
    { id: 'sub2-3', title: 'Communication Sites', content: 'Company announcements', icon: 'message-square' },
    { id: 'sub2-4', title: 'External Sites', content: 'Partner portals', icon: 'external-link' },
    { id: 'sub2-5', title: 'New Site', content: 'Create a new site', icon: 'plus-circle' }
  ],
  'box3': [
    { id: 'sub3-1', title: 'Task Lists', content: 'Manage your tasks', icon: 'check-square' },
    { id: 'sub3-2', title: 'Calendar', content: 'Team calendar view', icon: 'calendar' },
    { id: 'sub3-3', title: 'Issues', content: 'Track issues and risks', icon: 'alert-triangle' },
    { id: 'sub3-4', title: 'Surveys', content: 'Create and view surveys', icon: 'bar-chart-2' },
    { id: 'sub3-5', title: 'Workflows', content: 'Automated processes', icon: 'git-branch' }
  ],
  'box4': [
    { id: 'sub4-1', title: 'User Permissions', content: 'Manage user access', icon: 'shield' },
    { id: 'sub4-2', title: 'Groups', content: 'Security groups', icon: 'users' },
    { id: 'sub4-3', title: 'Access Requests', content: 'Pending approvals', icon: 'user-check' },
    { id: 'sub4-4', title: 'Sharing Settings', content: 'Configure sharing options', icon: 'share-2' },
    { id: 'sub4-5', title: 'Permission Levels', content: 'Define permission levels', icon: 'layers' }
  ],
  'box5': [
    { id: 'sub5-1', title: 'Reports', content: 'Usage reports', icon: 'bar-chart' },
    { id: 'sub5-2', title: 'Audit Logs', content: 'User activity logs', icon: 'list' },
    { id: 'sub5-3', title: 'Storage', content: 'Storage usage metrics', icon: 'hard-drive' },
    { id: 'sub5-4', title: 'Performance', content: 'Site performance metrics', icon: 'activity' },
    { id: 'sub5-5', title: 'Export Data', content: 'Download analytics data', icon: 'download' }
  ],
  'box6': [
    { id: 'sub6-1', title: 'Site Settings', content: 'Configure site settings', icon: 'settings' },
    { id: 'sub6-2', title: 'Appearance', content: 'Customize look and feel', icon: 'layout' },
    { id: 'sub6-3', title: 'Features', content: 'Enable/disable features', icon: 'toggle-right' },
    { id: 'sub6-4', title: 'Regional Settings', content: 'Language and locale', icon: 'globe' },
    { id: 'sub6-5', title: 'Advanced', content: 'Advanced configuration', icon: 'sliders' }
  ]
};

interface SubBoxContainerProps {
  parentBoxId: string;
}

const SubBoxContainer: React.FC<SubBoxContainerProps> = ({ parentBoxId }) => {
  const subBoxes = mockSubBoxes[parentBoxId] || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-2">
      {subBoxes.map((subBox) => (
        <SubBox 
          key={subBox.id} 
          id={subBox.id}
          title={subBox.title} 
          content={subBox.content}
          icon={subBox.icon}
        />
      ))}
    </div>
  );
};

export default SubBoxContainer;
