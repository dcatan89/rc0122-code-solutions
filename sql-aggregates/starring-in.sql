select  "g"."name" as "Genres",
        count("g"."name")
  from "genres" as "g"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' and
        "lastName" = 'Monroe'
  group by "g"."name";
