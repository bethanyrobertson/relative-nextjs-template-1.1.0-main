import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Receipt,
  MessagesSquare,
  Map,
  Bell,
  Smartphone,
  ArrowRightLeft,
  LayoutList,
  Blocks,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import SectionHeader from "../section-header";

const FlowsDesignSystem = () => {
  return (
    <section id="flows" className="relative py-32">
      <div className="absolute inset-0 bg-[#efebe9] w-screen left-1/2 -translate-x-1/2 -z-10"></div>
        <SectionHeader
            category="INFORMATION ARCHITECTURE"
            title="Mapping the Digital Journey: How Users Navigate Through Direct Express's Mobile Financial Ecosystem"
            icon={Blocks}
            description="Entry → Home Dashboard → MVP Features"
            className="border-none"
        />
        <div className="mx-auto mt-14 max-w-7xl">
          <Tabs defaultValue="tab-1">
            <div className="max-w-[100vw-4rem] overflow-x-auto">
              <TabsList className="mx-auto flex w-fit justify-center gap-5 border-b">
                <TabsTrigger
                  value="tab-1"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md  bg-[#D4E1DF] dark:bg-[#002226] transition-colors duration-300 group-data-[state=active]:bg-primary  dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <Smartphone className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">Full App</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-2"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md bg-[#D4E1DF] dark:bg-[#002226] transition-colors duration-300 group-data-[state=active]:bg-primary dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <Receipt className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">Bill Pay</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-3"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md  bg-[#D4E1DF] dark:bg-[#002226] transition-colors duration-300 group-data-[state=active]:bg-primary  dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <Map className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">ATM Locator</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-4"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md  bg-[#D4E1DF] dark:bg-[#002226]  transition-colors duration-300 group-data-[state=active]:bg-primary  dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <ArrowRightLeft className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">ACH Transfer</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-5"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md  bg-[#D4E1DF] dark:bg-[#002226]  transition-colors duration-300 group-data-[state=active]:bg-primary  dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <Bell className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">Notifications</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-6"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md  bg-[#D4E1DF] dark:bg-[#002226]  transition-colors duration-300 group-data-[state=active]:bg-primary  dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <MessagesSquare className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">Chatbot</p>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-7"
                  className="group -mb-px flex flex-col items-center gap-1.5 px-1 pb-3.5 data-[state=active]:border-b data-[state=active]:border-primary"
                >
                  <span className="flex size-12 items-center justify-center rounded-md  bg-[#D4E1DF] dark:bg-[#002226]  transition-colors duration-300 group-data-[state=active]:bg-primary  dark:group-data-[state=active]:bg-white group-data-[state=active]:text-background">
                    <LayoutList className="w-7" />
                  </span>
                  <p className="text-sm font-mono text-muted-foreground group-data-[state=active]:text-foreground group-data-[state=active]:font-bold">Transactions</p>
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="mt-5">
              <TabsContent value="tab-1" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/njrf3z2dn0atarasuiy9j/SiteMap-SVG.png?rlkey=avlkx51hjj3wk7pp0fz3rbei1&st=ilyux9mf&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-2" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/eh4jk62hbkmxyt8h403kr/BillPay-SVG.png?rlkey=3c6umfdr72yfr48g6hys9u1gx&st=mwfd3aq6&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-3" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/qk503gtnd3pmj66xut5ku/ATM-SVG.png?rlkey=euldutnn4bnt1auv1amne9f7w&st=e25m7l57&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-4" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/s1jvrzdje2iwdyduni47k/ACHTransfer-SVG.png?rlkey=yh4uzihvokr0zk5ntcxm7ckcs&st=vkbpsjs2&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-5" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/qp4ifdgy8c7awu0tnkujo/Notifications.png?rlkey=6hfrnzjxpbooys0rk7qxgzqhm&st=be8157wg&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-6" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/q7ukqrfwm3xo0qtydm68j/Chatbot-Lofi.png?rlkey=69odypuoy24jnymu7d7ipmtxe&st=8kqim7wy&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
              <TabsContent value="tab-7" className="aspect-video">
                <img
                  src="https://www.dropbox.com/scl/fi/6ej63u6cj8jl8ft6roku4/Transactions-SVG.png?rlkey=nugsu6dcqirs2u6kyz0gc9m3s&st=enxxhs09&raw=1"
                  alt="placeholder"
                  className="h-full w-full rounded-xl border object-cover"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
    </section>
  );
};

export { FlowsDesignSystem };

