const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/api/add-node', (req, res) => {
    let originData;
    // let newData = req.body;
    // let updatedData;

    fs.readFile('../src/examples/org-chart.json', 'utf8', (err, data) => {
        console.log("123"); 
        if (err) {
            console.error('Error reading JSON file:', err);
        } else {
            originData = JSON.parse(data);
            console.log('JSON data:', originData);
        }
    });
    // console.log("arrived"); 
    console.log(req.body); 
    // fs.writeFile('../src/examples/org-chart.json', updatedData, (err) => {
    //     if (err) {
    //       console.error('Error writing JSON file:', err);
    //     } else {
    //       console.log('JSON data written to file successfully');
    //     }
    // });

    // Send response
    res.send('POST request received');
});
  

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
