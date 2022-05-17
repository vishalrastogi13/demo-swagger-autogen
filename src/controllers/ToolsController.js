
module.exports = {

	async show(req, res) {
		//if no swagger tags are provided, swagger tag it by the 'default' itself
		res.setHeader('Content-Type', 'application/json')
		return res.status(200).send(true)
	},

	async delete(req, res) {
		return res.status(204).send("delete")
	}
}