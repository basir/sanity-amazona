import ImageUrlBuilder from '@sanity/image-url';
import client from './client';

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(300).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(580).url();
}

export { urlFor, urlForThumbnail };
