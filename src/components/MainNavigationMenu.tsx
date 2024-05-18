
import type { ItemListElement } from "@galactiks/contentlayer";
import type React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type MainNavigationMenuProps = {
  items: ItemListElement[];
};

export function MainNavigationMenu({ items }: MainNavigationMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => Array.isArray(item.itemListElement)
          ? (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {item.itemListElement.map((_item) => (
                    <ListItem key={_item._id} {..._item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
          : (
            <NavigationMenuItem>
              <a href={item.path || item.url} className={navigationMenuTriggerStyle()}>
                {item.name}
              </a>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu >
  );
}

type ListItemProps = ItemListElement;

const ListItem: React.FC<ListItemProps> = ({
  name,
  path,
  url,
}) => {
  return (
    <li>
      <a
        href={path || url}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="flex items-center text-sm font-medium leading-none">
          <span className="mr-2">{name}</span>
        </div>
      </a>
    </li>
  );
};

ListItem.displayName = "ListItem";
