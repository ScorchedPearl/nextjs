'use client'
import { Home, Inbox, Search, Settings,LayoutDashboard } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { ModeToggle } from "./modetoggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logout } from "../../lib/action";
import { useState,useEffect} from "react";
export function AppSidebar(props:any) {
  const [username, setUsername] = useState(null);
  let linkAccount=`/post/profile/${props.user?props.user.id:""}`
    const items=[
        {
          title: "Home",
          link: "/post",
          url: "#",
          icon: Home,
        },
        {
          title: "CreatePost",
          link: "/post/createpost",
          url: "#",
          icon: Inbox,
        },
        {
          title: "SearchPost",
          link: "/post/searchpost",
          url: "#",
          icon: Search,
        },
        {
          title: "DashBoard",
          link: `/post/dashboard/${props.user?props.user.username:""}`,
          url: "#",
          icon: LayoutDashboard,
        },
        {
          title: "Settings",
          link: "/post",
          url: "#",
          icon: Settings,
        },
      ];
     function handlesignout(){
      localStorage.removeItem("__PostPearl_Token");
      logout();
      }
  useEffect(() => {
    async function fetchUsername() {
        const response = await fetch("/api/getUsername");

        if (!response.ok) {
          const { error } = await response.json();
          throw new Error(error || "Failed to fetch username");
        }

        const data = await response.json();
        setUsername(data.username);
    }
    fetchUsername();
  }, []);
  return (
    <div>
    <Sidebar>
      <SidebarContent>
      <SidebarHeader>
      <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <div className="flex pt-2 pb-2">
                      <Avatar>
                        <AvatarImage src={props.user && props.user.profileImageURL? props.user.profileImageURL:"https://avatars.githubusercontent.com/u/184803610?s=96&v=4"}/>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="text-xl ml-4 mt-1 text-gray-400">{props.user&&props.user.username?props.user.username:username}</div>
                    </div>
                    {/* <ChevronUp className="ml-auto" /> */}
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <Link href={linkAccount}><span>Account</span></Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span onClick={handlesignout}>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="mr-32">Application </span>
            <ModeToggle></ModeToggle>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href="">
                      <item.icon />
                      <Link href={item.link}>
                        <span>{item.title}</span>
                      </Link>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </div>
  );
}
