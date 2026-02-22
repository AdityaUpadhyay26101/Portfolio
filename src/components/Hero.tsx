export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Aditya Upadhyay
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-teal-50">
          Pre-Final Year Student
        </p>
        <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
          Computer Science Engineering Student at Govt. Engineering College Bharatpur
        </p>
        <div className="mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('about');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all transform hover:scale-105"
          >
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
}
