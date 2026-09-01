import type { NextConfig } from "next";
import { getMenuDestination, menuPath } from "./lib/menu";

const menuDestination = getMenuDestination();

const nextConfig: NextConfig = {
  transpilePackages: ["@andrezhan27/intelis-restaurant-ui"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/images/food-1.webp", search: "?v=20260831" },
      { pathname: "/images/food-2.webp", search: "?v=20260831" },
      { pathname: "/images/food-3.webp", search: "?v=20260831" },
      { pathname: "/images/food-4.webp", search: "?v=20260831" },
    ],
  },
  rewrites() {
    return menuDestination
      ? [{ source: menuPath, destination: menuDestination }]
      : [];
  },
};

export default nextConfig;
