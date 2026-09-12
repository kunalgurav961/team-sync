// components/common/Button.jsx

const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-background)] hover:brightness-110",
    secondary:
      "border border-[var(--color-border)] bg-[var(--color-neutral)]/15 text-[var(--color-text-primary)] hover:bg-[var(--color-neutral)]/25",
    danger:
      "bg-[var(--color-tertiary)] text-[var(--color-background)] hover:brightness-110",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md px-4 py-2.5 font-medium transition ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
