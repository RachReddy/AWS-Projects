// Dynamically insert social media links
const socialLinks = [
  { url: "mailto:rachanareddy6024@gmail.com", icon: "https://rachanasimages.s3.ap-south-1.amazonaws.com/gmail.png" , alt: "Email" },
  { url: "https://www.linkedin.com/in/rachanareddynv/", icon: "https://rachanasimages.s3.ap-south-1.amazonaws.com/linkedin.png", alt: "LinkedIn" },
  { url: "https://github.com/RachReddy", icon: "https://rachanasimages.s3.ap-south-1.amazonaws.com/github.png", alt: "GitHub" }
];

const socialLinksContainer = document.getElementById("social-links");

socialLinks.forEach(link => {
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";

  const image = document.createElement("img");
  image.src = link.icon;
  image.alt = link.alt;

  anchor.appendChild(image);
  socialLinksContainer.appendChild(anchor);
});
