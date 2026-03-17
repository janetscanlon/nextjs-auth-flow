interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant: "blue" | "gray";
}

const variants = {
  blue: "bg-[#2e5bff] text-white hover:bg-blue-700",
  gray: "bg-[#f0f0f0] text-black hover:bg-gray-200",
};

export default function Button({
  children,
  disabled,
  type = "button",
  onClick,
  variant = "blue",
}: ButtonProps) {
  return (
    <button
      className={`px-8 py-4 font-semibold rounded-xl transition-colors disabled:opacity-50 ${variants[variant]}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
