function generateStory() {
  const prompt = document.getElementById("prompt").value.trim();
  const storyDiv = document.getElementById("story");

  if (!prompt) {
    storyDiv.innerText = "Please enter a topic to generate a story!";
    return;
  }

  const templates = [
    "In the heart of a silent forest, a mystical artist woke up in someone else's memory.",
    "In the shadows of the city, a book that eats stories accidentally started a rebellion.",
    "Deep within the stars, a time traveler accidentally started a rebellion.",
    "In a forgotten realm, a runaway AI met a future version of themselves.",
    "High above the clouds, a book that eats stories found a map that rewrote itself.",
    "Within a buried temple, a dream architect became invisible every night.",
    "In the heart of a silent forest, an enchanted sword accidentally started a rebellion.",
    "High above the clouds, a clever student accidentally started a rebellion.",
    "As the sun vanished, a mystical artist woke up in someone else's memory.",
    "Deep within the stars, a runaway AI spoke to animals.",
    "One stormy evening, a space janitor became invisible every night.",
    "In a forgotten realm, a mystical artist discovered a door to another world.",
    "Underneath the crimson sky, a fearless detective found a map that rewrote itself.",
    "Among the ruins of time, a curious child heard whispers from the stars.",
    "In the heart of a silent forest, a clever student uncovered a cursed secret.",
    "Amidst whispering winds, a brave fox accidentally started a rebellion.",
    "Just beyond the moon, a shadow hunter woke up in someone else's memory.",
    "At the edge of reality, a cloud whisperer realized they could control shadows.",
    "Within a buried temple, a time traveler uncovered a cursed secret.",
    "As the sun vanished, a potion master became invisible every night.",
    "High above the clouds, a talking robot found a map that rewrote itself.",
    "In a forgotten realm, a stargazing farmer spoke to animals.",
    "One stormy evening, a dragon rider accidentally started a rebellion.",
    "Underneath the crimson sky, a dream architect discovered a door to another world.",
    "On a hidden island, a runaway AI realized they could control shadows.",
    "In the shadows of the city, a lonely astronaut uncovered a cursed secret.",
    "Amidst whispering winds, a mystical artist found a map that rewrote itself.",
    "In the heart of a silent forest, a clever student met a future version of themselves.",
    "In a forgotten realm, a book that eats stories woke up in someone else's memory.",
    "On a hidden island, a brave fox accidentally started a rebellion.",
    "In the heart of a silent forest, a space janitor spoke to animals.",
    "Within a buried temple, a haunted violin uncovered a cursed secret.",
    "One stormy evening, a cloud whisperer met a future version of themselves.",
    "Among the ruins of time, a mystical artist became invisible every night.",
    "Deep within the stars, a potion master found a map that rewrote itself.",
    "High above the clouds, a clever student uncovered a cursed secret.",
    "At the edge of reality, a brave fox discovered a door to another world.",
    "Amidst whispering winds, a shadow hunter spoke to animals.",
    "In the heart of a silent forest, a mystical artist realized they could control shadows.",
    "Just beyond the moon, a time traveler woke up in someone else's memory.",
    "Underneath the crimson sky, a dream architect became invisible every night.",
    "In the shadows of the city, a potion master accidentally started a rebellion.",
    "As the sun vanished, a cloud whisperer discovered a door to another world.",
    "Deep within the stars, a curious child met a future version of themselves.",
    "One stormy evening, a talking robot realized they could control shadows.",
    "In a forgotten realm, a dragon rider found a map that rewrote itself.",
    "Within a buried temple, a mystical artist spoke to animals.",
    "In the heart of a silent forest, a space janitor met a future version of themselves.",
    "On a hidden island, a clever student accidentally started a rebellion.",
    "Among the ruins of time, a fearless detective woke up in someone else's memory.",
    "Just beyond the moon, a dream architect uncovered a cursed secret.",
    "At the edge of reality, a brave fox became invisible every night.",
    "One stormy evening, a lonely astronaut heard whispers from the stars.",
    "Deep within the stars, a mystical artist discovered a door to another world.",
    "In the shadows of the city, a time traveler realized they could control shadows.",
    "Within a buried temple, a potion master woke up in someone else's memory.",
    "On a hidden island, a talking robot accidentally started a rebellion.",
    "High above the clouds, a clever student spoke to animals.",
    "In a forgotten realm, a book that eats stories uncovered a cursed secret.",
    "Amidst whispering winds, a haunted violin found a map that rewrote itself.",
    "As the sun vanished, a dragon rider realized they could control shadows.",
    "Just beyond the moon, a brave fox met a future version of themselves.",
    "At the edge of reality, a mystical artist became invisible every night.",
    "In the heart of a silent forest, a cloud whisperer discovered a door to another world.",
    "Among the ruins of time, a dream architect woke up in someone else's memory.",
    "Underneath the crimson sky, a clever student spoke to animals.",
    "In a forgotten realm, a fearless detective found a map that rewrote itself.",
    "One stormy evening, a stargazing farmer realized they could control shadows.",
    "In the shadows of the city, a talking robot uncovered a cursed secret.",
    "High above the clouds, a runaway AI woke up in someone else's memory.",
    "Within a buried temple, a mystical artist accidentally started a rebellion.",
    "On a hidden island, a potion master discovered a door to another world.",
    "At the edge of reality, a time traveler spoke to animals.",
    "Deep within the stars, a dream architect realized they could control shadows.",
    "In a forgotten realm, a curious child became invisible every night.",
    "One stormy evening, a brave fox uncovered a cursed secret.",
    "As the sun vanished, a clever student found a map that rewrote itself.",
    "Just beyond the moon, a book that eats stories met a future version of themselves.",
    "In the heart of a silent forest, a mystical artist spoke to animals.",
    "Among the ruins of time, a shadow hunter realized they could control shadows.",
    "Underneath the crimson sky, a talking robot accidentally started a rebellion.",
    "High above the clouds, a time traveler discovered a door to another world.",
    "Amidst whispering winds, a mystical artist became invisible every night.",
    "On a hidden island, a fearless detective woke up in someone else's memory.",
    "In the shadows of the city, a cloud whisperer met a future version of themselves.",
    "One stormy evening, a brave fox spoke to animals.",
    "Just beyond the moon, a book that eats stories realized they could control shadows.",
    "At the edge of reality, a potion master accidentally started a rebellion.",
    "Within a buried temple, a mystical artist woke up in someone else's memory.",
    "In a forgotten realm, a time traveler met a future version of themselves.",
    "Among the ruins of time, a clever student discovered a door to another world.",
    "High above the clouds, a stargazing farmer uncovered a cursed secret.",
    "As the sun vanished, a dragon rider found a map that rewrote itself.",
    "Underneath the crimson sky, a dream architect realized they could control shadows.",
    "One stormy evening, a mystical artist spoke to animals.",
    "In the heart of a silent forest, a clever student became invisible every night.",
    "Just beyond the moon, a brave fox accidentally started a rebellion.",
    "On a hidden island, a shadow hunter uncovered a cursed secret.",
    "Amidst whispering winds, a mystical artist met a future version of themselves.",
    "Deep within the stars, a talking robot found a map that rewrote itself.",
    "Within a buried temple, a fearless detective realized they could control shadows.",
    "At the edge of reality, a mystical artist discovered a door to another world."
  ];

  const randomIndex = Math.floor(Math.random() * templates.length);
  const baseStory = templates[randomIndex];

  // Replace default character with the custom prompt
  const finalStory = baseStory.replace(/a\s[\w\s]+/, `a ${prompt}`);

  storyDiv.innerText = finalStory;
}

function speakStory() {
  const story = document.getElementById("story").innerText;
  if (!story) {
    alert("Please generate a story first!");
    return;
  }

  const speech = new SpeechSynthesisUtterance(story);
  speech.lang = "en-US";
  speech.rate = 1;
  window.speechSynthesis.speak(speech);
}
