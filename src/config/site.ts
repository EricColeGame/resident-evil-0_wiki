import { routing } from "@/i18n/routing";

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
  supportEmail: "support@resident-evil-0.wiki",
  gameUrl: "https://store.steampowered.com/app/339340/",
  heroVideoId: "mBawx8QbOrs", // Resident Evil Zero Remastered gameplay walkthrough
  social: {
    discord: "https://www.reddit.com/r/residentevil/",
    youtube: "https://www.youtube.com/@residentevil",
  },
  locales: routing.locales,
  defaultLocale: routing.defaultLocale,
};
