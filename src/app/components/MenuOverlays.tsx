import NavLink from "./NavLink";

export interface NavLinksItem {
  title: string;
  path?: string;
  children?: NavLinksItem[];
}

interface MenuOverlaysProps {
  links: NavLinksItem[];
}

export default function MenuOverlays({ links }: MenuOverlaysProps) {
  if (!links || links.length === 0) return null;

  // Flatten children so all items show together on mobile
  const flatLinks: NavLinksItem[] = links.flatMap((link) => (link.children ? link.children : [link]));

  return (
    <ul className="flex flex-col py-4 items-center">
      {flatLinks.map((link, index) => (
        <li key={index}>{link.path ? <NavLink href={link.path} label={link.title} /> : <span className="text-gray-400 cursor-default">{link.title}</span>}</li>
      ))}
    </ul>
  );
}
