const Person = require('./models/person')

const resolvers = {
  Query: {
    getPeople: async () => await Person.find(),
    getPerson: async (context, args) => await Person.findOne(args)
  },
  Mutation: {
    addPerson: async (context, args) => {
      const newPerson = new Person({
        name: args.name,
        tree_id: args.tree_id
      });

      let err = await newPerson.save();
  
      if (err) return err;
      return newPerson;
    },
    deletePerson: async (context, args) => {
      const deletedPerson = Person.findOneAndRemove({
        name: args.name
      });

      return deletedPerson;
    },
    updateBio: async (context, args) => {
      const updatedPerson = Person.findOneAndUpdate({
        name: args.name,
        bio: args.bio
      });

      return updatedPerson;
    }
  },
}

module.exports = resolvers;
