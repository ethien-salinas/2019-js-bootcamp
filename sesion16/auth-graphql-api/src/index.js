import bcrypt from 'bcrypt'
import logger from './logger'

const saltRounds = 9
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const hash = '$2b$09$sAYBi0zu3E1f9xcKc1XT6uDIUmO.W.UL8nFzlHldIvK7cmuFyAC2q'

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    if(err) logger.error(err)
    logger.debug(`hash: ${hash}`)
});

bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
    if (err) logger.error(err)
    logger.debug(`result: ${result}`)
})