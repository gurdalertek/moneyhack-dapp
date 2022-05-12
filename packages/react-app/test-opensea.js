const sdk = require('api')('@opensea/v1.0#595ks1ol33d7wpk');

sdk['retrieving-collection-stats']({collection_slug: 'doodles-official'})
     .then(res => console.log(res))
     .catch(err => console.error(err));
