const { spawn } = require('child_process');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

console.log('\x1b[36m%s\x1b[0m', '=====================================================');
console.log('\x1b[32m%s\x1b[0m', '  🚀 Starting Swaati Enterprises Development Servers');
console.log('\x1b[36m%s\x1b[0m', '=====================================================');
console.log('\x1b[33m%s\x1b[0m', '  • Public Website:       http://localhost:3000');
console.log('\x1b[35m%s\x1b[0m', '  • SEMS Portal (Route):   http://localhost:3000/sems');
console.log('\x1b[34m%s\x1b[0m', '  • SEMS Direct CRM:      http://localhost:3001/sems');
console.log('\x1b[32m%s\x1b[0m', '  • SEMS Backend API:     http://localhost:4000/api/v1');
console.log('\x1b[36m%s\x1b[0m', '=====================================================\n');

function runProcess(name, prefixColor, args, cwd) {
  const child = spawn(npmCmd, args, {
    cwd,
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: true,
  });

  const prefix = `${prefixColor}[${name}]\x1b[0m `;

  child.stdout.on('data', (data) => {
    const lines = data.toString().trimEnd().split('\n');
    lines.forEach((line) => {
      console.log(`${prefix}${line}`);
    });
  });

  child.stderr.on('data', (data) => {
    const lines = data.toString().trimEnd().split('\n');
    lines.forEach((line) => {
      console.error(`${prefix}\x1b[31m${line}\x1b[0m`);
    });
  });

  child.on('close', (code) => {
    console.log(`${prefix}process exited with code ${code}`);
  });

  return child;
}

const backendProc = runProcess('Backend :4000', '\x1b[32m', ['--prefix', 'backend', 'run', 'dev'], rootDir);
const websiteProc = runProcess('Website :3000', '\x1b[36m', ['--prefix', 'website', 'run', 'dev'], rootDir);
const semsProc = runProcess('SEMS CRM :3001', '\x1b[35m', ['--prefix', 'crm', 'run', 'dev'], rootDir);

function cleanExit() {
  console.log('\n\x1b[33mStopping all dev processes...\x1b[0m');
  [backendProc, websiteProc, semsProc].forEach((proc) => {
    if (proc && !proc.killed) {
      if (isWin) spawn('taskkill', ['/pid', proc.pid, '/f', '/t']);
      else proc.kill('SIGINT');
    }
  });
  process.exit(0);
}

process.on('SIGINT', cleanExit);
process.on('SIGTERM', cleanExit);
