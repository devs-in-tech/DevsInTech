import TestimonialCarousel from "./testimonial";

function App() {
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero metus. Quisque interdum arcu quis molestie interdum. In hac habitasse platea dictumst.",
      name: "John Doe",
      image:
        "",
    },
    {
      testimonial:
        "Pellentesque sit amet semper erat. Nulla non feugiat mauris. Duis auctor mauris vel efficitur blandit. Donec faucibus tellus vitae justo venenatis rhoncus. Morbi nec tellus nec mi suscipit suscipit ac quis lacus.",
      name: "Jane Doe",
      image:
        "",
    },
    {
      testimonial:
        "Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Maecenas sit amet ex bibendum, suscipit mauris non, hendrerit nulla. Nunc congue velit non velit hendrerit, vel efficitur augue vehicula.",
      name: "Bob Smith",
      image:
        "",
    },
    {
      testimonial:
        "Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Maecenas sit amet ex bibendum, suscipit mauris non, hendrerit nulla. Nunc congue velit non velit hendrerit, vel efficitur augue vehicula.",
      name: "Bob Smith",
      image:
        "",
    },
    {
      testimonial:
        "Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Maecenas sit amet ex bibendum, suscipit mauris non, hendrerit nulla. Nunc congue velit non velit hendrerit, vel efficitur augue vehicula.",
      name: "Bob Smith",
      image:
        "",
    },
    {
      testimonial:
        "Suspendisse potenti. Nulla facilisi. Aliquam erat volutpat. Maecenas sit amet ex bibendum, suscipit mauris non, hendrerit nulla. Nunc congue velit non velit hendrerit, vel efficitur augue vehicula.",
      name: "Bob Smith",
      image:
        "",
    },
  ];

  return (
    <div className="App">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

export default App;
