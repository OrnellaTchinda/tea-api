const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())
const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeined': true,
        'flavor': 'delicious',

    },

    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffeined': false,
        'flavor': 'unknown',

    },

    'matcha': {
        'type': 'green',
        'origin': 'Yo mommas House',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffeined': false,
        'flavor': 'delicious',

    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    console.log(teaName)
    if (tea[teaName]) {
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}, Better go catch it!`)
})