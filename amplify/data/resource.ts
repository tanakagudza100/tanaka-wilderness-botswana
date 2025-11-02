import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Region: a.model({
    id: a.id(),
    name: a.string().required(),
    camps: a.hasMany('Camp', 'regionId')
  }),
  
  Camp: a.model({
    id: a.id(),
    name: a.string().required(),
    category: a.string(), // Adventures, Classic, Premier
    location: a.string(), // Okavango Delta, Linyanti, etc.
    accommodationType: a.string(), // FI, DBB, FB+
    regionId: a.id(),
    region: a.belongsTo('Region', 'regionId'),
    rates: a.hasMany('Rate', 'campId')
  }),
  
  Season: a.model({
    id: a.id(),
    name: a.string(),
    startDate: a.date(),
    endDate: a.date(),
    rates: a.hasMany('Rate', 'seasonId')
  }),
  
  Rate: a.model({
    id: a.id(),
    campId: a.id(),
    seasonId: a.id(),
    rateType: a.string(), // Per person sharing, Single supplement, Villa rate
    currency: a.string(), // USD, ZAR
    price: a.float(),
    camp: a.belongsTo('Camp', 'campId'),
    season: a.belongsTo('Season', 'seasonId')
  })
}).authorization(allow => [
  // Choose one of these authorization patterns:
  
  // Option 1: Public API access (for development)
  allow.publicApiKey(),
  
  // Option 2: Authenticated users only
  // allow.authenticated(),
  
  // Option 3: Custom rules for different operations
  // allow.publicApiKey().to(['read']), // Public can read
  // allow.authenticated().to(['read', 'create', 'update']) // Auth users can do more
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    // Use 'userPool' if you choose authenticated access above
  },
});