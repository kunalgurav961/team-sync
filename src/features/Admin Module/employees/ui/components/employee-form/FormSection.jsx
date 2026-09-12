const FormSection = ({ title, icon, children }) => {
  return (
    <section className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="flex items-center gap-2.5 px-5 py-[18px]">
        <div className="grid size-7 place-items-center rounded-md bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
          {icon}
        </div>

        <h2 className="m-0 text-[15px] font-bold text-[var(--color-text-primary)]">
          {title}
        </h2>
      </div>

      <div className="h-px bg-[var(--color-border)]" />

      <div className="p-4 sm:p-6">{children}</div>
    </section>
  );
};

export default FormSection;
