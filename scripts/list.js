fetch('Data/links.json')
.then(response => response.json())
.then(data => {
    // Get the lessons array from the JSON data
    const lessons = data.lessons;

    // console.log(lessons)
    // Get the ul element where we'll populate the list
    const lessonList = document.getElementById('lesson-list');

    // Iterate over each lesson
    lessons.forEach(lesson => {
        // Create a new list item for the lesson
        const listItem = document.createElement('li');

        // Create a paragraph element for the lesson
        const lessonParagraph = document.createElement('p');
        lessonParagraph.textContent = `Lesson ${lesson.lesson}:`;

        // Append the lesson paragraph to the list item
        listItem.appendChild(lessonParagraph);

        // Iterate over each link in the lesson
        lesson.links.forEach(link => {
            // Create a link element for each link
            const linkElement = document.createElement('a');
            linkElement.href = 'https://uplandwave.github.io/wdd230/' + link.url;
            linkElement.textContent = link.title;
            linkElement.target = "_blank"; // Open link in a new tab

            // Append the link element to the list item
            listItem.appendChild(linkElement);

            // Add a space between links
            listItem.appendChild(document.createTextNode(' '));
        });

        // Append the list item to the ul element
        lessonList.appendChild(listItem);
    });
})
.catch(error => console.error('Error fetching JSON:', error));