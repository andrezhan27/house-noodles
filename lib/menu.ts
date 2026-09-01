const configuredMenuUrl = process.env.NEXT_PUBLIC_MENU_URL?.trim();

function getMenuUrl() {
  if (!configuredMenuUrl) return null;

  try {
    const url = new URL(configuredMenuUrl);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export const menuUrl = getMenuUrl();
