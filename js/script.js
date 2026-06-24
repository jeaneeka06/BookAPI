// =========================
//  BOOK DATA (My 10 Books)
// =========================
// This array stores all book information used by the app.
// Each book includes title, author, category, year, description, and image URL.
const books = [
    {
        title: "Monday's Not Coming",
        author: "Tiffany D. Jackson",
        category: "Mystery",
        year: 2018,
        description: "A gripping mystery about a missing girl and the best friend who refuses to stop searching for her.",
        image: "https://media.s-bol.com/J6DV3WMx5oPo/550x827.jpg"
    },
    {
        title: "Sharp Objects",
        author: "Gillian Flynn",
        category: "Psychological Thriller",
        year: 2006,
        description: "A troubled journalist returns to her hometown to investigate a series of murders while confronting her own dark past.",
        image: "https://cdn.kobo.com/book-images/ec5d210d-6b01-4cf6-85b1-1d7f3c4a8198/1200/1200/False/sharp-objects-1.jpg"
    },
    {
        title: "The Book Proposal",
        author: "K.J. Micciche",
        category: "Romance",
        year: 2023,
        description: "A charming, emotional romance about a struggling writer who finds unexpected inspiration and love.",
        image: "https://tse1.mm.bing.net/th/id/OIP.oZKuFLLCwj8O5gjz4xNjzQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        category: "Fantasy",
        year: 2015,
        description: "A mortal huntress is taken to the faerie lands after killing a wolf, discovering magic, danger, and forbidden love.",
        image: "https://cdn.kobo.com/book-images/6a8ddd70-7275-4ddc-971c-eb5c4b7ea2eb/1200/1200/False/a-court-of-thorns-and-roses-1.jpg"
    },
    {
        title: "The Housemaid",
        author: "Freida McFadden",
        category: "Thriller",
        year: 2022,
        description: "A woman takes a job as a housemaid for a wealthy family, only to uncover chilling secrets behind their perfect facade.",
        image: "https://politicalscienceblog.com/wp-content/uploads/2023/05/The-Housemaid-819x1024.jpg"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        category: "Psychological Thriller",
        year: 2019,
        description: "A woman stops speaking after a shocking crime, and a psychotherapist becomes obsessed with uncovering the truth.",
        image: "https://tse2.mm.bing.net/th/id/OIP.uUMCez97vxzU06pdu97EXQHaLW?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "A Court of Mist and Fury",
        author: "Sarah J. Maas",
        category: "Fantasy",
        year: 2016,
        description: "Feyre navigates new alliances, deeper magic, and emotional healing in this powerful continuation of the ACOTAR series.",
        image: "https://th.bing.com/th/id/OIP.16ar4LJ-F9wrHvrKlGaUCgHaLH?w=184&h=276&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        title: "Pretend You're Mine",
        author: "Lucy Score",
        category: "Romance",
        year: 2015,
        description: "A small-town romance about healing, belonging, and two people who find love when they least expect it.",
        image: "https://th.bing.com/th/id/OIP.ZrgV0CmfVRrprt38QQlnxgHaLt?w=115&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        title: "It Ends With Us",
        author: "Colleen Hoover",
        category: "Romance",
        year: 2016,
        description: "A deeply emotional story about love, resilience, and breaking cycles that hold us back.",
        image: "https://th.bing.com/th/id/OIP.AoWrnkv0Rfp4cgZUYDGd0AHaLK?w=184&h=277&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        title: "Twisted Love",
        author: "Ana Huang",
        category: "Romance",
        year: 2021,
        description: "A dark, addictive romance about a cold, guarded man and the sunshine girl who melts his walls.",
        image: "https://th.bing.com/th/id/OIP.P_XliMcnRao-qZSzlS65CAAAAA?w=133&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    }
];

// =========================
//  DISPLAY BOOK CARDS
// =========================
// This function creates book cards dynamically and inserts them into the page.
function displayBooks(bookArray) {
    const list = document.getElementById("bookList");
    list.innerHTML = "";

    bookArray.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        // Template literal for card layout
        card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
    `;
        // Clicking a card shows the book details
        card.addEventListener("click", () => showDetails(book));

        list.appendChild(card);
    });
}
// Initial render of all books
displayBooks(books);

//  SEARCH FUNCTIONALITY
// Filters books based on text typed into the search bar. 
document.getElementById("searchInput").addEventListener("input", e => {
    const text = e.target.value.toLowerCase();

    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(text)
    );

    displayBooks(filtered);
});

//  CATEGORY FILTER
// Filters books based on the selected category. 
document.getElementById("categoryFilter").addEventListener("change", e => {
    const category = e.target.value;

    if (category === "all") {
        displayBooks(books);
    } else {
        const filtered = books.filter(book => book.category === category);
        displayBooks(filtered);
    }
});

//  SHOW BOOK DETAILS
// Displays full book information in the details section. 
function showDetails(book) {
    const details = document.getElementById("bookDetails");

    details.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h2>${book.title}</h2>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Category:</strong> ${book.category}</p>
    <p><strong>Year:</strong> ${book.year}</p>
    <p>${book.description}</p>

    <button id="closeDetails" style="
      margin-top: 20px;
      padding: 10px 15px;
      border: none;
      background: #ff8fb1;
      color: white;
      border-radius: 6px;
      cursor: pointer;
    ">Close</button>
  `;

    details.classList.remove("hidden");


    document.getElementById("closeDetails").addEventListener("click", () => {
        details.classList.add("hidden");
    });
} 