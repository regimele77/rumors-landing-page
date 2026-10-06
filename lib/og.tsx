/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const iconSize = { width: 32, height: 32 };
export const appleIconSize = { width: 180, height: 180 };

async function loadAssets() {
  const [font, logo] = await Promise.all([
    readFile(
      join(
        process.cwd(),
        "node_modules/geist/dist/fonts/geist-sans/Geist-Black.ttf",
      ),
    ),
    readFile(join(process.cwd(), "public/logo-blue.png")),
  ]);

  return {
    font,
    logoSrc: `data:image/png;base64,${logo.toString("base64")}`,
  };
}

export async function createOgImage(title: string) {
  const { font, logoSrc } = await loadAssets();
  const fontSize = title.length > 18 ? 84 : 112;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          color: "#1B1F4A",
          padding: "72px",
        }}
      >
        <img src={logoSrc} width={120} height={120} alt="" />
        <div
          style={{
            display: "flex",
            fontSize,
            fontWeight: 900,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: font,
          weight: 900,
          style: "normal",
        },
      ],
    },
  );
}

export async function createIcon(dimension: number) {
  const { logoSrc } = await loadAssets();
  const pad = Math.round(dimension * 0.18);
  const mark = dimension - pad * 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <img src={logoSrc} width={mark} height={mark} alt="" />
      </div>
    ),
    {
      width: dimension,
      height: dimension,
    },
  );
}
