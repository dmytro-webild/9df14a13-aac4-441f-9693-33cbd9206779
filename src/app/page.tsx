"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmall"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Collection",          id: "products"},
        {
          name: "Quality",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="EverBloom"
      button={{
          text: "Get Started",          href: "#contact"
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Timeless Beauty, Forever Fresh"
      description="Discover our collection of hyper-realistic artificial flowers. Handcrafted with precision to bring everlasting elegance to every space in your home."
      kpis={[
        {
          value: "100%",          label: "Lifelike Petals"},
        {
          value: "24h",          label: "Shipping Support"},
        {
          value: "5k+",          label: "Happy Clients"},
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Shop Collection",          href: "#products"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-bouquet-with-pink-roses-green-leaves_181624-25521.jpg"
      imageAlt="EverBloom elegant flower display"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Crafted for Perfection"
      description="Our flowers aren't just artificial—they are masterpieces. We source premium materials to replicate the exact texture, weight, and color of nature's finest blossoms, ensuring they remain beautiful year-round."
      bulletPoints={[
        {
          title: "UV Resistant",          description: "Color stability that lasts under direct sunlight."},
        {
          title: "Hypoallergenic",          description: "Perfect for pollen-sensitive households."},
        {
          title: "Eco-Friendly",          description: "Sustainable materials that reduce waste."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/making-bouquets_23-2148013623.jpg"
      imageAlt="Crafting process for silk flowers"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Botanical Accuracy",          description: "Meticulously molded after real species.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bouquet-with-pink-roses-green-leaves_181624-25521.jpg",          imageAlt: "elegant artificial flower bouquet"},
        {
          id: "2",          title: "Maintenance Free",          description: "Forget watering, trimming, or wilting.",          imageSrc: "http://img.b2bpic.net/free-photo/making-bouquets_23-2148013623.jpg",          imageAlt: "close up realistic silk petal texture"},
        {
          id: "3",          title: "Luxury Feel",          description: "Premium silk and velvet base fabrics.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-valentine-s-day-concept-with-roses_23-2148752585.jpg",          imageAlt: "artificial white peony arrangement"},
      ]}
      title="Why EverBloom?"
      description="What sets our botanical replicas apart from traditional decor."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "Peony Perfection",          price: "$89",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-valentine-s-day-concept-with-roses_23-2148752585.jpg"},
        {
          id: "2",          name: "Velvet Rose",          price: "$75",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-pretty-boho-flowers-bouquet_23-2149526049.jpg"},
        {
          id: "3",          name: "Lavender Dream",          price: "$65",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-pink-roses-eustoma-bouquet-old-wooden-shutter-background_23-2147940450.jpg"},
      ]}
      title="Shop Our Collection"
      description="Select from our curated range of exquisite bouquets."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Emma R.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-enjoying-spring_1098-726.jpg"},
        {
          id: "2",          name: "Liam K.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-indoors_23-2149927580.jpg"},
        {
          id: "3",          name: "Sophia B.",          imageSrc: "http://img.b2bpic.net/free-photo/expressive-woman-posing-outdoor_344912-2911.jpg"},
        {
          id: "4",          name: "Oliver T.",          imageSrc: "http://img.b2bpic.net/free-photo/attractive-african-woman-florist-smiling-making-bouquet-flowers-workplace-white-wall_176420-12267.jpg"},
        {
          id: "5",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-enjoying-spring_1098-726.jpg"},
      ]}
      cardTitle="Loved by Decorators"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Are they safe for pets?",          content: "Yes, our flowers are made from non-toxic, pet-safe materials."},
        {
          id: "2",          title: "How do I clean them?",          content: "Simply wipe with a damp microfiber cloth occasionally."},
        {
          id: "3",          title: "Do they look fake?",          content: "Our proprietary molding ensures lifelike details and texture."},
      ]}
      title="Frequently Asked"
      description="Answers to common questions about our flowers."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Get Updates"
      title="Stay Updated"
      description="Join our newsletter for exclusive floral collections."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "All Bouquets",              href: "#products"},
            {
              label: "Bestsellers",              href: "#products"},
          ],
        },
        {
          title: "EverBloom",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Quality Promise",              href: "#features"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
