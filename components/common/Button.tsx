import { ButtonProps } from "@/interfaces/index";

const Button = ({
  label,
  onClick,
  disabled,
  variant = "primary",
}: ButtonProps) => {
  const base = "px-4 py-2 rounded font-medium";
  const styles = {
    primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
    secondary: `${base} bg-gray-300 text-gray-900 hover:bg-gray-400`,
    outline: `${base} border border-gray-400 text-gray-700 hover:bg-gray-100`,
  };

  return (
    <button onClick={onClick} disabled={disabled} className={styles[variant]}>
      {label}
    </button>
  );
};

export default Button;
