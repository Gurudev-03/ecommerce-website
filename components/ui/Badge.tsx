type BadgeVariant = "sale" | "new" | "hot" | "flash";

const variantClasses: Record<BadgeVariant, string> = {
  sale: "badge-sale",
  new: "badge-new",
  hot: "badge-hot",
  flash: "bg-gradient-to-r from-purple-600 to-indigo-600",
};

const variantLabels: Record<BadgeVariant, string> = {
  sale: "SALE",
  new: "NEW",
  hot: "HOT",
  flash: "⚡ FLASH",
};

export function Badge({ variant }: { variant: BadgeVariant }) {
  return (
    <span
      className={`${variantClasses[variant]} text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider`}
    >
      {variantLabels[variant]}
    </span>
  );
}
