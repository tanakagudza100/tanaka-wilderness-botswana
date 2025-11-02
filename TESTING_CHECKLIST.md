# Testing Checklist - Responsive Design & Booking System

## ✅ Quick Test Guide

### 1. Start the Development Server
```bash
npm run dev
```
Visit: `http://localhost:3000`

---

## 📱 Responsive Design Tests

### Mobile (320px - 640px)

#### Navigate to Camps Page (`/camps`)
- [ ] Hero image loads and displays properly
- [ ] Camp cards are stacked vertically
- [ ] Text is readable (not too small)
- [ ] "Book Now" buttons are easily tappable
- [ ] Images load without breaking layout
- [ ] No horizontal scrolling

#### Click on Any Camp
- [ ] Hero section fills viewport height
- [ ] Camp name and details are visible
- [ ] "Back to Camps" link works
- [ ] Content sections stack vertically
- [ ] Amenities grid shows 2 columns
- [ ] Gallery carousel works with touch swipe
- [ ] Booking card appears below content
- [ ] "Book Now" button is prominent

### Tablet (640px - 1024px)

#### Camps Page
- [ ] Camp cards show in 2-column grid
- [ ] Spacing between cards is appropriate
- [ ] Images maintain aspect ratio
- [ ] Text sizes increase appropriately

#### Camp Detail Page
- [ ] Hero section is taller
- [ ] Amenities show 3 columns
- [ ] Content is easier to read
- [ ] Booking card still below content

### Desktop (1024px+)

#### Camps Page
- [ ] Camp cards show in 3-column grid
- [ ] Hover effects work smoothly
- [ ] Layout is centered with max-width
- [ ] All animations are smooth

#### Camp Detail Page
- [ ] Hero section is full height
- [ ] Content uses 2/3 + 1/3 layout
- [ ] Booking card is sticky on right
- [ ] Amenities show 4 columns
- [ ] Highlights show 2 columns
- [ ] All hover states work

---

## 🔘 Booking Form Tests

### Opening the Form
1. Navigate to any camp detail page
2. Click "Book Now" button
3. **Expected**: Modal opens with smooth animation
4. **Expected**: Form is centered and readable
5. **Expected**: Background is dimmed

### Form Functionality

#### Personal Information
- [ ] First Name field accepts text
- [ ] Last Name field accepts text
- [ ] Email field validates email format
- [ ] Phone field accepts phone numbers
- [ ] All fields show proper labels
- [ ] Required fields marked with *

#### Booking Details
- [ ] Check-in date picker works
- [ ] Check-out date picker works
- [ ] Check-out date must be after check-in
- [ ] Guest selector dropdown works (1-8 guests)
- [ ] Special requests textarea accepts text
- [ ] Price updates when guest count changes

#### Form Validation
- [ ] Cannot submit with empty required fields
- [ ] Email must be valid format
- [ ] Dates must be in future
- [ ] Check-out must be after check-in

### Form Submission

#### Submit Process
1. Fill all required fields
2. Click "Submit Booking Request"
3. **Expected**: Button shows loading spinner
4. **Expected**: Button is disabled during submission
5. **Expected**: Form fields are disabled
6. **Expected**: After 2 seconds, success message appears

#### Success State
- [ ] Green checkmark icon appears
- [ ] Success message is displayed
- [ ] Message is centered and readable
- [ ] After 3 seconds, modal closes automatically
- [ ] Form resets for next use

### Responsive Form Tests

#### Mobile (< 640px)
- [ ] Form fields stack vertically
- [ ] All inputs are easily tappable
- [ ] Keyboard doesn't cover inputs
- [ ] Modal fits screen with scroll
- [ ] Close button is accessible

#### Tablet/Desktop (640px+)
- [ ] Name fields show side-by-side
- [ ] Email and phone show side-by-side
- [ ] Date fields show side-by-side
- [ ] Modal is centered with max-width
- [ ] Scroll works if content is long

---

## 🖼️ Image Optimization Tests

### Check Image Loading
1. Open DevTools Network tab
2. Filter by "Img"
3. Navigate to camps page
4. **Expected**: Images load in WebP or AVIF format
5. **Expected**: Different sizes load on different devices
6. **Expected**: Images below fold load lazily

