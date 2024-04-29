const movies = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    genre: "Drama",
    release_date: "1994",
    rating: "9.3",
    cast: ["Tim Robbins", "Morgan Freeman"],
    description:
      "A banker is sentenced to life in Shawshank prison for the murder of his wife, despite his claims of innocence. He befriends a fellow inmate and they work together to find redemption.",
    runtime: "142 min",
    image_source:
      "https://xl.movieposterdb.com/09_02/1994/111161/xl_111161_cd0fdb0e.jpg?v=2024-02-22%2020:32:11",
  },
  {
    id: 2,
    name: "The Godfather",
    genre: "Crime Drama",
    release_date: "1972",
    rating: "9.2",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    description:
      "The story of the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son, Michael, from reluctant family outsider to ruthless mafia boss.",
    runtime: "175 min",
    image_source:
      "https://xl.movieposterdb.com/22_07/1972/68646/xl_68646_8c811dec.jpg?v=2024-04-15%2018:48:24",
    link: "https://youtu.be/UaVTIH8mujA?si=tL66ijkWeOTcMB4K",
  },
  {
    id: 3,
    name: "The Dark Knight",
    genre: "Action, Crime, Thriller",
    release_date: "2008",
    rating: "9.0",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description:
      "When the menacing Joker emerges from criminal shadows and targets Batman in Gotham, chaos erupts. Batman must confront everything he holds dear to ultimately save the city.",
    runtime: "152 min",
    image_source:
      "https://xl.movieposterdb.com/08_05/2008/468569/xl_468569_7b2e4300.jpg",
  },
  {
    id: 4,
    name: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy, Adventure",
    release_date: "2003",
    rating: "8.9",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    description:
      "Gandalf and Aragorn lead the Fellowship of the Ring in a desperate quest to destroy the One Ring and defeat the Dark Lord Sauron.",
    runtime: "201 min",
    image_source:
      "https://xl.movieposterdb.com/04_12/2003/0167260/xl_183_0167260_6815154e.jpg?v=2023-12-03%2009:35:46",
  },
  {
    id: 5,
    name: "Pulp Fiction",
    genre: "Crime, Comedy",
    release_date: "1994",
    rating: "8.9",
    cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"],
    description:
      "When a briefcase containing mysterious contents is stolen from two low-level mobsters, the underworld is turned upside down.",
    runtime: "154 min",
    image_source:
      "https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-04-20%2015:53:52",
  },
  {
    id: 6,
    name: "Schindler's List",
    genre: "Historical Drama",
    release_date: "1993",
    rating: "8.9",
    cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    description:
      "The true story of Oskar Schindler, a German businessman who saved the lives of over a thousand Jews during the Holocaust.",
    runtime: "195 min",
    image_source:
      "https://xl.movieposterdb.com/08_02/1993/108052/xl_108052_6ad6d11e.jpg?v=2024-03-23%2004:56:34",
  },
  {
    id: 7,
    name: "12 Angry Men",
    genre: "Drama",
    release_date: "1957",
    rating: "8.9",
    cast: ["Henry Fonda", "Martin Balsam", "John Fiedler"],
    description:
      "A jury deliberates the fate of a young man accused of murdering his father in this classic courtroom drama.",
    runtime: "96 min",
    image_source:
      "https://xl.movieposterdb.com/07_11/1957/50083/xl_50083_c5ce989e.jpg?v=2024-04-12%2006:50:27",
    link: "https://youtu.be/TEN-2uTi2c0?si=77BDGcMNMFpXXjAG",
  },
  {
    id: 8,
    name: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy, Adventure",
    release_date: "2001",
    rating: "8.8",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    description:
      "A hobbit named Frodo inherits the One Ring, and with the help of a fellowship embarks on a quest to destroy it.",
    runtime: "178 min",
    image_source:
      "https://xl.movieposterdb.com/04_12/2001/0120737/xl_166_0120737_158c8914.jpg?v=2024-04-21%2017:37:58",
  },
  {
    id: 9,
    name: "Forrest Gump",
    genre: "Comedy, Drama",
    release_date: "1994",
    rating: "8.8",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    description:
      "Forrest Gump, a man with a low IQ, recounts his extraordinary life journey, which includes witnessing and influencing several defining historical events in the 20th century United States.",
    runtime: "142 min",
    image_source:
      "https://xl.movieposterdb.com/12_04/1994/109830/xl_109830_58524cd6.jpg?v=2024-04-08%2017:45:15",
  },
  {
    id: 10,
    name: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    release_date: "2010",
    rating: "8.8",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    description:
      "A thief who enters the dreams of others to steal secrets from their subconscious gets one last job: planting an idea into the mind of a CEO.",
    runtime: "148 min",
    image_source:
      "https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg?v=2024-04-06%2010:06:49",
  },
  {
    id: 11,
    name: "Fight Club",
    genre: "Drama",
    release_date: "1999",
    rating: "8.8",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    runtime: "139 min",
    image_source:
      "https://xl.movieposterdb.com/13_06/1999/137523/xl_137523_1d292ea3.jpg?v=2024-04-12%2005:33:21",
  },
  {
    id: 12,
    name: "The Matrix",
    genre: "Action, Sci-Fi",
    release_date: "1999",
    rating: "8.7",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    runtime: "136 min",
    image_source:
      "https://xl.movieposterdb.com/05_05/1999/0133093/xl_18427_0133093_b67474af.jpg",
  },
  {
    id: 13,
    name: "Goodfellas",
    genre: "Biography, Crime, Drama",
    release_date: "1990",
    rating: "8.7",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    runtime: "146 min",
    image_source:
      "https://xl.movieposterdb.com/05_09/1990/0099685/xl_54529_0099685_307a5bd2.jpg?v=2024-04-05%2013:43:50",
  },
  {
    id: 14,
    name: "The Silence of the Lambs",
    genre: "Crime, Drama, Thriller",
    release_date: "1991",
    rating: "8.6",
    cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    runtime: "118 min",
    image_source:
      "https://xl.movieposterdb.com/06_11/1991/0102926/xl_147623_0102926_52a757a8.jpg?v=2024-03-24%2012:57:29",
  },
  {
    id: 15,
    name: "The Green Mile",
    genre: "Crime, Drama, Fantasy",
    release_date: "1999",
    rating: "8.6",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    runtime: "189 min",
    image_source:
      "https://xl.movieposterdb.com/22_10/2000/348340/xl_walking-the-mile-movie-poster_8a56d924.jpg?v=2024-02-11%2011:58:05",
  },
  {
    id: 16,
    name: "The Prestige",
    genre: "Drama, Mystery, Sci-Fi",
    release_date: "2006",
    rating: "8.5",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
    description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    runtime: "130 min",
    image_source:
      "https://xl.movieposterdb.com/07_01/2006/0482571/xl_150699_0482571_abe43f96.jpg?v=2024-02-22%2010:35:26",
  },
  {
    id: 17,
    name: "Gladiator",
    genre: "Action, Adventure, Drama",
    release_date: "2000",
    rating: "8.5",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    runtime: "155 min",
    image_source:
      "https://xl.movieposterdb.com/08_12/2000/172495/xl_172495_93f99923.jpg?v=2024-04-14%2017:00:06",
  },
  {
    id: 18,
    name: "The Departed",
    genre: "Crime, Drama, Thriller",
    release_date: "2006",
    rating: "8.5",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
    description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    runtime: "151 min",
    image_source:
      "https://xl.movieposterdb.com/06_10/2006/0407887/xl_138581_0407887_3f7c779a.jpg?v=2024-03-23%2005:07:19",
  },
  {
    id: 19,
    name: "Interstellar",
    genre: "Adventure, Drama, Sci-Fi",
    release_date: "2014",
    rating: "8.6",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    runtime: "169 min",
    image_source:
      "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_593eaeff.jpg?v=2024-04-19%2011:21:59",
  },
  {
    id: 20,
    name: "The Usual Suspects",
    genre: "Crime, Mystery, Thriller",
    release_date: "1995",
    rating: "8.5",
    cast: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
    description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    runtime: "106 min",
    image_source:
      "https://xl.movieposterdb.com/13_05/1995/114814/xl_114814_cea78e02.jpg?v=2024-04-15%2022:19:21",
  },
  {
    id: 21,
    name: "The Godfather: Part II",
    genre: "Crime, Drama",
    release_date: "1974",
    rating: "9.0",
    cast: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
    description:
      "The compelling sequel to The Godfather, which portrays the early life and career of Vito Corleone in the early 20th century while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    runtime: "202 min",
    image_source:
      "https://xl.movieposterdb.com/22_07/1974/71562/xl_71562_28dbaac1.jpg?v=2024-03-23%2004:50:13",
  },
];

export default movies;
