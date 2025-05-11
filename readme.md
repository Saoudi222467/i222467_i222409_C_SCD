# Admin Panel README

## Overview
This document provides an overview of the **Crossroads Adventure Admin Panel**, detailing its modules, functionalities, and key considerations for managing trips, blogs, and booking dates. The backend for this application is hosted on **Vercel**, and the code repository is available on **GitHub**.

- **Backend Hosted On**: [crabackendnew.vercel.app](https://crabackendnew.vercel.app)  
- **GitHub Repository**: [CrossroadsAdventure/crabackendnew](https://github.com/CrossroadsAdventure/crabackendnew)
- **MongoDB**: [crossroads](https://cloud.mongodb.com/v2/67409333c57fd25066f95346#/metrics/replicaSet/67416410f928d20ecce8b4fc/explorer/crossroads)

---

## Modules
The admin panel is divided into three main modules:

1. **Trip Management**
2. **Blog Management**
3. **Trip Dates Management**

---

### 1. Trip Management
This module provides functionality for managing trips in the system. It includes:

- **Addition of Trips**: Allows administrators to add new trips to the platform.  
- **Removal of Trips**: Enables deletion of existing trips from the platform.  
- **Updating Trips**: Supports modifying trip details.  

#### **Important Reminder**:
When updating or deleting trips, always use the **exact same trip name** as already present in the system. For example, if the trip is titled:  
*"K2 Base Camp - A Scenic Walk Through the Mountains"*,  
ensure that the title is entered **exactly as it is** when performing updates or deletions.  
Any mismatch in the title will lead to errors or failure in executing the operation.

#### **Adding Maps to Trips**:
To embed maps into trips, follow these steps:  
1. Open the desired location pin on the map.  
2. Click on **Settings** or the **three dots** menu.  
3. Select **"Embed Code"** from the options.  
4. Copy the provided embed code.  
5. Paste the copied code into the **"Map Input"** field in the admin panel.  

---

### 2. Blog Management
This module focuses on handling blog content for the platform. It includes:

- **Addition of Blogs**: Administrators can create and publish new blogs.  
- **Updating Blogs**: Edit and modify existing blog content.  
- **Removal of Blogs**: Delete outdated or irrelevant blogs.  

---

### 3. Trip Dates Management
The dates management module allows the administrator to handle booking availability and pricing for trips. Key features include:

- **Adding Booking Dates**: Define start and end dates for trip availability.  
- **Deleting Booking Dates**: Remove unavailable or outdated dates.  
- **Setting Prices**: Configure pricing for specific date ranges.  

---

## Key Considerations
- **Category Restrictions**: Avoid adding categories to trips under *Wellness Excursion* to prevent compatibility issues within the admin panel.  
- **Accurate Trip Titles**: Ensure that trip titles entered during updates or deletions match the existing titles exactly, including capitalization, punctuation, and spacing.  
- **Backend Hosting**: Ensure the backend (hosted on Vercel) is running for the admin panel to function properly.  
- **Data Updates**: Any changes made through the admin panel will directly affect the frontend user experience, so ensure accuracy during modifications.  

---

  

For any issues or support, refer to the [GitHub Repository](https://github.com/CrossroadsAdventure/crabackendnew) or contact the development team.
