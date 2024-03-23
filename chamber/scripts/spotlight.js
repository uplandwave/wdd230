fetch('./data/members.json')
.then(response => response.json())
.then(data => {
  const spotlights = ['spotlight-one', 'spotlight-two', 'spotlight-three']; //im just looping though these divs and replacing the content
  let populatedSpotlights = 0;
  data.forEach(item => {
    if (populatedSpotlights < 3 && (item.membershipLevel === 'Gold' || item.membershipLevel === 'Silver')) { // here only gold or silver members are selected
      const divId = spotlights[populatedSpotlights];
      const div = document.getElementById(divId);
      if (div) {
        div.innerHTML = `
          <h2>${item.name}</h2>
          <p>${item.otherInfo}</p>

          <p><a href="tel:${item.phone}">${item.phone}</a></p>
          <p><a href="${item.website}">Website</a></p>
        `;
        populatedSpotlights++;
      }
    }
  });
});