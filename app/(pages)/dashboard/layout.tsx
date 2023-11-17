import Sidebar from "@/components/molecules/sidebar";

export default function DashboardLayout({ children }:any) {
  return (
    <div className="flex flex-row relative w-[100%] h-screen lg:overflow-y-hidden p-8">
      <div className="flex w-[100%] bg-primary rounded-[30px]">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="w-[100%]"> 
            {children}
        </div>
      </div>
    </div>
  );
}

