import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  imports: [],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.scss'
})
export class MovieList {

  movies :any[] = [
    {
      id: 1,
      slug: "1",
      title: "Inception",
      year: 2018,
      author: "Roar Uthaug",
      duration: 125,
      genre: "Action, Fantasy",
      synopsis: "Un voleur s'infiltre dans les rêves pour dérober des secrets.",
      cover: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 3
    },
    {
      id: 2,
      slug: "2",
      title: "The Dark Knight",
      year: 2018,
      author: "Roar Uthaug",
      duration: 125,
      genre: "Action, Fantasy",
      synopsis: "Batman affronte le Joker pour sauver Gotham.",
      cover: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 5
    },
    {
      id: 3,
      slug: "3",
      title: "Interstellar",
      year: 2018,
      author: "Roar Uthaug",
      duration: 125,
      genre: "Action, Fantasy",
      synopsis: "Une équipe voyage à travers un trou de ver pour sauver l'humanité.",
      cover: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 4
    }
  ];

}
