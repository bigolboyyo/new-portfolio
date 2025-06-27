import { projects } from "@/app/const/projects";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavMenu() {
  return (
    <div className="w-full flex justify-between items-center px-4 pt-4">
      <NavigationMenu viewport={true}>
        <NavigationMenuList className="flex space-x-4">
          {/* Home Nav */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Gallery Nav */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/gallery">Gallery</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Projects Nav */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="grid gap-3 p-4 w-60">
                {projects.map(({ title, slug }) => (
                  <NavigationMenuLink key={slug} asChild>
                    <Link
                      href={`/projects/${slug}`}
                      className="block px-2 py-1 rounded hover:bg-gray-700"
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

      <p className="text-sm whitespace-nowrap hidden sm:inline">Test</p>
    </div>
  );
}

export default NavMenu;
