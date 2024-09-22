import { Artist } from '../models/artist.js';

const getArtistIds = async (req, res) => {
	const { eventId } = req.params;

	const artists = await Artist.createQueryBuilder('artist')
		.innerJoin('artist.events', 'event')
		.where('event.id = :eventId', { eventId })
		.select(['artist.id'])
		.cache(true)
		.getMany();

	const artistIds = artists.map((artist) => artist.id);

	return res.ok(artistIds);
};

export { getArtistIds };
