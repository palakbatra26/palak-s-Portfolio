
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Dr.Palwinder Kaur ",
    role: "Assistant Professor At Gndec",
    content: "I have had the pleasure of teaching Palak , and I can confidently say that she stand out as a highly motivated and capable student. She possesses solid problem-solving skills and a clear grasp of core concepts. She consistently demonstrated a strong learning attitude, always eager to delve deeper into the subject matter..",
    avatar: "/pal.jpg"
  },
  {
    id: 2,
    name: "Dr.Kamaljeet Kaur  ",
    role: "Assistant Professor At Gndec",
    content: "Teaching  you as a student was a real pleasure. You consistently demonstrated curiosity, dedication, and a strong work ethic. Your thoughtful questions and willingness to push your technical abilities stood out in every session. You’re the kind of learner who makes teaching truly rewarding.",
    avatar: "https://gndec.ac.in/images/WhatsApp%20Image%202021-04-08%20at%2011.55.36%20AM.jpeg"
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Project Manager at WebSolutions",
    content: "I had the pleasure of working with Palak on a complex web application project. Her technical expertise and problem-solving skills were invaluable to the success of our project.",
    avatar: "https://www.shutterstock.com/image-vector/user-icon-vector-female-person-260nw-770781427.jpg"
  },
  {
    id: 4,
    name: "Rahul Sharma",
    role: "Senior Developer at TechCorp",
    content: "Palak is an exceptional developer with great attention to detail. Her ability to quickly adapt to new technologies is impressive. Working with her on our project was a seamless experience.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6bTUsxBkiTZRAyIXuu57qwG4SWpxpoEPzg&s"
  },
  {
    id: 5,
    name: "Arshdeep  kaur",
    role: "Btech IT UG",
    content: "Palak is a rare blend of creativity and intellect. Her problem-solving skills, sharp attention to detail, and never-settle attitude make her stand out in any team. She doesn't just complete tasks — she elevates them.",
    avatar: "/a.jpg"
  },
  {
    id: 6,
    name: "Mehak Kaur",
    role: "BCA UG",
    content: "Palak is a fantastic developer—creative, hardworking, and always brings positive energy to the team. You can always count on her to get things done with a smile!.",
    avatar: "/m.jpg"
  },
  {
    id: 7,
    name: "Suraj Passi",
    role: "Btech IT UG",
    content: "Absolutely thrilled with the results! The journey was smooth from start to finish, and the final outcome exceeded my expectations. Working with Palak was a game-changer — her creativity, professionalism, and attention to detail truly stood out.",
    avatar: "/s.jpg"
  },
  {
    id: 8,
    name: "Rupinder Kaur ",
    role: "Btech IT UG",
    content: "Whenever I had doubts, Palak was always there to help — calm, clear, and super knowledgeable. She makes tech feel less intimidating!.",
    avatar: "/rup.jpg"
  },
  {
    id: 9,
    name: "Rahul  walia",
    role: "Btech IT UG",
    content: "Absolutely thrilled with the results! The journey was smooth from start to finish, and the final outcome exceeded my expectations. Working with Palak was a game-changer — her creativity, professionalism, and attention to detail truly stood out.",
    avatar: "/rah.jpg"
  },
  {
    id: 10,
    name: " Mansi Singh",
    role: "Btech ECE UG",
    content: "Working with Palak was such a smooth experience. Her ability to balance creativity with technical logic is rare. She doesn’t just contribute—she uplifts the entire project",
    avatar: "https://www.shutterstock.com/image-vector/user-icon-vector-female-person-260nw-770781427.jpg"
  },
  
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-white" aria-label="Client testimonials">
      <div className="section-container">
        <h2 className="section-title text-center mb-2">
          <span className="relative inline-block">
            Testimonials  ❤️
            {/* <span className="absolute -top-6 -right-6 text-portfolio-primary">
             
            </span> */}
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Here&apos;s what people say about working with me.
        </p>
        
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              role="list"
              aria-live="polite"
              aria-atomic="false"
            >
              {testimonialsData.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                  role="listitem"
                  aria-label={`Testimonial ${index + 1} of ${testimonialsData.length}`}
                  aria-hidden={index !== activeIndex}
                  tabIndex={index === activeIndex ? 0 : -1}
                >
                  <Card 
                    className="bg-gray-50 border-none shadow-md"
                    aria-labelledby={`testimonial-${testimonial.id}-name`}
                    aria-describedby={`testimonial-${testimonial.id}-role testimonial-${testimonial.id}-content`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className="absolute -top-1 -left-1 bg-portfolio-primary rounded-full p-1">
                            <MessageSquare size={12} className="text-white" />
                          </div>
                          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white bg-white flex items-center justify-center">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 id={`testimonial-${testimonial.id}-name`} className="font-bold text-lg">{testimonial.name}</h4>
                          <p id={`testimonial-${testimonial.id}-role`} className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote className="italic text-gray-600 border-l-4 border-portfolio-primary pl-4 py-2 mb-2">
                        <p id={`testimonial-${testimonial.id}-content`} className="text-gray-700 italic">"{testimonial.content}"</p>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative mt-6">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white shadow-md hover:bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              &larr;
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white shadow-md hover:bg-gray-50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              &rarr;
            </Button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-portfolio-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
