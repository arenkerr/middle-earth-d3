interface Person {
    readonly name: string;
    readonly id: string;
    parentId: string;
    spouseId?: string;
    spouse?: any;
    husband: boolean
    profile: {
        title?: string;
        dob?: string;
        dod?: string;
        pod?: string;
        sex?: string;
    };
}

export default Person;