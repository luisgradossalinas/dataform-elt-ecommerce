[
    "distribution_centers",
    "events",
    "inventory_items",
    "order_items",
    "orders",
    "products",
    "users"
].forEach(source => declare({
      schema: `${dataform.projectConfig.vars.bronze_dataset_name}`,
      name: source,
      description: "Tablas en bronze",
}));