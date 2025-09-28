
type NavTabsType = {
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  tab5: string;
  tab6: string;
};

type Props = {
  tabs: NavTabsType;
};

export default function NavTabs({ tabs }: Props) {
  return (
    <ul className="flex space-x-10 list-none font-semibold  text-md">
      <li><a href="#" className="text-gray-700">{tabs.tab1}</a></li>
      <li><a href="#" className="text-gray-700">{tabs.tab2}</a></li>
      <li><a href="#" className="text-gray-700">{tabs.tab3}</a></li>
      <li><a href="#" className="text-gray-700">{tabs.tab4}</a></li>
      <li><a href="#" className="text-gray-700">{tabs.tab5}</a></li>
      <li><a href="#" className="text-gray-700">{tabs.tab6}</a></li>
    </ul>
  );
}
