document.getElementById("resumeForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  const prompt = `Create a professional resume for the following person:

Name: ${name}
Email: ${email}
Education: ${education}
Skills: ${skills}
Experience: ${experience}

Format it as a clean and concise resume.`;

  document.getElementById("output").innerText = prompt;
});
