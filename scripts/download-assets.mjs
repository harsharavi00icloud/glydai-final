import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const ASSETS = [
    // Iman Gadzhi photo
    { url: "https://framerusercontent.com/images/lXsWWLZLFGEMiEyYy3xNMl8xY.jpeg", name: "iman-gadzhi.jpeg" },
    // Signature
    { url: "https://framerusercontent.com/images/gHxLabcf0NmnWLyKVtx9RCU4ee0.png", name: "signature.png" },
    // Logo wide
    { url: "https://framerusercontent.com/images/JA5FLLlT0aN0MGe3mWD1926zo.png", name: "logo-wide.png" },
    // Logo SVG
    { url: "https://framerusercontent.com/images/hIDqfiTbY3IysibAQMXdLAh3FIg.svg", name: "logo.svg" },
    // Smoke/hero background
    { url: "https://framerusercontent.com/images/08a24h5ttJ5ty6suHhFCrpB30.png", name: "smoke-bg.png" },
    // Monetise icon
    { url: "https://framerusercontent.com/images/t0GMsX7RVkn2nuzULkqAzFsEIlk.svg", name: "icon-monetise.svg" },
    // UpLevel/Quantum icon
    { url: "https://framerusercontent.com/images/H8hbJbLKjJfpGrWoNe4K7c5w6c.svg", name: "icon-uplevel.svg" },
    // Revenue chart
    { url: "https://framerusercontent.com/images/HLwYB0HJr9juasTFx9l9plHQ3g.png", name: "revenue-chart.png" },
    // Stats dashboard images
    { url: "https://framerusercontent.com/images/AWjNqzDdQEJjORrEbZdOQvaMSxo.webp", name: "stats-1.webp" },
    { url: "https://framerusercontent.com/images/YiJz3ZSKM27gSQQ3kYy1Y2MsghA.webp", name: "stats-2.webp" },
    { url: "https://framerusercontent.com/images/stY1Hp8vXHzXi5b3V06VFwQg3fg.webp", name: "stats-3.webp" },
    // Graph/chart
    { url: "https://framerusercontent.com/images/9gpixPGscluYhjdqS19N9mogVEU.png", name: "graph-chart.png" },
    // Testimonial photo
    { url: "https://framerusercontent.com/images/Q1r36IPMNObwHf9tV9EwS9v0eE.webp", name: "testimonial-photo.webp" },
    // Favicon
    { url: "https://framerusercontent.com/images/wAklf6hp1IPKwsRdJU3qYAskpc.png", name: "../favicon.png" },
];

async function downloadFile(url, destPath) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
        const buffer = await response.arrayBuffer();
        await writeFile(destPath, Buffer.from(buffer));
        console.log(`✓ Downloaded: ${path.basename(destPath)}`);
    } catch (err) {
        console.error(`✗ Failed: ${url} — ${err.message}`);
    }
}

async function main() {
    const publicDir = path.resolve(process.cwd(), "public");
    const imgDir = path.join(publicDir, "images");

    if (!existsSync(imgDir)) await mkdir(imgDir, { recursive: true });

    // Download 4 at a time
    const batches = [];
    for (let i = 0; i < ASSETS.length; i += 4) {
        batches.push(ASSETS.slice(i, i + 4));
    }

    for (const batch of batches) {
        await Promise.all(
            batch.map(({ url, name }) => {
                const dest = name.startsWith("../")
                    ? path.join(publicDir, name.replace("../", ""))
                    : path.join(imgDir, name);
                return downloadFile(url, dest);
            })
        );
    }

    console.log("\n✅ Asset download complete!");
}

main();
