interface Place {
  title: string;
  story: string;
  location: string;
  imgUrl: string;
}

const places: Place[] = [
  {
    title: 'Space Needle',
    story:
      'The Space Needle was built for the 1962 World’s Fair and has since become Seattle’s most iconic landmark. It stands at 605 feet tall and offers a 360-degree view of the city, Puget Sound, and even Mount Rainier on clear days.',
    location: '400 Broad St, Seattle, WA',
    imgUrl:
      'https://media.cntraveler.com/photos/5afb5196273cc36e442bde77/16:9/w_2560,c_limit/Space-Needle_Courtesy-Visit-Seattle_Destination-Slides----017.jpg.jpg', // Replace with the actual image URL
  },
  {
    title: 'Pike Place Market',
    story:
      'Opened in 1907, Pike Place Market is one of the oldest continuously operated public markets in the United States. It’s famous for its seafood stalls, fresh produce, artisan goods, and the original Starbucks.',
    location: '85 Pike St, Seattle, WA',
    imgUrl:
      'https://www.pikeplacemarket.org/wp-content/uploads/2023/08/Summer-Pike_Place_Market-sign-e1691771892164-1024x709.jpg', // Replace with the actual image URL
  },
  {
    title: 'Chihuly Garden and Glass',
    story:
      'This museum showcases the breathtaking glass sculptures of Dale Chihuly. The vibrant colors and organic shapes of the glass art, set against the lush garden, make it a must-visit for art lovers.',
    location: '305 Harrison St, Seattle, WA',
    imgUrl: 'https://refractseattle.org/wp-content/uploads/2024/04/CGG.jpg', // Replace with the actual image URL
  },
  {
    title: 'Seattle Great Wheel',
    story:
      'Located on Pier 57, the Seattle Great Wheel is one of the largest Ferris wheels on the West Coast. It offers stunning views of the Seattle skyline, Elliott Bay, and the Olympic Mountains.',
    location: '1301 Alaskan Way, Seattle, WA',
    imgUrl:
      'https://transform.octanecdn.com/crop/1600x900/https://octanecdn.com/minersengine/seattlegreatwheelnew_197659217.jpg', // Replace with the actual image URL
  },
  {
    title: 'The Museum of Flight (Airplane Museum)',
    story:
      "The Museum of Flight is one of the largest air and space museums in the world. It features an extensive collection of historic aircraft, spacecraft, and aviation exhibits. Highlights include the Space Shuttle Trainer, a Concorde jet, and the original Boeing manufacturing plant, known as the 'Red Barn.'",
    location: '9404 E Marginal Way S, Seattle, WA',
    imgUrl:
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/171000/171171-Museum-Of-Flight.jpg', // Replace with the actual image URL
  },
  {
    title: 'Seattle Underground',
    story:
      "The Seattle Underground is a hidden network of underground passageways beneath the streets of Pioneer Square. After a fire in 1889, the city was rebuilt with raised streets, leaving the original storefronts below. Guided tours provide a glimpse into Seattle's past and its underground history.",
    location: 'Pioneer Square, Seattle, WA',
    imgUrl: 'https://media.graphassets.com/K2Qa3dL9S1KH3wUkFLFj', // Replace with the actual image URL
  },
  // Add more entries here following the same structure
];

export default places;
