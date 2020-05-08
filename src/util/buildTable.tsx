let nodeLocation = {};

export default function buildTable(root) {
    root.children.forEach(node => {
        nodeLocation[node.data.id] = {x: node.x, y: node.y}
        if (node.children) {
            return buildTable(node)
        } 
    });

    return nodeLocation;
}