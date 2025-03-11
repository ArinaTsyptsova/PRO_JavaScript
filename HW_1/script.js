const musicCollection = [
    {
    title: "Back in Black",
    artist: "AC/DC",
    year: "1980",
    },
    {
    title: "Def Leppard",
    artist: "Hysteria",
    year: "1987",
    },
    {
    title: "Hybrid Theory",
    artist: "Linkin Park",
    year: "2000",
    },
    {
    title: "Greatest Hits",
    artist: "Queen",
    year: "1981",
    },
];

musicCollection[Symbol.iterator] = function () {
    let index = 0;
    return {
        next: () => {
            if (index < musicCollection.length) {
                return { value: musicCollection[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
};

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}