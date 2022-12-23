const { Book, User } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        user: async (parent, args) => {

            return User.findById(args.id)
        }
    },

    Mutation: {
        createUser: async (parent, args) => {
            const newUser = await User.create({ args })
            return newUser
        }

    }
}