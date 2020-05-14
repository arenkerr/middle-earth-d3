const Person = require('./models/person')

const resolvers = {
  Query: {
    getPeople: async () => await Person.find()
  },
  Mutation: {
    addPerson: async (context, args, info) => {
      const newPerson = new Person({
        name: args.name,
        tree_id: args.tree_id
      });

      let err = await newPerson.save();
  
      if (err) return err;
      return newPerson;
    }
}
}

module.exports = resolvers;
