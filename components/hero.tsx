import { VFilmsLogo } from "./v-logo"

export default function Hero() {
  return (
    <section className="min-h-screen bg-background pt-24 md:pt-32 pb-12 md:pb-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* V Films Logo - Main */}
              <div className="absolute inset-0 flex items-center justify-center animate-float-up group-hover:animate-pulse">
                <div className="w-48 h-48 md:w-64 md:h-64 hover:scale-110 transition-transform duration-500">
                  <VFilmsLogo size={256} />
                </div>
              </div>

              {/* Decorative glow ring around logo */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-rotate-center opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="absolute inset-4 rounded-full border border-accent/10 animate-rotate-center"
                style={{ animationDirection: "reverse", animationDuration: "25s" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-right animate-slide-in-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary italic bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent mb-6">
              Varnan
            </h1>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-6 italic">
              is where stories find their voice and form
            </h1>
            <p className="text-xl md:text-2xl text-accent font-light mb-8 animate-pulse">Films . Brands . Art</p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-lg mx-auto md:mx-0 md:ml-auto">
              Since 2009, V've been telling stories - stories of people, their journeys, and the places that shape them.
              Some begin in polished boardrooms, others in humble village squares. But every story starts the same way -
              by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture
              what truly matters. V doesn't just tell stories - V honors them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
