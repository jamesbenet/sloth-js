# Project Overview

## Reaction

You'll get hooked... ![sloth pic](https://unsplash.com/photos/qbsdrZZ0M4c "photo by Sophia Müller").

## Project Description

Reaction (AKA Sloth JS, title in progress) mimics an e-commerce/shopping site that sells a unique product: React components, JSX, hooks, props, etc. It is built with React and Airtable. The user will have access to the current catalog of items available, including the ability to view each item's description/definition, reviews and price. User will also be able to contribute their own product suggestions via a form as well as view previous suggestions.

## Wireframes

Homepage contains a header with site navigation, including links to: About section and Form for user(customer) suggestions. Page body consists of listings for several of the products, and a few buttons for a)bestsellers b)new items c) view all. Form page consist of form and previous form submissions listed below it.

https://whimsical.com/reaction-3UYo7hbDYjRjk3sTMhe5VC

## Component Hierarchy
https://whimsical.com/reaction-components-6vzEhHEnF59vAP7NCV5XWh

## API and Data Sample

```json
{
    "records": [
        {
            "id": "recxoyncDHSUgXQ3W",
            "fields": {
                "Description": "Function, Import, Return, Export; if you want to create a functional component",
                "Name": "F.I.R.E.",
                "Price": 25,
                "Category": "concept"
            },
            "createdTime": "2021-05-06T18:40:05.000Z"
        },
        {
            "id": "recI9mSZ2IOQUkYwY",
            "fields": {
                "Description": "used to pass properties to components",
                "Name": "props",
                "Price": 14,
                "Category": "definition"
            },
            "createdTime": "2021-05-06T18:40:05.000Z"
        },
        {
            "id": "recQ0FTmn1w4oW3r9",
            "fields": {
                "Description": "syntax used to write HTML in JavaScript",
                "Name": "JSX",
                "Price": 12,
                "Category": "definition"
            },
            "createdTime": "2021-05-06T18:40:05.000Z"
        }
    ],
    "offset": "recQ0FTmn1w4oW3r9"
}
```

### MVP/PostMVP

#### MVP 

-At least 6 sperate, rendered components
- Use Axios with external API(Airtable) to get product data 
- Render product data on page
- Implement a form for user to submit suggestions for new products
- Use Axios to Post this new data to API, and render on page
- Links/clickable icons/buttons on homepage and in Nav 
- Use React Router for route structure

#### PostMVP  

- Add a shopping cart
- Ability to like/favorite products
- collaborate for improved UI
- searchbar for products
- add links to products to more improduct info

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|May 6| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 7| Project Approval | Incomplete
|May 8-9| Core Application Structure (HTML, CSS, etc.) | Incomplete
|May 10| Pseudocode / actual code | Incomplete
|May 11-12| Initial Clickable Model  | Incomplete
|May 13| MVP | Incomplete
|May 14| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Airtable setup | H | .5hrs|  |  |
| Proposal| H | 3hrs|  |  |
| Nav and Routing| H | 3hrs|  |  |
| Buttons/Icons| H | 3hrs|  |  |
| Foooter links/content| H | 2hrs|  |  |
| Building Form | H | 1hr|  |  |
| Working with API | H | 3hrs|  |  |
| Create Product Data | H | 3hrs | :---: | :---: |
| Tweak Product Data | H | 1hr | :---: | :---: |
| CSS/Styling homepage| H |  3hrs | :---: | :---: |
| CSS/Styling form page| H |  3hrs | :---: | :---: |
| Get/Post Data | H |  4hrs | :---: | :---: |
| Improve site/code structure | H |  3hrs | :---: | :---: |
| Total | H | 32.5hrs|  |  |
Proposal Nav and Routing
## SWOT Analysis

### Strengths:

I have one a good amount of research on the functionality of what I consider to be good e-commerce sites, and the appearance/functionality that I want to mimic is all possible with previous course material. 

### Weaknesses: 

I still have trouble fully comprehending some of the material we've covered so I will want to identify and address any "knowledge gaps" early on as they relate to what I'm trying to do so that as soon as I build the basic structure I can focus on any presumed difficulties in implementation I might have. 

### Opportunities: 

One of the reasons that I chose this project/priduct is that it allows me to catalog the key terms and concepts we've learned over the past 2 weeks. It also allows me to get some experience building a job-ready skill: implementing a responsive e-commerce site. 

### Threats: 

Time management. Each day I plan to create a list of do's and dont's (things that went well/bad) so that I can address them in a timely fashion. Some days this list may be created by mid-day! (We all reserved the right to start our day over at anytime, right?)
