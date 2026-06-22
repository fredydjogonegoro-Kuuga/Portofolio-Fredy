"""One-shot script to generate a professional editorial headshot for the portfolio.
Run from /app: python scripts/gen_headshot.py
"""
import asyncio
import os
import base64
import sys
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / "backend" / ".env")

API_KEY = os.getenv("EMERGENT_LLM_KEY")
if not API_KEY:
    print("ERROR: EMERGENT_LLM_KEY not set in /app/backend/.env")
    sys.exit(1)

SOURCE = Path("/app/frontend/public/fredy.jpg")
OUT = Path("/app/frontend/public/fredy_editorial.png")

PROMPT = (
    "Transform this passport-style photo of an Indonesian man into a polished "
    "professional editorial headshot suitable for a data analyst's portfolio website. "
    "Keep his exact facial features, identity, ethnicity, and likeness completely unchanged — "
    "do not alter his face, eyes, nose, mouth, or skin tone. Only restyle the photo: "
    "use soft, directional studio lighting from the upper left with gentle rim light, "
    "a clean modern neutral background (warm off-white or soft charcoal gradient), "
    "tasteful slight depth-of-field bokeh, business-casual modern dark suit with no tie or open collar, "
    "natural confident expression, looking slightly off-camera, magazine-quality editorial finish, "
    "high resolution, sharp focus on the eyes, photorealistic, color-graded with cinematic warm tones. "
    "Vertical 4:5 portrait orientation. Do not add text, logos, or watermarks."
)


async def main():
    print(f"Reading source: {SOURCE}")
    with open(SOURCE, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("utf-8")

    chat = (
        LlmChat(
            api_key=API_KEY,
            session_id="headshot-fredy",
            system_message="You are an expert portrait photographer and image editor.",
        )
        .with_model("gemini", "gemini-3.1-flash-image-preview")
        .with_params(modalities=["image", "text"])
    )

    msg = UserMessage(text=PROMPT, file_contents=[ImageContent(b64)])
    print("Calling Gemini Nano Banana ...")
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"Text response (first 200 chars): {(text or '')[:200]}")

    if not images:
        print("ERROR: no image returned")
        sys.exit(2)

    img = images[0]
    print(f"Got image mime: {img.get('mime_type')}")
    data = base64.b64decode(img["data"])
    OUT.write_bytes(data)
    print(f"Saved → {OUT} ({len(data)} bytes)")


if __name__ == "__main__":
    asyncio.run(main())
