# Alumnica VLE front end with Foundation ZURB Template

This is the front end static dev for the Alumnica VLE Project. It includes the follwwiung

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)


### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://gitlab.com/code-ing/ti/fundacion-manuel-moreno/alumnica/studio_front_end.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd Alumnica
npm install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.
