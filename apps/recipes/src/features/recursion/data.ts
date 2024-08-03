import { type Node } from "./types";

export const data: Array<Node> = [
  {
    name: "Movies",
    children: [
      {
        name: "Action",
        children: [
          {
            name: "Die Hard",
          },
          {
            name: "Terminator",
          },
        ],
      },
      {
        name: "Comedy",
        children: [
          {
            name: "Dumb and Dumber",
          },
          {
            name: "Ace Ventura",
          },
        ],
      },
    ],
  },
  {
    name: "Music",
    children: [
      {
        name: "Rock",
        children: [
          {
            name: "Metallica",
          },
          {
            name: "Nirvana",
          },
        ],
      },
      {
        name: "Pop",
        children: [
          {
            name: "Britney Spears",
          },
          {
            name: "Justin Bieber",
          },
        ],
      },
    ],
  },
  {
    name: "Books",
    children: [
      {
        name: "Fantasy",
        children: [
          {
            name: "Harry Potter",
          },
          {
            name: "Lord of the Rings",
          },
        ],
      },
      {
        name: "Science Fiction",
        children: [
          {
            name: "Dune",
          },
          {
            name: "Foundation",
          },
        ],
      },
    ],
  },
  {
    name: "Periodical",
    children: [],
  },
];
