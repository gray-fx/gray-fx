import InfoPanel from "./InfoPanel";

const infoData = [
  {
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=800",
    title: "Gear",
    description: "I use a Nikon Z6ii for my photography work, ensuring professional quality in every shot.",
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800",
    title: "Booking",
    description: "I take free photos at St. Mark's events that I attend. For other events, you must book.",
  },
  {
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800",
    title: "Graphic Design",
    description: "To book a graphic, create a booking and select the 'Graphic' option.",
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
    title: "Questions",
    description: "Have questions? Feel free to DM me on Instagram or email me.",
  },
];

const InfoSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
          Information
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoData.map((info, index) => (
            <InfoPanel key={index} {...info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
