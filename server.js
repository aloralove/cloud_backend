const express = require('express');
const {BigQuery} = require('@google-cloud/bigquery');
const app = express();
const PORT = process.env.PORT || 3000;

const bigquery = new BigQuery();

app.get('/data', async (req, res) => {
  const query = `SELECT * FROM \`sodium-airport-395522.alora_purpleair_dataset.processed\` LIMIT 10`; // Update this query as needed
  const [rows] = await bigquery.query(query);
  
  res.send(rows);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
