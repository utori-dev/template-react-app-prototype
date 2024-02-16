#!/usr/bin/env node

const Mustache = require('mustache');
const fs = require('fs/promises');
const path = require('path');
const {
  words,
  capitalize,
  kebabCase: toKebabCase,
  camelCase: toCamelCase,
} = require('lodash');

const ROOT = path.dirname(__dirname);
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

/**
 * - [ ] README generator
 * - [ ] Database file
 * - [ ] Manifest
 * - [ ] Index file
 * - [ ] License
 * - [ ] App name
 * - [ ] package.json -> Run npm i
 */

/**
 * @typedef {SetupOptions}
 * @property {string} title
 * @property {string} shortName
 * @property {string} description
 * @property {string} databaseName
 * @property {number} copyrightYear
 * @property {object} author
 * @property {string} author.name
 * @property {string} author.email
 * @property {string} author.url
 * @property {string} packageName
 * @property {string} themeColor
 * @property {string} githubUrl
 *
 * @type {SetupOptions}
 */
const DEFAULT_OPTIONS = {
  databaseName: 'utori-dev--react-app-prototype',
  title: 'React App Prototype',
  shortName: 'Prototype',
  description: 'Template for creating prototypes with React',
  copyrightYear: new Date().getFullYear(),
  author: {
    name: 'Michelle Miller',
    email: 'michelle@utori.dev',
    url: 'https://github.com/chellimiller',
  },
  packageName: '@utori-dev/template-react-app-prototype',
  themeColor: '#4898da',
  githubUrl: 'https://github.com/utori-dev/template-react-app-prototype',
};

/**
 * @typedef {FileConfiguration}
 * @property {string} path
 * @property {string | undefined} template Path to the template, should not be included with replace or removeKeys.
 * @property {Array<keyof SetupOptions> | undefined} replace Strings to replace, should not be used with template.
 * @property {Array<string>} removeKeys Keys to remove, only applies to JSON files
 *
 * @type {Record<string, FileConfiguration>}
 */
const locations = {
  readme: {
    path: path.join(ROOT, 'README.md'),
    template: path.join(__dirname, 'README.md.mustache'),
  },
  license: {
    path: path.join(ROOT, 'LICENSE'),
    template: path.join(__dirname, 'LICENSE.mustache'),
  },
  package: {
    path: path.join(ROOT, 'package.json'),
    replace: ['title', 'shortName', 'description', 'themeColor'],
    replace: ['title', 'shortName', 'description', 'themeColor'],
  },
  index: {
    path: path.join(PUBLIC, 'index.html'),
    replace: ['shortName', 'description', 'themeColor'],
  },
  manifest: {
    path: path.join(PUBLIC, 'manifest.json'),
    replace: ['title', 'shortName', 'description', 'themeColor'],
  },
  appRoot: {
    path: path.join(SRC, 'App.tsx'),
    replace: ['description', 'githubUrl', 'author'],
    removeKeys: ['maintainers'],
  },
  database: {
    path: path.join(SRC, 'state', 'database', '_dexie.ts'),
    replace: ['databaseName'],
  },
};

/**
 * Converts a string value to PascalCase.
 *
 * @param {string} value
 * @returns {string}
 */
function toPascalCase(value) {
  return words(value).map(capitalize).join('');
}

/**
 * Converts a string value to PascalCase and appends `*View` if it's not already appended.
 *
 * @param {string} value
 * @returns {string}
 */
function toViewName(value) {
  const pascalCase = toPascalCase(value);
  return pascalCase.endsWith('View') | pascalCase.endsWith('Dialog')
    ? pascalCase
    : `${pascalCase}View`;
}

/**
 * Converts a string value to PascalCase and appends `*Icon` if it's not already appended.
 *
 * @param {string} value
 * @returns {string}
 */
function toIconName(value) {
  const pascalCase = toPascalCase(value);
  return pascalCase.endsWith('Icon') ? pascalCase : `${pascalCase}Icon`;
}

/**
 * Generates an index file for the specified directory.
 *
 * @param {string} directory
 * @param {object} options
 * @param {boolean} options.defaultExportOnly
 * @returns {Promise<void>}
 */
async function generateIndexFile(directory, options = {}) {
  const { defaultExportOnly = false } = options;

  const items = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const filteredItems = items.filter((item) => {
    if (item.name.startsWith('index.ts')) return false;
    if (item.name.includes('.test.')) return false;
    if (item.name.startsWith('_')) return false;
    return true;
  });

  const exports = await Promise.all(
    filteredItems.map((item) => {
      const exportName = path.parse(item.name).name;
      const defaultExport = `export { default as ${exportName} } from './${exportName}';`;

      if (defaultExportOnly) return defaultExport;
      return [`export * from './${exportName}';`, defaultExport].join('\n');
    })
  );

  const content = ['// AUTO-GENERATED, DO NOT EDIT', '', ...exports, ''].join(
    '\n'
  );

  return fs.writeFile(path.join(directory, 'index.ts'), content, {
    encoding: 'utf-8',
  });
}

/**
 * Loads the specified template.
 * Ignores sub-directories within the template.
 *
 * @param {string} name
 * @returns {Promise<{ name: string, content: string }[]>}
 */
async function loadTemplates(name) {
  const directory = path.join(__dirname, name);
  const files = (
    await fs.readdir(directory, {
      withFileTypes: true,
    })
  ).filter((item) => item.isFile());

  const templates = await Promise.all(
    files.map((file) =>
      fs
        .readFile(path.join(directory, file.name), { encoding: 'utf-8' })
        .then((content) => ({ name: file.name, content }))
    )
  );

  return templates;
}

require('yargs')
  .scriptName('generate')
  .usage('$0 <cmd> [args]')
  .command('setup', 'Runs setup script for the tool', {
    builder: (yargs) => {
      yargs.option('name', {
        describe: 'The name of the new project.',
        type: 'string',
        require: true,
      });
      yargs.option('description', {
        describe: 'Description of the new project.',
        type: 'string',
        require: true,
        default: '@todo Add description',
      });
      yargs.option('short-name', {
        describe: 'The short name of the new project. Used in the manifest.',
        type: 'string',
        default: '@todo Add short name',
      });
      yargs.option('package', {
        describe:
          'The name of the package. Include @organization prefix if applicable.',
        type: 'string',
        require: true,
      });
      yargs.option('repository', {
        describe: 'URL for the repository.',
        alias: 'r',
        type: 'string',
        require: true,
      });
      yargs.option('database', {
        describe: 'Name for the Dexie database',
        alias: 'db',
        type: 'string',
        require: false,
      });
    },
    handler: async (args) => {
      const { name: namePascalCase, description } = args;
      const nameKebabCase = kebabCase(namePascalCase);

      const name = {
        pascalCase: namePascalCase,
        kebabCase: nameKebabCase,
      };

      const templates = await loadTemplates('Component');

      const directory = path.join(ROOT, 'src', 'ui', 'components');
      const componentPath = path.join(directory, namePascalCase);

      await fs.mkdir(componentPath, { recursive: true });

      await Promise.all(
        templates.map((template) =>
          fs.writeFile(
            path.join(
              componentPath,
              template.name
                .replace('Component', namePascalCase)
                .replace(/\.mustache$/, '')
            ),
            Mustache.render(template.content, { name, description })
          )
        )
      );

      await generateIndexFile(directory);

      console.log(`Successfully created ${namePascalCase}`);
    },
  })
  .demandCommand(1, 'No command was specified')
  .strictCommands()
  .help()
  .alias('h', 'help')
  .alias('v', 'version').argv;
