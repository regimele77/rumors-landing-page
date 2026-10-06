export function HeroHeadline({ lines }: { lines: readonly string[] }) {
  return (
    <div className="hero-title">
      <h1 className="display">
        {lines.map((line, index) => (
          <span key={line} className="hero-mask">
            <span
              className="hero-line"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {line}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}
