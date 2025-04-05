function Chip({ technology }: { technology: string }) {
  return (
    <div className="w-fit py-1 px-2 rounded-2xl text-xs text-foreground border border-accent-foreground opacity-60">
      {technology}
    </div>
  );
}

export default Chip;
