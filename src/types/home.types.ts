import { LucideIcon } from "lucide-react";

export interface SidebarItemI {
    id: string;
    label: string;
    icon: LucideIcon;
    type?: 'single' | 'expandable';
    children?: SidebarItemI[];
    path?: string;
}