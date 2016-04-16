# `jscli`
> A CLI for javascript

`jscli` is a command-line tool that helps bootstrap JavaScript projects
quickly. Essentially, you tell `jscli` what you want to build, and it spits
out a bunch of boilerplate code and configuration that you probably don't want
to write.

# Installation
> You need [node](https://nodejs.org/en/) to install `jscli`.

```sh
npm install --global jscli
```

# Usage

```
Usage: jscli <command>

Commands:
  init  Initialize a new JavaScript project
  ls    List scaffolds

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
```

## Scaffolds

`jscli` generates projects from scaffolds. For example, if you want a webapp,
you'd run `js init web-app aVerySpecialWebAppIndeed`.

```sh
js init <scaffold> <dirname>
```
