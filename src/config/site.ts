export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Resident Evil 0 Wiki",
  shortName: "Resident Evil 0",
  logoText: "R",
  tagline: "Complete Walkthroughs, Characters, Weapons & Guides",
  description: "Your ultimate Resident Evil 0 wiki: walkthroughs, characters, weapons, items, enemies, puzzles, bosses, and survival horror guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://resident-evil-0.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://resident-evil-0.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.residentevil.com/0/",
  heroVideoId: "QbjC_WZy_jo", // Resident Evil 0 official launch trailer
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
