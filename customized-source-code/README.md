# Road2Crypto API Documentation Repository

Welcome to the Road2Crypto API Documentation repository! This repository contains the code for the UI of our API documentation, which is hosted at [https://api-docs-iel.pages.dev/](https://api-docs-iel.pages.dev/). To contribute to the documentation, follow the steps below:

# 🎨 How to work on UI?

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Local Server

```bash
npm run dev
```

View the output at [http://localhost:3200/](http://localhost:3200/)

### 3. Update the UI

On Root except `dist` folder, everything is UI code, mostly if we need to update the UI, code is inside `src` folder, open it, update the part you want to update.

### 4. See `dist` Result Locally

Once your updates are done, build the project to see the changes locally:

```bash
npm run build
```

Visit the `dist` folder, open `index.html` in your browser, and preview the updated output.

### 5. Commit and Create a Pull Request

Finally, commit your changes, the CICD will automatically host the updated `dist` on [https://api-docs-iel.pages.dev/](https://api-docs-iel.pages.dev/).

# 📖 How to update Docs?

### 1. Install Dependencies

```bash
npm install
```

### 2. Copy YAML File

Navigate to the `/dist/api-docs` folder, where YAML files for each origin/server are located. Open the specific file you need to work on, and copy the YAML code.

### 3. Use Swagger Online Editor

Visit [Swagger Online Editor](https://editor-next.swagger.io/). Paste the copied YAML code into the left section of the editor. The right section will display the UI corresponding to the code.

### 4. Update YAML Code

Make necessary changes in the Swagger Online Editor. Once done, copy the modified YAML code from the editor.

### 5. Paste the Updated Code

Return to the original file in the `/dist/api-docs` folder. Replace the old YAML code with the newly updated code.

### 6. Build

Open the terminal at the root of the repository and run:

```bash
npm run build
```

This command will refresh the UI changes if any and convert the YAML to JSON, which is required for Swagger UI. This step ensures that the documentation is updated.

### 7. Commit and Create a Pull Request

Finally, commit your changes and create a pull request to contribute your updates to the repository.

# 🔗 Important Links

- [Swagger Online Editor](https://editor.swagger.io/) - Use this online editor to visualize and edit the API documentation.
- [YAML Guide Docs](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md) - Use this docs to understand how to write YAML, you can also check `/output/sample.json` for reference (also can type on UI's search bar and see Sample output).

Feel free to reach out if you have any questions or need further assistance! Happy coding!
