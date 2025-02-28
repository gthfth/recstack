"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function Sidebar({ className, items, ...props }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen flex-col border-r bg-background">
      <ScrollArea className="flex-1">
        <div className={cn("flex flex-col gap-2 p-4", className)} {...props}>
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}

export function MobileSidebar({ items }: { items: SidebarProps["items"] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <Sidebar items={items} className="border-r-0" />
      </SheetContent>
    </Sheet>
  )
}

