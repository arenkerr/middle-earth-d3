export default function buildProfile(node: any) {
    const profile = {
        title: node.title ? node.title : null,
        dob: node.dob.length > 1 ? node.dob : null,
        dod: node.yod.length > 1 ? node.dod : null,
        pod: node.pod.length > 1 ? node.pod : null,
        sex: node.gender,
    };

    // TO DO: get race, second name from 'tree' array

    return profile;
}

