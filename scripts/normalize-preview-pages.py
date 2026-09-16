from pathlib import Path

from PIL import Image

ASSETS = Path(
    r"C:\Users\marcelo.farias\.cursor\projects\c-Users-marcelo-farias-Documents-TI-Projetos-Pessoal-landing\assets"
)
PUBLIC = Path(r"C:\Users\marcelo.farias\Documents\TI\Projetos\Pessoal\landing\public\books")

PT_SRC = [
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-f95a2c08-ab05-4900-bd0d-4eba7f820ad1.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-e0d7b8b2-2975-42ba-bc68-71af322b0495.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-b4f81d0e-f492-4eb5-8adb-2e569223e9f0.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-84e9092d-096c-46d3-88a1-f321932de5b4.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-4c798808-b184-49dd-96b8-46cebdb3a876.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-a4e327bb-a578-4206-9658-2c352ef3665e.png",
]

# Ordem do livro EN: páginas 2–6.
EN_SRC = [
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-e1176bb8-7585-48f1-a2de-9fd572a5dfb8.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-149c1fda-a59c-4c0e-bb7d-20a662f746f5.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-c2603a3b-a636-4888-a039-fd151556ed48.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-d726c2ca-829f-49a3-bceb-f62c624e42d2.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-0b7b7a29-d096-4904-8614-8f78e0852c92.png",
]

# Ordem do livro ES: páginas 2–6.
ES_SRC = [
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-ae1241c7-ffc3-4cbc-a5eb-22623aff7124.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-80bf5e43-3dbc-49f9-845c-7522ba193e3c.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-83e67c03-befb-4a94-b96a-53c1db294638.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-5ffba2d9-bd70-47aa-be3e-86115f1cc183.png",
    ASSETS / "c__Users_marcelo.farias_AppData_Roaming_Cursor_User_workspaceStorage_ca1484cdd0500f59a8cf003083d16740_images_image-4f1264f8-1e35-4cc5-b163-b504e346a33d.png",
]

TARGET_W = 1200
DARK = 180
EXTRA_CROP = 1
KEEP_SIDE = 40
INK_THRESHOLD = 245


def edge_is_dark(img: Image.Image, axis: str, index: int, dark: int = DARK) -> bool:
    px = img
    w, h = px.size
    if axis == "row":
        total = sum(sum(px.getpixel((x, index))[:3]) / 3 for x in range(w))
        return (total / w) < dark
    total = sum(sum(px.getpixel((index, y))[:3]) / 3 for y in range(h))
    return (total / h) < dark


def content_box(img: Image.Image, threshold: int = INK_THRESHOLD):
    px = img.convert("RGB")
    w, h = px.size
    pixels = px.load()

    def is_ink(x: int, y: int) -> bool:
        r, g, b = pixels[x, y]
        return (r + g + b) / 3 < threshold

    top = 0
    while top < h and not any(is_ink(x, top) for x in range(w)):
        top += 1
    bottom = h - 1
    while bottom > top and not any(is_ink(x, bottom) for x in range(w)):
        bottom -= 1
    left = 0
    while left < w and not any(is_ink(left, y) for y in range(h)):
        left += 1
    right = w - 1
    while right > left and not any(is_ink(right, y) for y in range(h)):
        right -= 1
    return left, top, right + 1, bottom + 1


def trim_side_margins(img: Image.Image) -> Image.Image:
    left, _top, right, _bottom = content_box(img)
    w, h = img.size
    crop_l = max(0, left - KEEP_SIDE)
    crop_r = min(w, right + KEEP_SIDE)
    return img.crop((crop_l, 0, crop_r, h))


def trim_screenshot_frame(img: Image.Image) -> Image.Image:
    rgb = img.convert("RGB")
    w, h = rgb.size
    top = 0
    while top < h and edge_is_dark(rgb, "row", top):
        top += 1
    bottom = h - 1
    while bottom > top and edge_is_dark(rgb, "row", bottom):
        bottom -= 1
    left = 0
    while left < w and edge_is_dark(rgb, "col", left):
        left += 1
    right = w - 1
    while right > left and edge_is_dark(rgb, "col", right):
        right -= 1

    top = min(h - 1, top + EXTRA_CROP)
    left = min(w - 1, left + EXTRA_CROP)
    bottom = max(top + 1, bottom - EXTRA_CROP)
    right = max(left + 1, right - EXTRA_CROP)
    return rgb.crop((left, top, right + 1, bottom + 1))


def process_pages(src: list[Path], out_dir: Path) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    for i, path in enumerate(src, start=1):
        cropped = trim_screenshot_frame(Image.open(path))
        ratio = TARGET_W / cropped.width
        new_size = (
            TARGET_W,
            max(1, round(cropped.height * ratio)),
        )
        fitted = cropped.resize(new_size, Image.Resampling.LANCZOS)
        fitted = trim_side_margins(fitted)
        dest = out_dir / f"page-{i:02d}.webp"
        fitted.save(dest, "WEBP", quality=90, method=6)
        print(f"{out_dir.name}/{dest.name}: {fitted.size} from {Image.open(path).size}")


if __name__ == "__main__":
    process_pages(ES_SRC, PUBLIC / "es" / "preview")
