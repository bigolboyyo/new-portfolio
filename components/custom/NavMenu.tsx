import { projects } from "@/app/library/projects";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MdOutlineSettings } from "react-icons/md";
import RotatingIcon from "./RotatingIcon";
import { DrawerDialogDemo } from "./DrawerDialog";

function NavMenu() {
  return (
    <div className="w-full flex justify-between items-center px-4 pt-4 font-mono mb-16 ">
      <NavigationMenu
        viewport={true}
        className="
    border-2 border-pink-300
    bg-zinc-900 text-pink-400
    font-mono
    shadow-[0_0_4px_#d16ba5,2px_2px_0_0_#8e7cc3]
    outline-cyan-300 outline-2 outline-offset-[-4px] rounded-2xl pl-2
  "
      >
        <NavigationMenuList className="flex space-x-4 ">
          {/* Home Nav */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent hover:bg-transparent focus:bg-transparent"
            >
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Gallery Nav */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent hover:bg-transparent focus:bg-transparent"
            >
              <Link href="/gallery">Gallery</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Projects Nav */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-trigger-transparent">
              Projects
            </NavigationMenuTrigger>

            <NavigationMenuContent className="font-bold bg-zinc-900 text-pink-400 shadow-[0_0_6px_#d16ba5,4px_4px_0_0_#8e7cc3] outline-cyan-300 outline-2 outline-offset-[-6px]">
              <div className="grid gap-3 p-4 w-60">
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects"
                    className="block px-2 py-1 rounded hover:bg-gray-700 uppercase text-xs tracking-widest border-b border-gray-700 mb-2"
                  >
                    All Projects
                  </Link>
                </NavigationMenuLink>
                {projects.map(({ title, slug }) => (
                  <NavigationMenuLink key={slug} asChild>
                    <Link
                      href={`/projects/${slug}`}
                      className="block px-2 py-1 rounded hover:bg-gray-700 "
                    >
                      {title}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* <RotatingIcon /> */}
      <DrawerDialogDemo />
    </div>
  );
}

export default NavMenu;
