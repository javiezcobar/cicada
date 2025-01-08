import { SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import '@/app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <html>
    <head>
      <title>Cicada</title>
    </head>
    <body>
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger />
          {children}
        </main>
      </div>
    </SidebarProvider>
    </body>
  </html>
  );
}