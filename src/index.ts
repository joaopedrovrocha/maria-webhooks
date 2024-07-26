import 'dotenv'
import { configs } from './configs';

import app from './server'

app.listen(configs.port, () => {
  console.log(`server running on port ${configs.port}`)
})
