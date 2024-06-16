# GenDiff cli-app

### The purpose of GenDiff CLI-application:

- to compare two files and display difference as a formatted string in one of three formats.
  This app **supports** formats _JSON_, _YAML / YML_ and **provides** output formats: _stylish, plain_ and _json_.

---

### Hexlet tests, Code Climate Badges:

[![Actions Status](https://github.com/ZarinaRevazova/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ZarinaRevazova/fullstack-javascript-project-46/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/7233efbed0932e803116/maintainability)](https://codeclimate.com/github/ZarinaRevazova/fullstack-javascript-project-46/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7233efbed0932e803116/test_coverage)](https://codeclimate.com/github/ZarinaRevazova/fullstack-javascript-project-46/test_coverage)

---

<div>
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/githubactions/githubactions-original.svg" title="GitHubActions" alt="GitHubActions" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg" title="Jest" alt="Jest" width="40" height="40"/>&nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="EsLint" alt="EsLint" width="40" height="40"/>&nbsp;
</div>

---

### Minimum system requirements

- Node.js 18.0.0 or higher. Check version (in your terminal): `node -v`

### Installation

:exclamation: After installation: commands must be run from the app-directory!

- Clone this repository: `git clone`
- Run command in the terminal: `make install`, than `make lint`

Now you can use this app as a script in your terminal or as a package-library for your own project.

### Usage:

#### CLI

Enter into your terminal `gendiff -h` and you can see this:

```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
-V, --version output the version number
-f, --format [type] output format (default: "stylish")
-h, --help display help for command
```

- **Command-pattern for running the application (use in in your terminal, remember that commands must be run from the app-directory)**

`gendiff --format <format> __fixtures__/<filename1> __fixtures__/<filename2>`

`<format>` options:

- stylish (considering that it is default format, you can skip this part of pattern `<... --format <format> ...>`)
- plain
- json

`<filename1>` and `<filename2>` are the paths to your files from directory **fixtures**

---

### TEST-running:

- Run command `make test` to view test-report
- Run command `make test-coverage` to view test-coverage report
- As well you can use `make lint` command for cheking code-quality (syntax errors, formatting issues, code style violations, potential bugs)

---

### Asciinema - EXAMPLES

:movie_camera: Comparison of two flat JSON_files

[![asciicast](https://asciinema.org/a/gh3JRkFD1I4AAyc7KEudRQhsk.svg)](https://asciinema.org/a/gh3JRkFD1I4AAyc7KEudRQhsk)

---

:movie*camera: Comparison of two flat YAML_files + \_make test*

[![asciicast](https://asciinema.org/a/pHLD5M17TtxPfSZ6RsSDeVJuQ.svg)](https://asciinema.org/a/pHLD5M17TtxPfSZ6RsSDeVJuQ)

---

:movie*camera: STYLISH formatter_Comparison of two tree-structure JSON_files and YAML_files + \_make test*

[![asciicast](https://asciinema.org/a/jr3kjhRQJjJ6KJ2qDzS2ftTiN.svg)](https://asciinema.org/a/jr3kjhRQJjJ6KJ2qDzS2ftTiN)

---

:movie*camera: PLAIN formatter_Comparison of two tree-structure JSON_files and YAML_files + \_make test*
[![asciicast](https://asciinema.org/a/ENkcl5J9PRH3hmPtS8JAB6J3O.svg)](https://asciinema.org/a/ENkcl5J9PRH3hmPtS8JAB6J3O)

---

:movie*camera: JSON formatter_Comparison of two tree-structure JSON_files and YAML_files + \_make test*
[![asciicast](https://asciinema.org/a/w3Ns3BpebUeSXS7P3QxfOiiGp.svg)](https://asciinema.org/a/w3Ns3BpebUeSXS7P3QxfOiiGp)
