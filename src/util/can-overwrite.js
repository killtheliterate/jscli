import {access, F_OK} from 'fs'
import inquirer from 'inquirer'

const questionOverwrite = [{
    type: 'confirm',
    name: 'overwrite',
    message: 'This directory already exists. Overwrite it?'
}]

export default (out) => new Promise(resolve => access(out, F_OK, e => {
    if (!e) {
        inquirer.prompt(questionOverwrite, answers => {
            if (!answers.overwrite) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    } else {
        resolve(true)
    }
}))
