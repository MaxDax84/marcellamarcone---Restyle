from PIL import Image, ImageDraw, ImageFont

NAVY = "#0F2633"
CREAM = "#F0F6FA"
TERRACOTTA = "#2B7390"


def font(size: int):
    for path in (
        "C:/Windows/Fonts/georgiab.ttf",
        "C:/Windows/Fonts/georgia.ttf",
    ):
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            continue
    return ImageFont.load_default()


def build_master(size: int) -> Image.Image:
    img = Image.new("RGB", (size, size), NAVY)
    draw = ImageDraw.Draw(img)

    # Thin inset ring — refined "seal" feel, matches a calm therapy-practice brand
    margin = size * 0.12
    ring_w = max(1, round(size * 0.006))
    draw.ellipse(
        [margin, margin, size - margin, size - margin],
        outline=TERRACOTTA,
        width=ring_w,
    )

    text = "MM"
    f = font(round(size * 0.32))
    bbox = draw.textbbox((0, 0), text, font=f)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        ((size - w) / 2 - bbox[0], (size - h) / 2 - bbox[1] - size * 0.01),
        text,
        font=f,
        fill=CREAM,
    )
    return img


def build_favicon_simple(size: int) -> Image.Image:
    """No thin ring — rings alias badly under ~48px, keep it to solid bg + letters."""
    img = Image.new("RGB", (size, size), NAVY)
    draw = ImageDraw.Draw(img)
    text = "MM"
    f = font(round(size * 0.62))
    bbox = draw.textbbox((0, 0), text, font=f)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        ((size - w) / 2 - bbox[0], (size - h) / 2 - bbox[1]),
        text,
        font=f,
        fill=CREAM,
    )
    return img


if __name__ == "__main__":
    master = build_master(1024)
    master.save("app/icon.png")
    master.resize((512, 512), Image.LANCZOS).save("public/icons/icon-512.png")
    master.resize((192, 192), Image.LANCZOS).save("public/icons/icon-192.png")
    master.resize((180, 180), Image.LANCZOS).save("app/apple-icon.png")

    # Maskable: shrink content into the ~72% safe zone, full-bleed navy background
    for size in (192, 512):
        inner = build_master(round(size * 0.72))
        canvas = Image.new("RGB", (size, size), NAVY)
        off = (size - inner.size[0]) // 2
        canvas.paste(inner, (off, off))
        canvas.save(f"public/icons/icon-{size}-maskable.png")

    fav = build_favicon_simple(256).convert("RGBA")
    icons = [fav.resize((s, s), Image.LANCZOS) for s in (16, 32, 48)]
    icons[0].save(
        "app/favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=icons[1:],
    )

    print("done")
