import { addAlias } from 'module-alias'
import { resolve } from 'path'

addAlias('@', resolve('dist')) // --> transforma o @ pra dist, util para funcionar o import @/, para ficar mais visível
