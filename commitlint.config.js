// npm install --save-dev @commitlint/{config-conventional,cli}
// npx husky install
// npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'

// npm uninstall husky

module.exports = { extends: ['@commitlint/config-conventional'] };
