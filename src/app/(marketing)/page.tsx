import { MarketingPage } from "@/components/marketing/marketing-page";
import { getThemePreset } from "@/lib/theme";

export default function MarketingRoute() {
  const theme = getThemePreset();
  return <MarketingPage theme={theme} />;
}
