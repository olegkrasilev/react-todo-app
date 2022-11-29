/* eslint-disable max-len */
// eslint-disable-next-line import/no-default-export
export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name:',
      },
      {
        type: 'list',
        name: 'folder',
        message: 'What is the component type?',
        default: 'ui',
        choices: [
          {
            value: 'shared/ui',
            name: 'Shared UI component',
          },
          {
            value: 'pages',
            name: 'Page lazy component',
          },
          {
            value: 'widgets',
            name: 'Widget component',
          },
        ],
      },
    ],
    actions: ({ folder }) => {
      switch (folder) {
        case 'pages': {
          const templateFolder = 'lazy';
          return [
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.module.scss',
              templateFile: `config/plop/templates/default/Component.module.scss.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.stories.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.stories.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.test.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.test.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/index.ts',
              templateFile: `config/plop/templates/${templateFolder}/index.ts.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.async.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.async.tsx.hbs`,
            },
          ];
        }

        default: {
          const templateFolder = 'default';
          return [
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.module.scss',
              templateFile: `config/plop/templates/default/Component.module.scss.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.stories.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.stories.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/ui/{{pascalCase name}}.test.tsx',
              templateFile: `config/plop/templates/${templateFolder}/Component.test.tsx.hbs`,
            },
            {
              type: 'add',
              path: 'src/{{folder}}/{{pascalCase name}}/index.ts',
              templateFile: `config/plop/templates/${templateFolder}/index.ts.hbs`,
            },
          ];
        }
      }
    },
  });
};
