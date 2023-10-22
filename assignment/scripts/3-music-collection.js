console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection=[];

function addToCollection(collection, title, artist, yearPublished) {
  const recordObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(recordObject)
  return recordObject;
}

console.log(addToCollection(myCollection, '1000 shades of gray', 'John Smith', 1996))
console.log(addToCollection(myCollection, 'Most Boring Song', 'John Smith', 2000))
console.log(addToCollection(myCollection, 'The Source of Unlimited Energy', 'Future Jim', 2031))
console.log(addToCollection(myCollection, 'Wait These Aren\'t Books?', 'Confused Luke', 2023))
console.log(addToCollection(myCollection, 'Piano Sonata No. 14', 'Ludwig Von Beethoven', 1801))
console.log(addToCollection(myCollection, 'Until It Sleeps', 'Metallica', 1996))
console.log(myCollection)

function showCollection(collection) {
  for(let i=0; i <= collection.length-1; i++) {
    console.log(collection[i].title + ' by ' + collection[i].artist + ', published in ' + collection[i].yearPublished)
  }
}

showCollection(myCollection)

function findByArtist(collection, artist) {
  allArtists = [];
  for(let i=0; i <= collection.length-1; i++) {
    if (collection[i].artist === artist) {
      allArtists.push(collection[i]);
    }
  }
  return allArtists
}

console.log(findByArtist(myCollection, 'Metallica'))


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
