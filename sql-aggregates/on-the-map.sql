select count("c"."name") as "TotalCities",
      "count". "name"
  from "cities" as "c"
  join "countries" as "count" using ("countryId")
  group by "count"."name";
