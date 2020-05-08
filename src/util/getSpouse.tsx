export default function getSpouse(spouseId: string, wife, list) {
    let spouse = list.filter(person => person.id === spouseId)[0];

    list.map(person => {
        if (person.id === spouseId) {
            
            person.husband = person.profile.sex === 'M' ? true : false;
            person.spouse = wife;
            person.spouseId = wife.id;
        }
        return person;
    });

    return spouse;
}