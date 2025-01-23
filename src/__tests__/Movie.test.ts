import { Movie } from "../Movie";

describe("Movie Class", () => {
  it("should correctly create a Movie instance", () => {
    const movie = new Movie(
      "Мстители",
      2012,
      "США",
      "Avengers Assemble!",
      ["фантастика", "боевик", "фэнтези", "приключения"],
      137
    );

    expect(movie.title).toBe("Мстители");
    expect(movie.year).toBe(2012);
    expect(movie.country).toBe("США");
    expect(movie.slogan).toBe("Avengers Assemble!");
    expect(movie.genres).toEqual(["фантастика", "боевик", "фэнтези", "приключения"]);
    expect(movie.duration).toBe(137);
  });

  it("should return the correct formatted duration", () => {
    const movie = new Movie("Test Movie", 2021, "USA", "Test Slogan", ["Action"], 125);
    expect(movie.getFormattedDuration()).toBe("2ч 5м");
  });

  it("should correctly display movie info", () => {
    const movie = new Movie(
      "Мстители",
      2012,
      "США",
      "Avengers Assemble!",
      ["фантастика", "боевик", "фэнтези", "приключения"],
      137
    );

    const info = movie.displayInfo();
    expect(info).toContain("Название: Мстители");
    expect(info).toContain("Год: 2012");
    expect(info).toContain("Страна: США");
    expect(info).toContain('Слоган: "Avengers Assemble!"');
    expect(info).toContain("Жанры: фантастика, боевик, фэнтези, приключения");
    expect(info).toContain("Продолжительность: 2ч 17м");
  });
});