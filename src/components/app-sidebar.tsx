import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from '@/components/ui/sidebar';
import { Receipt, NotebookPen, AlarmClockPlus, ContactRound } from "lucide-react";
import { Combobox } from './combobox';
import Link from 'next/link';

const items = [
    { title: 'Facturas',
        url: '/facturas',
        icon: Receipt,
    },
    { title: 'Reportes',
        url: '#',
        icon: NotebookPen,
    },
    { title: 'Clientes',
        url: '#',
        icon : ContactRound,
    },
    { title: 'Recordatorios',
        url: '#',
        icon : AlarmClockPlus,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="text-2xl font-semibold">Cicada</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <Combobox />
                </SidebarGroup>
                <SidebarGroup title="Menu">
                    {items.map((item, index) => (
                        <Link key={index} href={item.url} className="block p-2 flex items-center hover:bg-gray-100 rounded">
                            <item.icon className="w-4 h-4 mr-2" />
                            {item.title}
                        </Link>
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <a href="#" className="block p-2">Profile</a>
                <a href="#" className="block p-2">Logout</a>
            </SidebarFooter>
        </Sidebar>
    );
}