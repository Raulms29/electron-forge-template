### Warning 🚧🚧
You will need [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) to be able to work with and run this project.
## What are we using?
This project is just a template. It's almost empty and contains the minimum amount of dependencies to work with the following technologies.
- [Vue.js](https://vuejs.org/)
- [Cypress](https://www.cypress.io/)
- [Electron Forge](https://www.electronforge.io/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en) with Node Package Manager ([npm](https://www.npmjs.com/))
## Project Setup 🛠️
Clone this repo.
```
git clone https://github.com/Raulms29/TFGTemplate.git
```
Then access the created folder and run the following command:
```
npm run build
```
This will download the necessary dependencies, compile the project and create the resources needed for the installer in the `out` folder. The installer will be located at `out/make`.
Once the build is done, to test the project without an installation use:
```
npm start
```
Try the component testing with:
```
npm run test
```
Or try the e2e testing with:
```
npm run cypress
```
Or with:
```
npm run test_e2e
```

Based on another template by [AngusLin10](https://github.com/AngusLin10), which can be found [here](https://github.com/AngusLin10/electron-forge-vite-ts-vue/)