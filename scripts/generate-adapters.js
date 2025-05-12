const manifest = require('./custom-elements.json');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Загрузка шаблонов
const reactTemplate = Handlebars.compile(fs.readFileSync('./templates/react.hbs', 'utf8'));
const angularTemplate = Handlebars.compile(fs.readFileSync('./templates/angular.hbs', 'utf8'));

// Создаём директории, если они не существуют
const reactDir = './src/react';
const angularDir = './src/angular';

[reactDir, angularDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

manifest.modules.forEach(module => {
  module.declarations?.forEach(decl => {
    if (decl.customElement) {
      const componentName = decl.name.replace(/-(\w)/g, (_, c) => c.toUpperCase());
      
      // Генерация React-адаптера
      const reactFilePath = path.join(reactDir, `${componentName}.tsx`);
      fs.writeFileSync(
        reactFilePath, 
        reactTemplate({
          componentName,
          tagName: decl.tagName,
          attributes: decl.attributes?.map(attr => ({
            name: attr.name,
            type: attr.type?.text || 'unknown'
          }))
        })
      );
      console.log(`Generated React component: ${reactFilePath}`);

      // Генерация Angular-директивы
      const angularFilePath = path.join(angularDir, `${componentName}.directive.ts`);
      fs.writeFileSync(
        angularFilePath, 
        angularTemplate({
          componentName,
          tagName: decl.tagName,
          attributes: decl.attributes?.map(attr => ({
            name: attr.name,
            type: attr.type?.text || 'unknown'
          }))
        })
      );
      console.log(`Generated Angular directive: ${angularFilePath}`);
    }
  });
});

console.log('Adapters generation completed!');