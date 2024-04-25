import esbuild from 'esbuild';

// esbuild  src/app/server/node.server.ts --format=esm --outfile=dist/server.js --bundle --minify
const isDev = process.argv[2] === '--watch';
const args = {
  // https://esbuild.github.io/getting-started/#bundling-for-node
  platform: 'node',
  packages: 'external',

  entryPoints: ['./src/app/server/node.server.ts'],
  format: 'esm',
  outfile: './dist/server.js',
  minify: !isDev,
  logLevel: 'info',
  bundle: true,
};

export const ctx = await esbuild.context({ ...args });

/**
 * Helper flag to toggle between dev or build mode.
 */
if (isDev) {
  await ctx.watch();
} else {
  await esbuild.build({ ...args }).catch(() => process.exit(1));
  esbuild.stop();
}
