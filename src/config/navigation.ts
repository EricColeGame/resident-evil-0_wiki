export type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "puzzles", path: "/puzzles", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "story", path: "/story", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
