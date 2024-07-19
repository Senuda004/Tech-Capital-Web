import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Samantha Lee",
    designation: "CEO of Innovatech Solutions",
    image: image1,
    content:
      "Tech Capital Managed Services has revolutionized our IT operations. Their unparalleled support and proactive service have truly set them apart. We couldn't be happier with the results!",
  },
  {
    id: 2,
    name: "Michael Roberts",
    designation: "Director of Operations at GreenScape Co.",
    image: image2,
    content:
      "Since partnering with Tech Capital, our system downtime has decreased dramatically. Their team is knowledgeable, responsive, and extremely reliable. Highly recommended!",
  },
  {
    id: 3,
    name: "Anita Desai",
    designation: "CTO of FastTrack Technologies",
    image: image1,
    content:
      "Tech Capital's resource outsourcing has allowed us to scale rapidly and effectively. Their expertise and flexible solutions are exactly what we needed to push our projects forward.",
  },
  {
    id: 4,
    name: "Tom Clarkson",
    designation: "Managing Director at Luxe Apparel",
    image: image2,
    content:
      "We rely on Tech Capital for our complete IT security and compliance, and they have never let us down. Their attention to detail and proactive strategies are top-notch.",
  },
];
