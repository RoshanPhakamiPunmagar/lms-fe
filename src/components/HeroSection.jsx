// src/components/HeroSection.jsx
import React from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { COLORS } from "../theme";

const slides = [
  {
    id: 1,
    title: "“A room without books is like a body without a soul.”",
    desc: "Borrow, read, and return — a simple library experience.",
    image: "https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg",
  },
  {
    id: 2,
    title: "Discover your next favourite author.",
    desc: "Search across our curated collection.",
    image: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg",
  },
  {
    id: 3,
    title: "Manage your borrowed books easily.",
    desc: "Track history, due dates, and reviews.",
    image: "https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg",
  },
];

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: COLORS.background }}>
      <Carousel interval={5000} controls indicators>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "380px",
                position: "relative",
              }}
            >
              {/* overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(6,46,33,0.75) 0%, rgba(6,46,33,0.1) 75%)",
                }}
              ></div>

              <Container
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "4rem 0 4.5rem 0",
                  color: "#fff",
                  maxWidth: "720px",
                }}
              >
                <h1 style={{ fontWeight: 700 }}>{slide.title}</h1>
                <p className="mt-3" style={{ fontSize: "1.05rem" }}>
                  {slide.desc}
                </p>
                <Button
                  style={{
                    backgroundColor: COLORS.accent,
                    borderColor: COLORS.accent,
                    marginTop: "1rem",
                  }}
                >
                  Explore Books
                </Button>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
