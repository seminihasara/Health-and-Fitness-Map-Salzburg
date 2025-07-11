Health Facilities map in Salzburg

📌 Project Description

This web map shows the health facilties distribution in Salzburg. This shows the Health facilities including Hospitals, Pharmacies, Dental clinics and the Doctor consulation office(HausArzt). This map will helps to identify the user about the distribution of helath facilities and basic details of the facility. Especially this map will help them to detect the clusters of medical services.

Project Justification :

Health is an important sector for all the living being. It is impprtant to acesss the Health facilities in convienient distance and know the location of facilities. This map helps the reader to identify the distribution of helath services and the basic data about them.
Since Salzburg is a tourism based town center it will be important for the tourists and visitors to know the health facility distribution in the  Salzburg town center.

## Objective
In Salzburg, this map aims to:

- Empower residents and tourists by helping them to easily identify the health care locations including  Hospitals, Pharmacies, Dentas and Doctor Consultation Locations(Channeling Centers)
- To have basic information about the facility including opening hours, website


## 🎯 Target User Category 
This map is designed for:
- Residents of Salzburg 
- Foreigners who are interested about the helath care facilities
  
- The expected age category of the user group is people who are more than 18 years old and who are interseted on the helath facilities in the Salzburg town area.


## 🗺️ Map Features
- Base Map
  Here i have use the basemap provides by the leaflet. I have selected the CartoDB.Voyager base map. It shows important label including the city names and shows physical features like green ares and water body areas in a light color.This wll helps to identify the user e the loaction of helath facilities (Especially the residents since they are familiar with the existing landmarks) . It is important to highlight the key details of Health facilities than the base map.

- I have use following point layers and the details for pop up content (attribute) as follows.
-  Pharmacies - Name and the Opening Hours
-  Dental Clinic- Name, opening Hours
-  Doctors - Name, Speciality, Opening Hours, Email and Website
-  Hospital - Name

  
- Interactive popups and mouse-over highlights
  
- Layer control to toggle different categories
  
- Icons chosen to reflect different facility types:
  
- Red color for Hospital symbol (cross)
- Medicine icon for Pharmacy
- Tooth icon for Dental Clinic
- Stethoscope for Doctor consultation 

## 🗂️ Data Sources

- OpenStreetMap data via Overpass Turbo was used to download the Pharmacies , Dental Clinic , Doctors, Hospital
  
- For the icons i have used the following website
https://www.flaticon.com/free-icons/free


## 🛠️ Methodology
1. Prepared GeoJSON data files using Overpass Turbo.
2. Designed the map interface with Leaflet.
3. Styled layers using  JavaScript.
4. Added interactivity: popups
5. Hosted the map using GitHub Page.

## 🎨 Design Choices
- Icons chosen to reflect different facility types including hospital, pharmacy, Doctor consulation office and dentals.
  Here I have used the wellknown symbols for the hospitals since it is easy for the user to distinctive the symbol
  ex: Red color for Hospital
  But for the pharamcy I changed the symbol which shows medical dose.
  For dentals  I have used an icon suit for dental facility (Tooth) . This helps the user to easily recognise it.
  
- Intuitive layer control placement for ease of use
  Here the user can customize the layers they want to see in the map.
  Ex: If they just need to see the Hospitals and the Pharmacies they can decideded the layers to view. 

##🛠️Potential improvement
- Based on the Data availability I just used the opening hours of the pharmacy, Dental clinic and the Doctor channeling centers . since here every resident is insured if we can add the type of the insurance for dental clinc and Doctors chanelling centers it will be useful for the reader .
- If we can show up the pet friendly, Requirement of Appointments like data it will be more important for the user.
-Since we have large amount of doctor channelling data it is difficult for the user at the first sight. If we can use one symbol for a cluster at a certain zoom level, it will be good. I tried to add it. But it does not work.
- If We can show the location of the user and the distance to the facility, it will be useful as well.


