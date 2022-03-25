select "line1",
       "c"."name" as "City",
       "district",
       "count". "name" as "Country"
  from "addresses"
  join "cities" as "c" using ("cityId")
  join "countries" as "count" using ("countryId");
