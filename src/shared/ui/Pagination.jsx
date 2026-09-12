import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, limit, total, onPageChange, className = "" }) => {
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const start = total === 0 ? 0 : (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  const goToPage = (nextPage) => {
    if (nextPage >= 1 && nextPage <= totalPages && nextPage !== page) {
      onPageChange(nextPage);
    }
  };

  return (
    <div
      className={`flex flex-col gap-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-xs text-[var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <p className="m-0">
        Showing{" "}
        <span className="font-semibold text-[var(--color-text-primary)]">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-[var(--color-text-primary)]">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-[var(--color-text-primary)]">
          {total}
        </span>{" "}
        employees
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page === 1}
          className="grid size-8 place-items-center rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] transition hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => goToPage(page - 1)}
        >
          <ChevronLeft size={15} />
        </button>

        <span className="min-w-20 text-center font-medium text-[var(--color-text-primary)]">
          Page {page} of {totalPages}
        </span>

        <button
          type="button"
          aria-label="Next page"
          disabled={page === totalPages}
          className="grid size-8 place-items-center rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)] transition hover:bg-[var(--color-primary)]/15 hover:text-[var(--color-text-primary)] disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => goToPage(page + 1)}
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
