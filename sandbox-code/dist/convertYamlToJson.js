const fs = require('fs');
const yaml = require('js-yaml');

console.log('Running conversion script...');

// Load YAML file
const yamlFilePath = './api-docs/docs.yaml';
const yamlData = fs.readFileSync(yamlFilePath, 'utf8');

// Parse YAML to JSON
const jsonData = yaml.load(yamlData);

// Write JSON to a new file
const jsonFilePath = './output/docs.json';
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

console.log(`Conversion complete. JSON file saved at ${jsonFilePath}`);
