import {spawn} from 'child_process'

export default (...args) => new Promise((resolve, reject) => {
    const proc = spawn(...args)

    proc.on('close', code => {
        if (code < 1) resolve()
        else reject()
    })
})
