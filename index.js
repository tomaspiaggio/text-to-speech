const express = require('express')
const app = express()
const fs = require('fs')

app.listen(process.env.PORT || 3000)
makeAssetsPublic()

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

function makeAssetsPublic() {
	fs.readdir(__dirname + '/public/lib', (err, items) => {
		if(!items) return;
		items.forEach(e => {
			app.get('/' + e, (req, res) => {
				res.sendFile(__dirname + '/public/lib/' + e)
			})
		})
	})
}
