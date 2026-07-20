type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Savestate">
      <svg
        aria-hidden="true"
        className="size-8 shrink-0"
        viewBox="0 0 36 40"
        fill="none"
      >
        <path
          d="M18 1.8 33.6 10.8v18L18 37.8 2.4 28.8v-18L18 1.8Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m2.9 10.9 15.1 8.7 15.1-8.7M18 19.6v17.3"
          stroke="currentColor"
          strokeWidth="1.35"
          opacity=".72"
        />
        <circle cx="18" cy="19.6" r="5.2" fill="#07100d" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="19.6" r="1.7" fill="currentColor" />
      </svg>
      {!compact && (
        <span className="text-[1.05rem] font-semibold tracking-[-0.025em] text-white">
          savestate
        </span>
      )}
    </span>
  );
}
