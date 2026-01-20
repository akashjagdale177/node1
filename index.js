const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('
           <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">

<!-- Include Header -->
<header class="bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 text-white p-5 shadow-lg">
  <nav class="max-w-6xl mx-auto flex justify-between items-center">
    <h1 class="text-3xl font-bold">My Portfolio</h1>
    <ul class="flex gap-6 text-lg font-medium">
      <li><a href="index.html" class="hover:underline">Home</a></li>
      <li><a href="about.html" class="hover:underline">About</a></li>
      <li><a href="services.html" class="hover:underline">Services</a></li>
      <li><a href="gallery.html" class="hover:underline">Gallery</a></li>
      <li><a href="contact.html" class="hover:underline">Contact</a></li>
    </ul>
  </nav>
</header>

<!-- Hero Section -->
<section class="text-center py-32 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 text-white">
  <h2 class="text-5xl font-extrabold">Hi, I'm <span class="text-yellow-300">Your Name</span></h2>
  <p class="text-xl mt-4">I'm a Passionate Developer Creating Modern Web Experiences</p>
  <a href="contact.html" class="mt-8 inline-block bg-white text-black px-8 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-100">Hire Me</a>
</section>

<!-- Footer -->
<footer class="bg-gray-800 text-center text-white p-4 mt-10">
  <p>© 2025 My Portfolio | All Rights Reserved.</p>
</footer>
</body>
</html>
')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
