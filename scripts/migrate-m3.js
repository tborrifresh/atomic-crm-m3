import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const M3_MAPPING = {
    // Legacy Backgrounds -> M3 Surface
    'bg-white': 'bg-surface',
    'bg-gray-50': 'bg-surface-container-low',
    'bg-gray-100': 'bg-surface-container',
    'bg-gray-200': 'bg-surface-container-high',
    'bg-gray-900': 'bg-inverse-surface',

    // Legacy Text -> M3 Typography Colors
    'text-gray-900': 'text-on-surface',
    'text-gray-700': 'text-on-surface-variant',
    'text-gray-500': 'text-outline',
    'text-white': 'text-inverse-on-surface',

    // Legacy Borders -> M3 Outline
    'border-gray-200': 'border-outline-variant',
    'border-gray-300': 'border-outline',

    // Legacy Radius -> M3 Corners
    'rounded-lg': 'rounded-md', // Map large to medium usually
    'rounded-xl': 'rounded-lg',

    // Legacy Shadows -> M3 Elevation
    'shadow-sm': 'shadow-md3-1',
    'shadow': 'shadow-md3-2',
    'shadow-md': 'shadow-md3-3',
    'shadow-lg': 'shadow-md3-4',
    'shadow-xl': 'shadow-md3-5',
};

async function scanDirectory(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = path.resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? scanDirectory(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

async function migrateFile(filePath) {
    if (!filePath.match(/\.(tsx|ts|jsx|js|html)$/)) return;

    try {
        let content = await readFile(filePath, 'utf8');
        let modified = false;

        Object.keys(M3_MAPPING).forEach(legacy => {
            const regex = new RegExp(`(?<!-)\\b${legacy}\\b`, 'g'); // Determine specific word boundaries
            if (content.match(regex)) {
                content = content.replace(regex, M3_MAPPING[legacy]);
                modified = true;
            }
        });

        if (modified) {
            console.log(`Migrating: ${filePath}`);
            await writeFile(filePath, content, 'utf8');
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
}

async function main() {
    const srcDir = path.resolve(__dirname, '../src');
    console.log(`Scanning ${srcDir} for M3 migrations...`);

    const files = await scanDirectory(srcDir);
    console.log(`Found ${files.length} files.`);

    // Uncomment to execute run
    await Promise.all(files.map(migrateFile));
    console.log("Migration Complete.");
}

main();
