'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
// import {
//   Calendar,
//   ChevronDown,
//   ChevronUp,
//   Home,
//   Inbox,
//   Search,
//   Settings,
//   User2,
// } from 'lucide-react';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from './ui/dropdown-menu';
import Link from 'next/link';
// import LogoutButton from './common/LogoutButton';
import { useEffect, useState } from 'react';
import { SidebarItems } from './SidebarItems';
import { Collapsible, CollapsibleTrigger } from './ui/collapsible';
import SidebarProfileInfo from './common/SidebarProfileInfo';
import { ModeToggle } from './ThemeModeToggle';
import { usePathname } from 'next/navigation';

//  ${
//                             isGroupActive(item.id)
//                               ? 'text-white bg-primary'
//                               : 'text-primary hover:bg-muted hover:text-foreground'
//                           }







export function AppSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(state === 'expanded');

  // Update when sidebar state changes
  useEffect(() => {
    setIsExpanded(state === 'expanded');
  }, [state]);


  // Check if specific path is active
  const isPathActive = (itemPath: string) => {
    return pathname === itemPath || pathname.startsWith(itemPath + '/');
  };

  // Check if a group (expandable) section should be active
  // const isGroupActive = (groupId: string) => {
  //   return pathname.startsWith(`/dashboard/${groupId}`);
  // };


  return (
    <Sidebar
      collapsible="icon"
      className={`border-none shadow-none transition-all duration-300 bg-muted p-3  `}
    >
      <SidebarHeader className='bg-white p-3 rounded-t-md'>
        <div className="flex items-center justify-center font-semibold">
          <SidebarProfileInfo expanded={isExpanded} />
        </div>
      </SidebarHeader>

      <SidebarContent className='bg-white px-3'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarItems.map((item) => (
                <SidebarMenuItem key={item.id} className="my-1.5">
                  {/* SINGLE ITEMS */}
                  {item.type === 'single' ? (
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.path as string}
                        className={`flex items-center gap-2 py-2 rounded-md transition-colors font-semibold 
                          ${
                          isPathActive(item.path as string)
                            ? 'text-white bg-primary font-semibold'
                            : 'text-primary hover:bg-muted hover:text-foreground'
                        }
                        ${isExpanded ? 'px-3' : 'px-2 justify-center'}`}
                      >
                        <item.icon size={20} />
                        {isExpanded && <span>{item.label}</span>}
                      </Link>
                    </SidebarMenuButton>
                  ) : (
                    /* EXPANDABLE ITEMS */
                    <Collapsible
                      // defaultOpen={isGroupActive(item.id)}
                      className="group/collapsible"
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={`flex items-center rounded-md transition-colors font-semibold 
                           
                          ${isExpanded ? 'px-3' : 'px-2 justify-center'}`}
                        >
                          <item.icon size={20} />
                          {isExpanded && <span>{item.label}</span>}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      {/* {isExpanded && (
                        <CollapsibleContent>
                          <SidebarMenuSub className="border-none">
                            {item.children?.map((child) => (
                              <SidebarMenuSubItem key={child.id}>
                                <Link
                                  href={child.path as string}
                                  className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors ${
                                    isPathActive(child.path as string)
                                      ? 'text-white bg-primary font-semibold'
                                      : 'hover:bg-muted hover:text-foreground'
                                  }`}
                                >
                                  <span>{child.label}</span>
                                </Link>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )} */}
                    </Collapsible>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={`bg-white rounded-b-md ${isExpanded ? 'px-3' : 'px-2'}`}>
        {/* <LogoutButton isExpanded={isExpanded} /> */}
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
