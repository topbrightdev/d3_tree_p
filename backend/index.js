const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const util = require('util');

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/api/add-node', (req, res) => {
    console.log(req.body); 
    const jsonData = fs.readFileSync('../src/examples/1.json', 'utf8');
    const objData = JSON.parse(jsonData);
    
    const findNodeByName = (nodeName, node) => {
        if (node.name === nodeName) {
          // If the node has the desired name, return it
          return node;
        } 
        else if (node.children) {
          // If the node has children, recursively search them
          for (let i = 0; i < node.children.length; i++) {
            const foundNode = findNodeByName(nodeName, node.children[i]);
            if (foundNode) {
              // If the node is found in the children, return it
              return foundNode;
            }
          }
        }
      
        // If the node is not found, return undefined
        return undefined;
    };
      
      const targetNode = findNodeByName(req.body.pos, objData);
      
      if (targetNode) {
        console.log('Node found:', targetNode);
      } else {
        console.log('Node not found!');
      }

    // const targetNode = objData.children.find(child => child.name === req.body.pos);
    if (!targetNode.children) {
        targetNode.children = [];
    }

    targetNode.children.push({ name: req.body.value});  // the name of new node
    const inspectedData = util.inspect(objData, { depth: null });
    console.log("result", inspectedData); 
    console.log("result1", targetNode); 

    const updatedJsonData = JSON.stringify(objData);
    fs.writeFileSync('../src/examples/1.json', updatedJsonData);
    
    console.log('New child added to JSON data!');
});
  

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
