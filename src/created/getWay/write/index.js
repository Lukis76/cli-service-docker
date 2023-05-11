import fnMicroService from './writeFunctionServices.js'
import serverGetWay from './writeIndexserver.js'
import packageJson from './writePackageJson.js'
import dockerFile from './writeDockerFile.js'
import dockerIgnore from '../../writeDockerIgnore.js'

export default  {
  fnMicroService,
  serverGetWay,
  packageJson,
  dockerFile,
  dockerIgnore,
}
