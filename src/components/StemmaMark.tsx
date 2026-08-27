export function StemmaMark({
  width = 36,
  height = 45,
  className = "h-9 w-auto shrink-0",
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/stemma.svg"
      alt="Marchio Cruscotto Comune"
      width={width}
      height={height}
      className={className}
    />
  );
}
