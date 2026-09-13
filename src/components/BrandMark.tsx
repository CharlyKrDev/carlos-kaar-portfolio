export function BrandMark() {
  return (
    <span className="font-mono text-sm font-medium tracking-wide text-foreground">
      <span
        className={`text-accent
after:ml-2
after:text-accent-secondary
after:content-['•']`}
      >
        &gt;_
      </span>
      CKAAR
    </span>
  );
}
