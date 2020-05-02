const server = require('./api/server.js');

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

const PORT = process.env.PORT || 3300;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
