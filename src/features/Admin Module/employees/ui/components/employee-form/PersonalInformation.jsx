import AvatarUpload from "./AvatarUpload";

const PersonalInformation = ({ register, avatar, setAvatar }) => {
  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-[150px_minmax(0,1fr)]">
      <AvatarUpload value={avatar} onChange={setAvatar} />

      <div className="grid gap-[18px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label className="text-xs font-semibold text-[var(--color-text-primary)]">
              Full Name <span>*</span>
            </label>

            <input
              className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/55 px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
              {...register("name")}
              type="text"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          <div className="grid gap-1.5">
            <label className="text-xs font-semibold text-[var(--color-text-primary)]">
              Email Address <span>*</span>
            </label>

            <input
              className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/55 px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
              {...register("email")}
              type="email"
              placeholder="sarah.j@syn thetix.ai"
            />
          </div>
        </div>

        <div className="grid gap-1.5">
          <label className="text-xs font-semibold text-[var(--color-text-primary)]">
            Bio / About
          </label>

          <textarea
            className="min-h-24 w-full resize-y rounded-md border border-[var(--color-border)] bg-[var(--color-background)]/55 px-3 py-2.5 text-[13px] text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
            {...register("bio")}
            placeholder="Tell us about the new team member..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
