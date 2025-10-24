import { SidebarItemI } from '@/types/home.types';
import { LayoutDashboard, Settings, Home, InfoIcon, Blinds, Inbox, BriefcaseBusiness } from 'lucide-react';

export const SidebarItems: SidebarItemI[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    path: '/',
    type: 'single',
  },
  {
    id: 'aboutMe',
    label: 'About Me',
    icon: InfoIcon,
    path: '/about-me',
    type: 'single',
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: BriefcaseBusiness,
    path: '/projects',
    type: 'single',
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: Blinds,
    path: '/blog',
    type: 'single',
  },
  {
    id: 'create-resume',
    label: 'Create Resume',
    icon: Inbox,
    path: '/create-resume',
    type: 'single',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard/overview',
    type: 'single',
  },
  //   {
  //     id: 'students',
  //     label: 'Students',
  //     icon: UsersRound,
  //     type: 'expandable',
  //     children: [
  //       {
  //         id: 'add-student',
  //         label: 'Add New',
  //         icon: Users,
  //         path: '/dashboard/students/add-new',
  //       },
  //       {
  //         id: 'manage-students',
  //         label: 'Manage',
  //         icon: Wrench,
  //         path: '/dashboard/students/manage',
  //       },
  //       {
  //         id: 'enrollment',
  //         label: 'Enrollment',
  //         icon: BookOpen,
  //         path: '/dashboard/students/enrollment',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'qualifications',
  //     label: 'Qualifications',
  //     icon: GraduationCap,
  //     type: 'expandable',
  //     children: [
  //       {
  //         id: 'add-qualification',
  //         label: 'Add New',
  //         icon: Plus,
  //         path: '/dashboard/qualifications/add-new',
  //       },
  //       {
  //         id: 'manage-qualifications',
  //         label: 'Manage',
  //         icon: Wrench,
  //         path: '/dashboard/qualifications/manage',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'classes',
  //     label: 'Classes',
  //     icon: BookOpen,
  //     type: 'expandable',
  //     children: [
  //       {
  //         id: 'add-class',
  //         label: 'Add New',
  //         icon: Plus,
  //         path: '/dashboard/classes/add-new',
  //       },
  //       {
  //         id: 'manage-classes',
  //         label: 'Manage',
  //         icon: Wrench,
  //         path: '/dashboard/classes/manage',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'certificates',
  //     label: 'Certificates',
  //     icon: Award,
  //     type: 'expandable',
  //     children: [
  //       // {
  //       //   id: 'add-certificate',
  //       //   label: 'Add New',
  //       //   icon: Plus,
  //       //   path: '/dashboard/certificates/add-new',
  //       // },
  //       {
  //         id: 'manage-certificates',
  //         label: 'Manage',
  //         icon: Wrench,
  //         path: '/dashboard/certificates/manage',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'reports',
  //     label: 'Reports',
  //     icon: FileChartColumnIncreasing,
  //     type: 'expandable',
  //     children: [
  //       // {
  //       //   id: 'add-report',
  //       //   label: 'Add New',
  //       //   icon: Plus,
  //       //   path: '/dashboard/reports/add-new',
  //       // },
  //       {
  //         id: 'manage-reports',
  //         label: 'Manage',
  //         icon: Wrench,
  //         path: '/dashboard/reports/manage',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'trainers',
  //     label: 'Trainers',
  //     icon: Users,
  //     type: 'expandable',
  //     children: [
  //       {
  //         id: 'add-trainer',
  //         label: 'Add New',
  //         icon: Plus,
  //         path: '/dashboard/trainers/add-new',
  //       },
  //       {
  //         id: 'manage-trainers',
  //         label: 'Manage',
  //         icon: Users,
  //         path: '/dashboard/trainers/manage',
  //       },
  //     ],
  //   },
  //   {
  //     id: 'settings',
  //     label: 'Settings',
  //     icon: Settings,
  //     path: '/dashboard/settings',
  //     type: 'single',
  //   },
];

export const SuperAdminSidebarItems: SidebarItemI[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/super-admin/dashboard/overview',
    type: 'single',
  },
  {
    id: 'organizations',
    label: 'Organizations',
    icon: LayoutDashboard,
    path: '/super-admin/dashboard/organizations',
    type: 'single',
  },
  // {
  //   id: 'students',
  //   label: 'Students',
  //   icon: UsersRound,
  //   type: 'expandable',
  //   children: [
  //     {
  //       id: 'manage-students',
  //       label: 'Manage',
  //       icon: Wrench,
  //       path: '/dashboard/students/manage',
  //     },
  //   ],
  // },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    path: '/super-admin/dashboard/settings',
    type: 'single',
  },
];
