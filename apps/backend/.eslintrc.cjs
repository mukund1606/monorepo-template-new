/** @type {import("eslint").Linter.Config} */
const config = {
	root: true,
	extends: ['custom'],
	parserOptions: {
		project: true,
	},
};
module.exports = config;
