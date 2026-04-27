from PIL import Image

def process(input_path, output_path, threshold=40):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Use maximum RGB value as luminance to catch any off-black artifacts
        lum = max(item[0], item[1], item[2])
        if lum < threshold:
            # Completely transparent for dark pixels
            newData.append((255, 255, 255, 0))
        else:
            # Scale alpha smoothly above the threshold
            alpha = int(((lum - threshold) / (255 - threshold)) * 255)
            newData.append((255, 255, 255, alpha))
            
    img.putdata(newData)
    img.save(output_path, "PNG")

process("public/signature-kp.png", "public/signature-kp-clean.png", threshold=50)
print("Saved clean transparent signature to public/signature-kp-clean.png")
