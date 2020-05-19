export default function formatSeedProfile(data, formattedData: any = []) {
    data.children.forEach(node => {
        let profile: any = {
            name: node.data.name,
            tree_id: node.data.id,
            bio: null,
        }

        formattedData.push(profile);

        if (node.children) {
            return formatSeedProfile(node, formattedData)
        } 
    });

    return formattedData;
}
