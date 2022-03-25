select  "firstName",
        "lastName",
        sum("p"."amount") as "TotalSpent"
  from "customers"
  join "payments" as "p" using ("customerId")
  group by "customerId"
  order by sum("p"."amount") desc;
