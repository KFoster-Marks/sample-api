const sendSuccess = (successResponse, res) => {
    res.status(200).json(successResponse);
}

const sendError = (err, res) => {
    res.status(500).json(err);
}

const handleResponse = async (req, res) => {
    try {
        if (req.error) {
            sendError(req.error, res);
            return;
        } else if (!req.promise) {
            let error = new Error('Missing "req.promise"');
            sendError(error, res);
            return;
        }

        let result = await req.promise;
        sendSuccess(result, res);
    } catch (err) {
        console.log(err);
        sendError(err, res);
    }
}

module.exports = { handleResponse };
