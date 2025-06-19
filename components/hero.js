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
          <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-xl mb-4"  style={{ fontFamily: 'var(--font-bebas)' }}>
          Tame the Road. Own the Ride
          </h1>
          <p className='font-bold text-5xl'  style={{ fontFamily: 'var(--font-bebas)' }}>Why waiting, let's ride</p>
          <button onClick={handleClick} className='cursor-pointer border-2 text-2xl my-4 border-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform p-3 rounded-md'  style={{ fontFamily: 'var(--font-bebas)' }}>WhatsApp</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;