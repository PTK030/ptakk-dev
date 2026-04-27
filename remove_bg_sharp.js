const sharp = require('sharp');

async function processImage(inputPath, outputPath) {
    try {
        const meta = await sharp(inputPath).metadata();
        const alphaBuffer = await sharp(inputPath)
            .extractChannel('green') // white on black means all channels are equal. Extracting one as alpha.
            .toBuffer();

        await sharp({
            create: {
                width: meta.width,
                height: meta.height,
                channels: 3,
                background: { r: 255, g: 255, b: 255 } // solid white rgb
            }
        })
            .joinChannel(alphaBuffer) // attach as 4th channel (alpha)
            .png() // save as PNG with transparency
            .toBuffer()
            .then(data => {
                // Write buffer to file (we write to buffer first so we can overwrite the input file if necessary)
                require('fs').writeFileSync(outputPath, data);
                console.log(`Successfully processed ${outputPath}`);
            });

    } catch (e) {
        console.error(`Error processing ${inputPath}:`, e);
    }
}

(async () => {
    await processImage('public/signature-kp.png', 'public/signature-kp.png');
    await processImage('public/signature-full.png', 'public/signature-full.png');
})();
