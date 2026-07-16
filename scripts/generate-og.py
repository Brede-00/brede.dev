#!/usr/bin/env python3
"""Generate public/og.png (1200x630) in the site's visual language.

Rerun after changing NAME or TAGLINE below:
    python3 scripts/generate-og.py

Requires Pillow:  pip install Pillow
"""

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

# ---- Edit these two lines, then rerun -------------------------------------
NAME = "Brede Brendemo"  # add your last name here too once it's set in site.ts
TAGLINE = "Computer science student & builder — brede.dev"
AVAILABILITY = "OPEN TO SUMMER 2027 INTERNSHIPS"
# ----------------------------------------------------------------------------

SNOW = (243, 245, 244)
INK = (20, 24, 28)
SLATE = (89, 99, 109)
MIST = (217, 223, 220)
SIGNAL = (191, 18, 48)

W, H = 1200, 630
MARGIN = 80


def load_font(candidates: list[str], size: int) -> ImageFont.FreeTypeFont:
    for path in candidates:
        p = Path(path)
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default(size)  # type: ignore[return-value]


BOLD = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
]
REGULAR = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "C:/Windows/Fonts/arial.ttf",
]
MONO = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf",
    "/System/Library/Fonts/Menlo.ttc",
    "C:/Windows/Fonts/consola.ttf",
]


def pseudo_random(i: int) -> float:
    x = math.sin(i * 127.1 + 311.7) * 43758.5453
    return x - math.floor(x)


def spaced(text: str) -> str:
    return " ".join(text)


def main() -> None:
    img = Image.new("RGB", (W, H), SNOW)
    d = ImageDraw.Draw(img)

    f_name = load_font(BOLD, 118)
    f_tag = load_font(REGULAR, 34)
    f_mono = load_font(MONO, 19)
    f_mono_sm = load_font(MONO, 16)

    # Top row — wordmark left, availability right
    d.text((MARGIN, 72), spaced("BREDE.DEV"), font=f_mono, fill=SLATE)
    avail = spaced(AVAILABILITY)
    tw = d.textlength(avail, font=f_mono_sm)
    ax = W - MARGIN - tw
    d.ellipse((ax - 26, 79, ax - 14, 91), fill=SIGNAL)
    d.text((ax, 72), avail, font=f_mono_sm, fill=SLATE)

    # Name + tagline
    d.text((MARGIN - 6, 208), NAME, font=f_name, fill=INK)
    d.text((MARGIN, 366), TAGLINE, font=f_tag, fill=SLATE)

    # Event-stream strip along the bottom
    baseline = 540
    x = MARGIN
    i = 0
    while x < W - MARGIN:
        r = pseudo_random(i)
        h = int(10 + r * 42)
        is_signal = pseudo_random(i * 7 + 13) > 0.94
        color = SIGNAL if is_signal else MIST
        if is_signal:
            h += 10
        d.rectangle((x, baseline - h, x + 3, baseline), fill=color)
        x += 12
        i += 1
    d.line((MARGIN, baseline + 1, W - MARGIN, baseline + 1), fill=MIST, width=2)
    d.text(
        (MARGIN, baseline + 16),
        "fig. 01 — event stream, filtered",
        font=f_mono_sm,
        fill=SLATE,
    )

    out = Path(__file__).resolve().parent.parent / "public" / "og.png"
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "PNG")
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
