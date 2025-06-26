interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export default function TabButton({ active, selectTab, children }: TabButtonProps) {
  const buttonClasses = active ? "text-white   " : "text-[#ADB7BE] border-b border-blue-500";

  return (
    <button onClick={selectTab} className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
      {children}
    </button>
  );
}
