'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExamplesPage() {

  return (
    <div className="container mt-5">
      <Tabs defaultValue="React" className="flex w-full">
        <TabsList className="flex-col mt-2 mr-5 h-24">
          <TabsTrigger value="React">React</TabsTrigger>
          <TabsTrigger value="Vue3">Vue3</TabsTrigger>
          <TabsTrigger value="Vue2">Vue2</TabsTrigger>
        </TabsList>
        <TabsContent value="React" className="w-full">
          <iframe src="https://stackblitz.com/edit/vitejs-vite-ewd62r?embed=1&file=src%2FApp.tsx&hideExplorer=1&hideNavigation=1&theme=dark&terminalHeight=30"
            className="w-full h-screen border-none rounded overflow-hidden"
            title="twist-icons-react"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </TabsContent>
        <TabsContent value="Vue3" className="w-full">
          <iframe src="https://stackblitz.com/edit/vitejs-vite-zdrkec?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&theme=dark&terminalHeight=30"
            className="w-full h-screen border-none rounded overflow-hidden"
            title="twist-icons-vue3"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </TabsContent>
        <TabsContent value="Vue2" className="w-full">
          <iframe src="https://stackblitz.com/edit/vite-vue2-wjkj4-rkkun1?embed=1&file=src%2FApp.vue&hideExplorer=1&hideNavigation=1&theme=dark&terminalHeight=30"
            className="w-full h-screen border-none rounded overflow-hidden"
            title="twist-icons-vue2"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </TabsContent>
      </Tabs>
    </div>
  )
}