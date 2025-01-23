export class Movie {
    title: string;
    year: number;
    country: string;
    slogan: string;
    genres: string[];
    duration: number; // Duration in minutes
  
    constructor(
      title: string,
      year: number,
      country: string,
      slogan: string,
      genres: string[],
      duration: number
    ) {
      this.title = title;
      this.year = year;
      this.country = country;
      this.slogan = slogan;
      this.genres = genres;
      this.duration = duration;
    }
  
    getFormattedDuration(): string {
      const hours = Math.floor(this.duration / 60);
      const minutes = this.duration % 60;
      return `${hours}ч ${minutes}м`;
    }
  
    displayInfo(): string {
      return `
  Название: ${this.title}
  Год: ${this.year}
  Страна: ${this.country}
  Слоган: "${this.slogan}"
  Жанры: ${this.genres.join(", ")}
  Продолжительность: ${this.getFormattedDuration()}
      `;
    }
  }