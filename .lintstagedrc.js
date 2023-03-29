export default {
  '*.{ts,tsx}': ['yarn lint:fix', () => 'tsc -p tsconfig.json --noEmit'],
  '*.{ts,tsx,html,css}': 'yarn format',
};
