const library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Steve Jobs",
      author: "Walter Isaacson",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  console.log(library);

  library.forEach((book) => book.status.read = true);

console.log(library);
const { title: firstBook } = library[0];
console.log(firstBook);
const libraryJSON = JSON.stringify(library, null, 2);
console.log(libraryJSON);
