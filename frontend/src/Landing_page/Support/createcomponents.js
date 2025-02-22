const fs = require("fs");
const path = require("path");

// Command se multiple component names le rahe hain
const componentNames = process.argv.slice(2);

if (componentNames.length === 0) {
  console.log("❌ Usage: node createComponent.js Component1 Component2 Component3 ...");
  process.exit(1);
}

// ✅ Loop through all component names and create files
componentNames.forEach((componentName) => {
  const componentPath = path.join(process.cwd(), `${componentName}.js`);

  if (!fs.existsSync(componentPath)) {
    fs.writeFileSync(
      componentPath,
      `import React from 'react';\n\nconst ${componentName} = () => {\n  return (\n    <div>\n      <h1>${componentName}</h1>\n    </div>\n  );\n};\n\nexport default ${componentName};`
    );

    console.log(`✅ Component "${componentName}.jsx" created in "${process.cwd()}"`);
  } else {
    console.log(`⚠️ Component "${componentName}.jsx" already exists!`);
  }
});
