const micro = require("micro");
const graphqlServer = require("express-graphql");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

const basketItems = [
  { id: "1", name: "Apple", price: 1.2, quantity: 2 },
  { id: "2", name: "Orange", price: 0.8, quantity: 3 },
];

const basketItem = new GraphQLObjectType({
  name: "basketItem",
  description: "A basket item",
  fields() {
    return {
      id: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      price: {
        type: GraphQLFloat,
      },
      quantity: {
        type: GraphQLInt,
      },
    };
  },
});

const BasketType = new GraphQLObjectType({
  name: "basket",
  fields() {
    return {
      items: {
        type: new GraphQLList(basketItem),
      },
    };
  },
});

// Przykładowe zapytanie, które GraphQL bedzie mogl zapytac
// {
//     basket{
//         items{
//             id
//             name
//             price
//             quantity
//         }
//     }
// }

// // Przykladowa odpowiedz:
// {
//     "data": {
//       "basket": {
//         "items": [
//           {
//             "id": "1",
//             "name": "Apple",
//             "price": 1.2,
//             "quantity": 2
//           },
//           {
//             "id": "2",
//             "name": "Orange",
//             "price": 0.8,
//             "quantity": 3
//           }
//         ]
//       }
//     }
//   }

const basket = {
  type: BasketType,
  resolve() {
    return {
      items: basketItems,
    };
  },
};

// Wskazanie glownej galezi
const query = new GraphQLObjectType({
  name: "query",
  description: "This is a root query",
  fields() {
    return {
      basket,
    };
  },
});

const lineItemCost = {
  type: GraphQLFloat,
  args: { id: { type: GraphQLString } },
  resolve(root, args, context) {
    const item = basketItems.find((item) => item.id === args.id);
    return item.price * item.quantity;
  },
};

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields() {
    return {
      lineItemCost,
    };
  },
});

// mutation{
//   koszt1: lineItemCost(id:"1")
// }

// {
//     "data": {
//       "koszt1": 2.4
//     }
//   }

const handler = graphqlServer({
  schema: new GraphQLSchema({
    query,
    mutation,
  }),
  graphiql: true, // bedziemy mogli przejsc do zakladki graphiql by spojrzec na nasze dane
});

const server = micro(handler);
let port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

