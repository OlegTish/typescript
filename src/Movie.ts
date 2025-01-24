export class Movie {
  constructor(
    public title: string,
    public year: number,
    public country: string,
    public slogan: string,
    public genres: string[],
    public duration: number
  ) {}

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