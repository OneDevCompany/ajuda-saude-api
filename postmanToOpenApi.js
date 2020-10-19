const postmanToOpenApi = require('postman-to-openapi')
const path = require('path')

const postmanCollection = path.resolve(__dirname, '../postman.collection.json')
const outputFile = path.resolve(__dirname, '../openapi.yml')

postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
  .then((result) => {
    console.log(`OpenAPI specs: ${result}`)
  })
  .catch((err) => {
    console.log(err)
  })
