import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ajustar ruta según la ubicación de node y vite en su sistema
const nodePath = 'C:\\Program Files\\nodejs\\node.exe';
const vitePath = resolve(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

// Verificar que los archivos existan
if (!fs.existsSync(nodePath)) {
  console.error('Error: No se encontró node.exe en la ruta especificada.');
  console.log('Por favor, ajuste la ruta en el archivo start-server.js');
  process.exit(1);
}

if (!fs.existsSync(vitePath)) {
  console.error('Error: No se encontró vite.js en node_modules.');
  console.log('Por favor, ejecute "npm install" primero.');
  process.exit(1);
}

// Definir parámetros del servidor
const HOST = '127.0.0.1';
const PORT = 3000;

console.log(`Iniciando servidor en http://${HOST}:${PORT}`);
console.log('Presione Ctrl+C para detener el servidor');

try {
  // Iniciar el servidor con los parámetros específicos
  execSync(`"${nodePath}" "${vitePath}" --host ${HOST} --port ${PORT} --strictPort false`, {
    stdio: 'inherit'
  });
} catch (error) {
  if (error.signal !== 'SIGINT') {
    console.error('Error al iniciar el servidor:', error.message);
  }
} 