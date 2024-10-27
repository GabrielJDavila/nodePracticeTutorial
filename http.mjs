import http from 'node:http'

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.end("Welcome to our home page!")
        return
    }
    if(request.url === '/about') {
        response.end('here is the about page')
        return
    }
    response.end(`
        <h1>Oops!</h1>
        <p>Page does not exist.</p>
        <a href="/">Back to home</a>
    `)
    return
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/')
})