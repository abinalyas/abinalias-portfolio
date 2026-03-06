const GOOGLE_PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places:searchText';

type PlacesResult = {
  name?: string;
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  websiteUri?: string;
  nationalPhoneNumber?: string;
  googleMapsUri?: string;
};

export async function searchPhotographyCompanies(city: string, apiKey: string) {
  const response = await fetch(GOOGLE_PLACES_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask':
        'places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.websiteUri,places.nationalPhoneNumber,places.googleMapsUri'
    },
    body: JSON.stringify({
      textQuery: `wedding and event photography company in ${city}, Kerala`,
      maxResultCount: 20
    }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Google Places API failed with status ${response.status}`);
  }

  const payload = (await response.json()) as { places?: Array<{ displayName?: { text?: string } } & PlacesResult> };

  return (payload.places ?? []).map((place) => ({
    name: place.displayName?.text ?? place.name ?? '',
    address: place.formattedAddress ?? '',
    rating: place.rating ?? 0,
    reviewCount: place.userRatingCount ?? 0,
    website: place.websiteUri ?? '',
    phone: place.nationalPhoneNumber ?? '',
    mapsUrl: place.googleMapsUri ?? ''
  }));
}
