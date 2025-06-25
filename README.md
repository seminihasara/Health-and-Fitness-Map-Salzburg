# Health and Wellness Map in Salzburg

📌 Project Description

This web map highlights health and wellness locations in Salzburg. The Wellness criteria is covered through the parks and fitness center data. The Health Sector is covered through the Hospitals and Pharmacy locations.

Project Justification :

WHO’s *Urban Green Spaces and Health* (2016) outlines how access to green areas alleviates stress, promotes physical activity, and lowers chronic-disease risk among people. 
Source: https://www.who.int/europe/publications/i/item/WHO-EURO-2016-3352-43111-60341?utm_source=chatgpt.com

As per the UN predictions the world population is aging and in 2050 it will reach 1.5 Billion. It has been found by the access to green spaces has directly influenced for the Mental helath. This age
Category is highly assocaiated with both health related amenities especially hospitals and pharmacies and intergaring the wellness facilities including parks will be imprtant for thier menatl helath improvement.
source: https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196%2823%2900212-7/fulltext?utm_source=chatgpt.com

## Objective
In Salzburg, a city known for its sustainable planning and natural surroundings, this map aims to:

- Empower residents and tourists by helping them easily locate both healthcare and wellness options.
- Support public health planning by visualizing the spatial distribution of such facilities.


## 🎯 Target User Category 
This map is designed for:
- Residents of Salzburg interested in wellness activities
- People looking for health-related facilities espcially adults more than 40years
- The age category of the user group is 18 upto 65 who are interseted on the helath and wellness facilities in the Salzburg town area.



## 🗺️ Map Features
- Base Map
  Here i have use the basemaps provides by the leaflet. I have selected the CartoDB.Voyager base map. It shows important label inclusing the city names and shows physical features like green ares and water body ares in a light color. It is important to highlight the key details over the base map. 
  And also in the maximum zoom level it shows the road name, whcih will be useful for the user.
  https://leaflet-extras.github.io/leaflet-providers/preview/
  
- GeoJSON polygon layers for parks, point layer for Fitness centers,Hospitals and Pharmacies
  Polygon Layer - Parks
  Point Layer -  Hospitals, Pharmacy and Fitness centers
  
- Interactive popups and mouse-over highlights
  The Name of the Park, Hospital, Fitness center are displayed while both name and opening hours of the Pharmacy layers is displayed.
- Layer control to toggle different categories
- Custom icons and color schemes for better visual distinction

## 🗂️ Data Sources

- OpenStreetMap data via Overpass Turbo

## 🛠️ Methodology
1. Prepared GeoJSON data files using Overpass Turbo.
2. Designed the map interface with Leaflet.
3. Styled layers using  JavaScript.
4. Added interactivity: popups, mouseover effects 
5. Hosted the map using GitHub Pages.

## 🎨 Design Choices
- Soft green for showing the green spaces 
- Icons chosen to reflect different facility types including hospital, pharmacy and wellness centers
  Here i have used the wellknown symbols for the hospitals since it is easy for the user to distinctive the symbol
  ex: Red color plus sin for Hospital
  But for the pharamcy i changed the symbol which shows medical dose.

  The icons were downlaoded through 
  
- Intuitive layer control placement for ease of use
  Here the user can customize the layers they want to see in the map.
  Ex: If they just need to see the Hospitals and the Pharmacies they can decideded the layers to view. 

##🛠️Potential improvement
- Based on the Data availability I just used the opening housrs of the pharmacy layer . If we can show the opening hours of the fitness centers as well it will be useful
- If we can show up the whel cahair accesibility, pet friendly like data it will be more important for the user as well. 
