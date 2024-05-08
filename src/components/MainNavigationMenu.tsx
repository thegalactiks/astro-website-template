
import type { ItemListElement } from "@galactiks/contentlayer";
import type React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type MainNavigationMenuProps = {
  items: ItemListElement[];
};

export function MainNavigationMenu({ items }: MainNavigationMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {items.map((item) => (
            <a
              key={item.path}
              href={item.path || item.url}
              className={navigationMenuTriggerStyle()}
            >
              {item.name}
            </a>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
