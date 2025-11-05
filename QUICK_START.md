# Quick Start Guide - Wilderness Botswana

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# S3 Image Base URL
NEXT_PUBLIC_S3_BASE_URL=https://tanaka-images.s3.us-east-1.amazonaws.com

# Add these for production:
# EMAIL_SERVICE_API_KEY=your_sendgrid_or_ses_key
# DATABASE_URL=your_database_connection_string
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Testing the Fixes

### Test Camps Page
1. Go to `/camps`
2. Click any "Explore Camp" button
3. ✅ Verify: Camp details load with activities, story, and image carousel
4. Click "Book Now" to test booking form

### Test Activities Page
1. Go to `/activities`
2. Click "Book Now" on any activity
3. ✅ Verify: Modal opens with booking form
4. Fill form and submit
5. ✅ Verify: Success message appears

### Test Plan Safari Page
1. Go to `/plan-safari`
2. Fill out the safari planner form
3. Click "Show Me Perfect Lodges"
4. ✅ Verify: Lodges appear (initially 2)
5. Click "Show Me More Perfect Lodges"
6. ✅ Verify: More lodges load
7. Click "Inquire Now" on any lodge
8. ✅ Verify: Inquiry modal opens and works

### Test Contact Page
1. Go to `/contact`
2. Fill out the contact form
3. Click "Send Message"
4. ✅ Verify: Loading state shows
5. ✅ Verify: Success message appears
6. ✅ Verify: Form clears after submission

---

## 🔧 API Endpoints

All API endpoints are located in `app/api/`:

- **POST** `/api/contact` - Contact form submissions
- **POST** `/api/activity-booking` - Activity booking requests
- **POST** `/api/inquiry` - Lodge inquiry submissions

### Testing API Endpoints

Using curl:

```bash
# Test Contact Form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "topic": "bookings",
    "fullName": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'

# Test Activity Booking
curl -X POST http://localhost:3000/api/activity-booking \
  -H "Content-Type: application/json" \
  -d '{
    "activityName": "Game Drives",
    "fullName": "Test User",
    "email": "test@example.com",
    "numberOfPeople": "2",
    "activityDate": "2025-06-15",
    "bookingType": "guided-tour"
  }'

# Test Lodge Inquiry
curl -X POST http://localhost:3000/api/inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "selectedLodge": "Wilderness Pelo",
    "message": "Test inquiry"
  }'
```

---

## 📁 Project Structure

```
wilderness-botswana/
├── app/
│   ├── camps/
│   │   ├── [id]/
│   │   │   └── page.tsx          # Camp detail pages ✅ FIXED
│   │   └── page.tsx               # Camps listing
│   ├── activities/
│   │   └── page.tsx               # Activities page ✅ FIXED
│   ├── plan-safari/
│   │   └── page.tsx               # Plan safari page ✅ FIXED
│   ├── contact/
│   │   └── page.tsx               # Contact page ✅ FIXED
│   └── api/
│       ├── contact/
│       │   └── route.ts           # ✅ NEW
│       ├── activity-booking/
│       │   └── route.ts           # ✅ NEW
│       └── inquiry/
│           └── route.ts           # ✅ NEW
├── components/
│   ├── booking/
│   │   ├── ActivityBookingModal.tsx  # ✅ NEW
│   │   ├── InquiryModal.tsx          # ✅ NEW
│   │   └── BookingForm.tsx
│   └── common/
│       ├── LoadingSpinner.tsx        # ✅ NEW
│       └── ...
└── lib/
    └── placeholder-image.ts          # ✅ NEW
```

---

## 🎯 Key Features Implemented

### 1. Camp Detail Pages
- ✅ Unique stories for each camp
- ✅ 5 activities per camp
- ✅ 5-10 high-quality images
- ✅ Working "Book Now" button
- ✅ Responsive carousel

### 2. Activity Booking
- ✅ Modal booking form
- ✅ All required fields
- ✅ Booking type dropdown
- ✅ Success confirmation
- ✅ API integration

### 3. Plan Safari
- ✅ Dynamic lodge loading
- ✅ "Show More" functionality
- ✅ Inquiry modal
- ✅ Seasonal pricing display
- ✅ Smart filtering

### 4. Contact Form
- ✅ Full validation
- ✅ Loading states
- ✅ Error handling
- ✅ Success messages
- ✅ API integration

---

## 🐛 Troubleshooting

### Images Not Loading
- Check `NEXT_PUBLIC_S3_BASE_URL` in `.env.local`
- Verify S3 bucket permissions
- Check browser console for CORS errors

### Forms Not Submitting
- Check browser console for errors
- Verify API routes are accessible
- Check network tab for failed requests

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

---

## 📦 Production Deployment

### Before Deploying:

1. **Set up email service**
   ```bash
   # Install email service SDK
   npm install @sendgrid/mail
   # or
   npm install @aws-sdk/client-ses
   ```

2. **Configure database**
   - Set up PostgreSQL/MySQL
   - Run migrations
   - Update API routes to save to database

3. **Environment variables**
   ```env
   NEXT_PUBLIC_S3_BASE_URL=your_s3_url
   DATABASE_URL=your_database_url
   EMAIL_API_KEY=your_email_api_key
   EMAIL_FROM=noreply@wildernessbotswana.com
   ```

4. **Build and test**
   ```bash
   npm run build
   npm start
   ```

---

## 📞 Support

For issues or questions:
- Check `FIXES_DOCUMENTATION.md` for detailed information
- Review API endpoint documentation
- Check browser console for errors
- Verify environment variables are set

---

## ✅ Checklist Before Going Live

- [ ] All forms tested and working
- [ ] Email notifications configured
- [ ] Database connected and tested
- [ ] Environment variables set
- [ ] Images loading correctly
- [ ] Mobile responsiveness verified
- [ ] API rate limiting implemented
- [ ] Error tracking set up (Sentry, etc.)
- [ ] Analytics configured
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Backup strategy in place

---

**Happy Safari Planning! 🦁🐘🦒**
