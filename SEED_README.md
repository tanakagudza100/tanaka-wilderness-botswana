# Database Seeding Guide

This guide explains how to seed your Wilderness Botswana database with the rates data from your pricing sheets.

## Files Created

1. **`seed-data.json`** - Contains regions, seasons, and camps data
2. **`rates-data.json`** - Contains partial rates data (see note below)
3. **`amplify/data/seed.ts`** - TypeScript seed script for regions, seasons, and camps
4. **`seed-complete.ts`** - Complete seeding orchestration script

## Data Structure

### Regions
- Okavango Delta
- Linyanti

### Seasons (9 total)
- s1: 31-Mar-26 to 30-Apr-26
- s2: 31-May-26 to 31-Oct-26
- s3: 19-Dec-26 to 5-Jan-27
- s4: 6-Jan-26 to 31-Mar-26
- s5: 1-Apr-26 to 30-Apr-26
- s6: 1-May-26 to 31-May-26
- s7: 1-Jun-26 to 31-Oct-26
- s8: 1-Nov-26 to 19-Dec-26
- s9: 20-Dec-26 to 5-Jan-27

### Camps (21 total)

#### Adventures Category
- Wilderness Pelo

#### Classic Category
- Wilderness Linyanti Tented Camp (East)
- Wilderness Linyanti Tented Camp (West)
- Wilderness Savuti
- Wilderness Mokete
- Wilderness Chitabe
- Wilderness Chitabe Lediba
- Wilderness Jacana
- Wilderness Kwetsani
- Wilderness Little Tubu
- Wilderness Little Vumbura
- Wilderness Qorokwe
- Wilderness Tubu Tree

#### Premier Category
- Wilderness DumaTau
- Wilderness King's Pool
- Wilderness Little DumaTau
- Wilderness Jao
- Wilderness Little Mombo
- Wilderness Mombo
- Wilderness Vumbura Plains North
- Wilderness Vumbura Plains South

### Rates
Each camp has rates for different seasons with:
- **Rate Type**: "Per person, sharing" or "Single supplement"
- **Currency**: USD
- **Price**: Varies by camp and season

## How to Seed the Database

### Option 1: Using the TypeScript Seed Script

1. Make sure your Amplify backend is deployed and configured
2. Run the seed script:

```typescript
import { seedCompleteDatabase } from './seed-complete';

// Call this function when you want to seed
await seedCompleteDatabase();
```

### Option 2: Manual Import via AWS Amplify Console

1. Go to your AWS Amplify Console
2. Navigate to Data Manager
3. Import the JSON files manually for each model

### Option 3: Create a Custom Seed Command

Add to your `package.json`:

```json
{
  "scripts": {
    "seed": "tsx seed-complete.ts"
  }
}
```

Then run: `npm run seed`

## Complete Rates Data

The rates data extracted from your images includes:

### Image 1 Camps (Adventures & Classic - Linyanti/Mohobe)
- Wilderness Pelo (Adventures)
- Wilderness Linyanti Tented Camp (East & West)
- Wilderness Savuti
- Wilderness Mokete
- Wilderness Chitabe
- Wilderness Chitabe Lediba
- Wilderness Jacana

### Image 2 Camps (Classic - Okavango Delta)
- Wilderness Kwetsani
- Wilderness Little Tubu
- Wilderness Little Vumbura
- Wilderness Qorokwe
- Wilderness Tubu Tree
- Wilderness DumaTau
- Wilderness King's Pool
- Wilderness Little DumaTau

### Image 3 Camps (Premier - Okavango Delta)
- Wilderness Jao
- Wilderness Little Mombo
- Wilderness Mombo
- Wilderness Vumbura Plains North
- Wilderness Vumbura Plains South

## Rate Examples

### Wilderness Pelo (Adventures)
- Season s1 (31-Mar-26 to 30-Apr-26):
  - Per person, sharing: $658
  - Single supplement: $197

### Wilderness Chitabe (Classic)
- Season s4 (6-Jan-26 to 31-Mar-26):
  - Per person, sharing: $3,392
  - Single supplement: $1,018

### Wilderness DumaTau (Premier)
- Season s7 (1-Jun-26 to 31-Oct-26):
  - Per person, sharing: $4,327
  - Single supplement: $1,298

## Notes

- All prices are in USD
- Accommodation type is "FI" (Fully Inclusive) for all camps
- Some camps have rates for all 9 seasons, while others have rates for specific seasons only
- The seed data maintains referential integrity with proper foreign keys (campId, seasonId, regionId)

## Next Steps

1. Review the seed data files to ensure accuracy
2. Deploy your Amplify backend if not already done
3. Run the seed script to populate your database
4. Verify the data in your AWS Amplify Console
5. Test queries to ensure all relationships are working correctly

## Troubleshooting

If you encounter errors:
- Ensure your Amplify backend is properly configured
- Check that the API key or authentication is set up correctly
- Verify that the schema in `amplify/data/resource.ts` matches the seed data structure
- Make sure all required fields are included in the seed data
