export default function ButtonAction({
  children,
  className,
  onClick,
}: {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-core-light-blue active:bg-medium-blue transition-colors text-white font-medium py-3 px-6 flex items-center ${className}`}
    >
      {children}
    </button>
  );
}
