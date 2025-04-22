'use client'

function Hero() {
  const handleClick = () => {
    const phoneNumber = '212649123993'; // Replace with your number
    const message = 'Hello! I want to chat with you.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // opens in new tab
  };
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Image with proper sizing and centering */}
      <img 
        src="/HeroImage.png" 
        alt="hero"  
        className="w-full h-full object-cover object-center"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      />
      
      {/* Centered header with semi-transparent backdrop for better readability */}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black/20">
        <div className="max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif text-white drop-shadow-xl mb-4">
            Be Fashionable
          </h1>
          <p className='font-serif font-bold text-xl'>Why waiting, increase your look with us</p>
          <button onClick={handleClick} className='cursor-pointer font-serif border-2 my-4 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform p-3 rounded-md'>WhatsApp</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;