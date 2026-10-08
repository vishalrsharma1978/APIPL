"""Generate a branded 1200x630 Open Graph share image for APIPL."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
BG = (11, 31, 53)        # #0b1f35 brand navy
ACCENT = (214, 158, 46)  # warm gold accent
WHITE = (240, 244, 248)
MUTED = (150, 170, 190)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# subtle gradient band at bottom
for i in range(180):
    y = H - 180 + i
    t = i / 180
    col = (
        int(BG[0] + (18 - BG[0]) * t),
        int(BG[1] + (42 - BG[1]) * t),
        int(BG[2] + (70 - BG[2]) * t),
    )
    d.line([(0, y), (W, y)], fill=col)

# accent bar
d.rectangle([0, 0, 16, H], fill=ACCENT)


def load_font(size, bold=True):
    candidates = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for p in candidates:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()


# try to place the logo top-left
logo_path = "public/assets/apipl-logo.png"
x0 = 80
if os.path.exists(logo_path):
    try:
        logo = Image.open(logo_path).convert("RGBA")
        lh = 90
        lw = int(logo.width * lh / logo.height)
        logo = logo.resize((lw, lh))
        img.paste(logo, (x0, 70), logo)
    except Exception:
        pass

f_brand = load_font(40)
f_title = load_font(74)
f_sub = load_font(34, bold=False)
f_tag = load_font(28, bold=False)

d.text((x0, 185), "AASHI POWERTECH INDIA PVT LTD", font=f_brand, fill=ACCENT)

d.text((x0, 250), "Railway Sleeper Insert", font=f_title, fill=WHITE)
d.text((x0, 330), "Manufacturer  ·  RT 6901 SGCI", font=f_title, fill=WHITE)

d.text((x0, 445), "RDSO-approved  |  SG Iron 500/7  |  450,000 inserts / month",
       font=f_sub, fill=MUTED)

d.text((x0, 540), "apipl-website.onrender.com   ·   aashipowertech@gmail.com",
       font=f_tag, fill=MUTED)

out = "public/assets/og-image.png"
img.save(out, "PNG")
print("Saved", out, img.size)
