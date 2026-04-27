from PIL import Image
import os

def make_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Calculate luminance
        lum = int((item[0] + item[1] + item[2]) / 3)
        # Set color to white (255, 255, 255) and alpha to luminance
        newData.append((255, 255, 255, lum))
        
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

# Since the previous node script might have messed up the original,
# we should ideally use the original generated images if we had them.
# But assuming public/signature-kp.png is still white-on-black or mostly white-on-dark, this will extract the white parts.
make_transparent("public/signature-kp.png", "public/signature-kp-tr.png")
