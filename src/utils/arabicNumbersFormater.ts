import i18n from "@/i18n";

export function arabicNumberFormater(value: number): string {
  return new Intl.NumberFormat(i18n.language === "en" ? "en" : "ar-EG").format(
    value,
  );
}
