type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function Button({ children, className = '' }: ButtonProps) {
  return (
    <button className={`rounded-md bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white ${className}`.trim()}>
      {children}
    </button>
  );
}
