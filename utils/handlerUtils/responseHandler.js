class ResponseHandler {
    async handleJSONResponse(req, res) {
        try {
            if (req.error) {
                res.status(500).json(err);
                return;
            } else if (!req.promise) {
                let error = new Error('Missing "req.promise"');
                res.status(500).json(err);
                return;
            }

            let result = await req.promise;
            res.status(200).json(result);;
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = new ResponseHandler();