### Test Image Sizes
- [ ] Mobile: Smaller image files load
- [ ] Tablet: Medium image files load
- [ ] Desktop: Larger image files load
- [ ] Hero images load with priority
- [ ] Gallery images load lazily

---

## 🎨 Visual & UX Tests

### Animations
- [ ] Page transitions are smooth
- [ ] Scroll animations trigger correctly
- [ ] Hover effects work on desktop
- [ ] Loading states show properly
- [ ] Success animations play smoothly

### Typography
- [ ] All text is readable
- [ ] Headings have proper hierarchy
- [ ] Line heights are comfortable
- [ ] Text scales on different screens
- [ ] No text overflow or truncation

### Colors & Contrast
- [ ] Text has sufficient contrast
- [ ] Buttons are clearly visible
- [ ] Links are distinguishable
- [ ] Accent colors (amber) stand out
- [ ] Dark theme is consistent

### Spacing
- [ ] Consistent padding/margins
- [ ] No cramped sections
- [ ] Breathing room around elements
- [ ] Grid gaps are appropriate
- [ ] Touch targets have space

---

## 🌐 Cross-Browser Tests

### Chrome/Edge
- [ ] All features work
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] Form submits properly

### Firefox
- [ ] All features work
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] Form submits properly

### Safari (macOS)
- [ ] All features work
- [ ] Images load correctly
- [ ] Animations smooth
- [ ] Form submits properly

### Mobile Safari (iOS)
- [ ] Touch interactions work
- [ ] Scroll is smooth
- [ ] Form inputs work with keyboard
- [ ] No layout issues

### Chrome Mobile (Android)
- [ ] Touch interactions work
- [ ] Scroll is smooth
- [ ] Form inputs work with keyboard
- [ ] No layout issues

---

## 🔍 Accessibility Tests

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators are visible
- [ ] Can open/close modal with keyboard
- [ ] Can submit form with Enter key
- [ ] Can navigate carousel with arrows

### Screen Reader
- [ ] Images have alt text
- [ ] Form labels are announced
- [ ] Buttons have descriptive text
- [ ] Error messages are announced
- [ ] Success messages are announced

---

## ⚡ Performance Tests

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for:
   - [ ] Performance > 90
   - [ ] Accessibility > 90
   - [ ] Best Practices > 90
   - [ ] SEO > 90

### Page Load
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Time to Interactive < 3.5s
- [ ] Cumulative Layout Shift < 0.1

---

## 🐛 Common Issues to Check

### Layout Issues
- [ ] No horizontal scroll on any device
- [ ] No content overflow
- [ ] Images don't break layout
- [ ] Sticky elements work correctly
- [ ] Grid doesn't collapse unexpectedly

### Form Issues
- [ ] Date pickers work on all browsers
- [ ] Dropdown works on mobile
- [ ] Validation messages show
- [ ] Submit button always works
- [ ] Modal closes properly

### Image Issues
- [ ] No broken image links
- [ ] Fallback images work
- [ ] Loading states show
- [ ] Images are optimized
- [ ] No layout shift during load

---

## ✅ Sign-Off Checklist

Before considering complete:
- [ ] All responsive breakpoints tested
- [ ] Booking form works end-to-end
- [ ] Images load and optimize correctly
- [ ] All buttons and links work
- [ ] No console errors
- [ ] No layout issues on any device
- [ ] Animations are smooth
- [ ] Form validation works
- [ ] Success messages display
- [ ] Cross-browser tested
- [ ] Accessibility basics covered
- [ ] Performance is acceptable

---

## 📊 Test Results Template

```
Date: ___________
Tester: ___________

Mobile (320px): ✅ / ❌
Tablet (640px): ✅ / ❌
Desktop (1024px): ✅ / ❌

Booking Form: ✅ / ❌
Image Loading: ✅ / ❌
Animations: ✅ / ❌

Chrome: ✅ / ❌
Firefox: ✅ / ❌
Safari: ✅ / ❌

Issues Found:
1. ___________
2. ___________
3. ___________

Notes:
___________
```

---

**Pro Tip**: Use Chrome DevTools Device Mode to test multiple screen sizes quickly!
