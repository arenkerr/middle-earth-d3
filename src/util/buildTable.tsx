
export default function buildTable(root, nodeLocation = {}) {
    root.children.forEach(node => {
        nodeLocation[node.data.id] = {x: node.x, y: node.y}
        if (node.children) {
            return buildTable(node, nodeLocation)
        } 
    });

    return nodeLocation;
}