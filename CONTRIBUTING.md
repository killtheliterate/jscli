# Contributing to `jscli`
> Thank you for your time and consideration!

Just a few things to note before being a true homie and contributing.
:sunglasses:

## Please ask first!

[open a ticket][new-issue] with your idea so we can avoid 
the awkward scenario where you spend time making a really cool 
PR that is not the right fit for the `jscli` project!

## Stick to the mission :cool:

`jscli` would like to avoid hundreds of commands/scaffolds that solve 
specific opinions. Stay lean. Stay simple. Try and stick to vanilla JS
any dependencies should primarily assist in writing the best ES Next code
that is currently possible. No proprietary syntax. This is a *JavaScript* tool

## Ask questions :question:

If you are uncertain about something such as tests or opinions
[please ask][new-issue]! Contributions make me :smile: so I'm
happy to help make them happen when I can!

# Scaffolds

`jscli` aims to provide _extremely minimal_ scaffolds for common
high level JavaScript project types. The primary goal is to make
it *dead simple* to start building an application, module, etc.

Opinions made in scaffolds should reflect more or less the de facto
community opinions and should be abstracted into `npm run` commands
so that there exists a relatively standard API for all scaffolds.

For an example of a scaffold take a look at the [`web-app`][web-app]

In general `jscli` takes a folder of lodash templates and writes
them to the specified folder replacing the variables with values
found in `package.json`. Providing a `pacakge.json` in this folder
will enable default values to be set.

Your scaffold should strive to use only the values that are typically
in `package.json`. Don't make your users answer too many questions. 
:smile:

# Commands

If you have an idea for a really cool and useful new command or flag
for `jscli` [open a ticket][new-issue] about it and we can strategize.
:punch:

# Git stuff

Create a branch call it something appropriate and open your PRs
against master. Ex. feature/electron-scaffold, fix/console-bug

You will likely be asked to squash your work before merging.

Releases will be tagged and can be found [here][releases] and on
[npm][npm].

[web-app]: ./scaffolds/web-app
[new-issue]: https://github.com/LegitTalon/jscli/issues/new
[releases]: https://github.com/LegitTalon/jscli/releases
[npm]: https://www.npmjs.com/package/jscli
