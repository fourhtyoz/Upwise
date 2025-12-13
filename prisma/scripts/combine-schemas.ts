import fs from 'fs';
import path from 'path';

const schemasDir = path.join(__dirname, '../schema');
const outputFile = path.join(__dirname, '../schema.prisma');

function combineSchemas() {
    const files = ['base.prisma', 'models/user.prisma'];

    let combined = '';

    files.forEach((file) => {
        const filePath = path.join(schemasDir, file);
        if (fs.existsSync(filePath)) {
            combined += `\n\n// --- ${file} ---\n\n`;
            combined += fs.readFileSync(filePath, 'utf8');
        }
    });

    fs.writeFileSync(outputFile, combined.trim());
    console.log('✅ Schema combined successfully!');
}

combineSchemas();
