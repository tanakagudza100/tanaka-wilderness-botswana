# Wilderness Botswana - Database Seed Data Summary

## 📋 Overview

I've extracted and organized all the rates data from your 3 images into structured seed files ready for your database.

## 📁 Files Created

### 1. **seed-data.json**
Contains base data for:
- **2 Regions**: Okavango Delta, Linyanti
- **9 Seasons**: Covering dates from Jan 2026 to Jan 2027
- **21 Camps**: Across Adventures, Classic, and Premier categories

### 2. **complete-rates.json**
Contains **~200+ rate entries** for Classic and Adventures camps including:
- Wilderness Pelo
- Wilderness Linyanti Tented Camp (East & West)
- Wilderness Savuti
- Wilderness Mokete
- Wilderness Chitabe & Chitabe Lediba
- Wilderness Jacana
- Wilderness Kwetsani
- Wilderness Little Tubu
- Wilderness Little Vumbura
- Wilderness Qorokwe
- Wilderness Tubu Tree
- Wilderness DumaTau
- Wilderness King's Pool
- Wilderness Little DumaTau

### 3. **premier-camps-rates.json**
Contains **72 rate entries** for Premier camps:
- Wilderness Jao
- Wilderness Little Mombo
- Wilderness Mombo
- Wilderness Vumbura Plains North
- Wilderness Vumbura Plains South

### 4. **amplify/data/seed.ts**
TypeScript seed script for regions, seasons, and camps

### 5. **seed-complete.ts**
Complete orchestration script with console logging

### 6. **SEED_README.md**
Comprehensive guide on how to use the seed data

## 📊 Data Statistics

- **Total Regions**: 2
- **Total Seasons**: 9
- **Total Camps**: 21
  - Adventures: 1
  - Classic: 13
  - Premier: 7
- **Total Rate Entries**: ~270+
  - Each rate has: campId, seasonId, rateType, currency, price

## 💰 Rate Types

All camps have two rate types:
1. **Per person, sharing** - Base rate for double occupancy
2. **Single supplement** - Additional charge for single occupancy

## 🏕️ Camp Categories

### Adventures (1 camp)
- **Wilderness Pelo** - Okavango Delta
  - Price range: $658 - $1,148 (per person, sharing)

### Classic (13 camps)
Locations: Linyanti, Mohobe, Okavango Delta
- Price range: $604 - $3,392 (per person, sharing)
- Notable: Wilderness Chitabe has highest Classic rates

### Premier (7 camps)
Locations: Linyanti, Okavango Delta
- Price range: $1,424 - $5,043 (per person, sharing)
- Notable: Wilderness Mombo & Little Mombo have highest rates

## 📅 Season Breakdown

| Season ID | Date Range | Notes |
|-----------|------------|-------|
| s1 | 31-Mar-26 to 30-Apr-26 | Shoulder season |
| s2 | 31-May-26 to 31-Oct-26 | Peak season |
| s3 | 19-Dec-26 to 5-Jan-27 | Holiday peak |
| s4 | 6-Jan-26 to 31-Mar-26 | High season |
| s5 | 1-Apr-26 to 30-Apr-26 | Shoulder season |
| s6 | 1-May-26 to 31-May-26 | Pre-peak |
| s7 | 1-Jun-26 to 31-Oct-26 | Peak season |
| s8 | 1-Nov-26 to 19-Dec-26 | Shoulder season |
| s9 | 20-Dec-26 to 5-Jan-27 | Holiday peak |

## 🔑 Key Insights

### Price Patterns
- **Lowest rates**: Adventures category (Wilderness Pelo)
- **Mid-range**: Classic camps ($600-$3,400)
- **Highest rates**: Premier camps, especially Mombo properties ($2,800-$5,000+)

### Seasonal Pricing
- Peak season (s7): Highest rates across all camps
- Holiday peaks (s3, s9): Premium pricing
- Shoulder seasons (s1, s5, s8): Lower rates

### Single Supplements
- Typically 30% of the per person sharing rate
- Consistent across all camps and seasons

## 🚀 Next Steps

1. **Review the data** in the JSON files for accuracy
2. **Deploy your Amplify backend** if not already done
3. **Run the seed script** using one of these methods:
   - Import and call `seedCompleteDatabase()` from `seed-complete.ts`
   - Use AWS Amplify Console to manually import JSON files
   - Create a custom npm script

4. **Verify the data** in your database
5. **Test queries** to ensure relationships work correctly

## 📝 Data Structure Example

```json
{
  "campId": "pelo",
  "seasonId": "s1",
  "rateType": "Per person, sharing",
  "currency": "USD",
  "price": 658
}
```

## ⚠️ Important Notes

- All prices are in **USD**
- All accommodation types are **FI** (Fully Inclusive)
- Some camps don't have rates for all seasons (e.g., Kwetsani starts from s4)
- The data maintains referential integrity with proper foreign keys

## 🎯 Usage in Your App

Once seeded, you can query rates like:

```typescript
// Get all rates for a specific camp
const campRates = await client.models.Rate.list({
  filter: { campId: { eq: 'pelo' } }
});

// Get rates for a specific season
const seasonRates = await client.models.Rate.list({
  filter: { seasonId: { eq: 's7' } }
});

// Get per person sharing rates only
const sharingRates = await client.models.Rate.list({
  filter: { rateType: { eq: 'Per person, sharing' } }
});
```

---

**Total Data Points Extracted**: 270+ rate entries from 3 images
**Ready for Import**: ✅ Yes
**Format**: JSON & TypeScript
**Compatible with**: AWS Amplify Gen 2
