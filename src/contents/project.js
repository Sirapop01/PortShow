import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import picExp from "/src/assets/experience.png";


export const data = [
    {
        date: "2024",
        title: "ShirtStore",
        link: "https://github.com/Sirapop01/ShirtStore.git",
        materials: [
            { type: faGithub, link: "https://github.com/Sirapop01/Booking.git" },
            { type: faYoutube, link: "http://localhost:5173/" },
        ],
        descriptions: [
           " A frontend-driven online shirt showcase. Users can browse product listings and view product details."
        ],
        skills: [
            ["React"],
            ["MongoDB", "Python"]
        ],
        picture: picExp,
    },
    {
        date: "2025",
        title: "Booking System “MacthWeb”",
        link: "https://github.com/Sirapop01/Booking.git",
        materials: [
            { type: faGithub, link: "https://github.com/Sirapop01/Booking.git" },
            { type: faYoutube, link: "http://localhost:5173/" },
        ],
        descriptions: [
            "A full-featured sports field booking system with real-time chat, payment uploads, admin/owner dashboards, and financial reports.",
        ],
        skills: [
            ["React"],
            ["Node.js"," Express.js"," MongoDB", "JWT", "Socket.io"]
        ],
        picture: picExp,
    },

]