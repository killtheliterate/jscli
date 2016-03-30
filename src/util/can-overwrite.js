import {access, F_OK} from 'fs'
import {resolve} from 'path'
import inquirer from 'inquirer'

const questionOverwrite = dir => [{
    type: 'confirm',
    name: 'overwrite',
    default: false,
    message: `${resolve(dir)} already exists. Overwrite it?`
}]

export default (out) => new Promise(resolve => access(out, F_OK, e => {
    if (!e) {
        inquirer.prompt(questionOverwrite(out), answers => {
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
