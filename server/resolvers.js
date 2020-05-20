const Person = require('./models/person')

const resolvers = {
  Query: {
    getPeople: async () => await Person.find(),
    getPerson: async (root, args) => await Person.findOne(args)
  },
  Mutation: {
    addPerson: async (root, args) => {
      const newPerson = new Person({
        name: args.name,
        tree_id: args.tree_id
      });

      let err = await newPerson.save();
  
      if (err) return err;
      return newPerson;
    },
    deletePerson: async (root, args) => {
      const deletedPerson = Person.findOneAndRemove({
        tree_id: args.tree_id,
        name: args.name
      });
      console.log('delete!!!!')
      return deletedPerson;
    },
    updateBio: async (root, args) => {
      const updatedPerson = Person.findOneAndUpdate({
        name: args.name,
        bio: args.bio
      });

      return updatedPerson;
    }
  },
}

module.exports = resolvers;
