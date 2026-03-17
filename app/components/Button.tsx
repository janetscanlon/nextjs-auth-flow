interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  type = "button",
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      className="w-full h-12 rounded-lg font-medium text-white disabled:opacity-50 bg-blue-600 hover:bg-indigo-800 transition-colors"
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
