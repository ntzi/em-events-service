const getArtistIds = async (req, res) => {
	const { eventId } = req.params;

	const resData = [{ id: '1' }, { id: '2' }];

	return res.ok(resData);
};

export { getArtistIds };
