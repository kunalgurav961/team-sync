import { useRef } from "react";
import { Camera, Pencil } from "lucide-react";

const AvatarUpload = ({ value, onChange }) => {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onChange(file);
  };

  return (
    <div className="relative grid content-start justify-items-center gap-2">
      <div className="relative size-32">
        <div
          className="group relative grid size-32 cursor-pointer place-items-center overflow-hidden rounded-full border border-dashed border-[var(--color-secondary)] bg-[var(--color-primary)]/10 text-[var(--color-secondary)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/15"
          onClick={() => inputRef.current?.click()}
        >
          {value ? (
            <img
              src={URL.createObjectURL(value)}
              alt="Employee"
              className="size-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-center">
              <Camera size={25} strokeWidth={1.8} />

              <span className="text-[11px] font-semibold leading-tight">
                Upload Photo
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label={value ? "Change employee photo" : "Upload employee photo"}
          className="absolute bottom-0 right-0 grid size-8 translate-x-1/4 translate-y-1/4 place-items-center rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-primary)] text-[var(--color-background)] shadow-md transition hover:brightness-110"
          onClick={(event) => {
            event.stopPropagation();
            inputRef.current?.click();
          }}
        >
          <Pencil size={14} strokeWidth={2.2} />
        </button>
      </div>

      <p className="m-0 text-center text-[10px] text-[var(--color-text-secondary)]">
        JPG or PNG. Max size of 800K.
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg"
        hidden
        onChange={handleChange}
      />
    </div>
  );
};

export default AvatarUpload;
