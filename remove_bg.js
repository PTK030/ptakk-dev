const Jimp = require('jimp');

async function processImage(inputPath, outputPath) {
    try {
        const image = await Jimp.read(inputPath);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            // Calculate lightness (since it's a white ink on black bg)
            // Use the maximum color value as the alpha channel
            const maxColor = Math.max(red, green, blue);

            // Set pixel completely white, but map its visibility to its original brightness
            this.bitmap.data[idx + 0] = 255;
            this.bitmap.data[idx + 1] = 255;
            this.bitmap.data[idx + 2] = 255;
            this.bitmap.data[idx + 3] = maxColor; // Alpha transparency
        });

        await image.writeAsync(outputPath);
        console.log(`Successfully processed ${outputPath}`);
    } catch (e) {
        console.error(`Error processing ${inputPath}:`, e);
    }
}

(async () => {
    await processImage('public/signature-kp.png', 'public/signature-kp.png');
    await processImage('public/signature-full.png', 'public/signature-full.png');
    console.log("Finished processing all images.");
})();
