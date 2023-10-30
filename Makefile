install:
		npm ci

publish:
		npm publish --dry-run

lint:
		npx eslint .

test:
		npx jest

test-coverage:
		npx jest --coverage

gendiff:
		bin/gendiff.js