const express = require('express')
const cors = require('cors')
const api = require('./api')
const responseHandler = require('./middleware/responseHandler')

const PORT = process.env.PORT || 3000

async function launch() {

    const app = express()

    app.use(cors({origin : true}))
    app.use(express.json())
    app.use(responseHandler)
    app.use('/api', api)

    app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
}

launch()