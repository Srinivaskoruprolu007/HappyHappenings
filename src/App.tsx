import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { EventCarousel } from './components/events/EventCarousel';
import { YouTubeEmbed } from './components/events/YouTubeEmbed';
import { FadeIn } from './components/ui/FadeIn';
import { events } from './data/events';
import MainMember from './components/team/Main_member';
import mainMemberProps from './components/team/TeamData';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main className="flex-grow">
                {/* Hero Section */}
                <section
                  id="hero"
                  className="relative overflow-hidden bg-primary dark:bg-primary-dark py-20 md:py-32 dark:bg-slate-700"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 dark:from-secondary-dark/20 dark:to-accent-dark/20" />
                  <div className="container mx-auto px-4 relative ">
                    <FadeIn>
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-center ">
                        Experience the Magic of Live Music
                      </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <p className="text-xl text-white/80 mb-8 text-center max-w-2xl mx-auto">
                        Discover upcoming concerts and secure your tickets today!
                      </p>
                    </FadeIn>
                  </div>
                </section>

                {/* Featured Events */}
                <section
                  id="events"
                  className="py-20 bg-background dark:bg-background-dark"
                >
                  <div className="container mx-auto">
                    <FadeIn>
                      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                        Upcoming Events
                      </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <EventCarousel events={events} />
                    </FadeIn>
                  </div>
                </section>

                {/* Featured Videos */}
                <section id="videos" className="py-20 bg-card dark:bg-card-dark">
                  <div className="container mx-auto px-4">
                    <FadeIn>
                      <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                        Featured Performances
                      </h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {events.map((event, index) => (
                        <FadeIn key={event.id} delay={index * 0.1}>
                          <div className="space-y-4">
                            <YouTubeEmbed
                              videoId={event.videoId}
                              title={event.title}
                            />
                            <h3 className="text-xl font-bold text-foreground">
                              {event.title}
                            </h3>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section
                  id="about"
                  className="py-20 bg-background dark:bg-background-dark"
                >
                  <div className="container mx-auto px-4">
                    <FadeIn>
                      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                        About Us
                      </h2>
                      <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-muted-foreground dark:text-muted-dark">
                          HappyHappening brings you the most exciting music events
                          and concerts. We curate unforgettable experiences that
                          connect artists with their fans in spectacular venues
                          across the city.
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 bg-card dark:bg-card-dark">
                  <div className="container mx-auto px-4">
                    <FadeIn>
                      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                        Contact Us
                      </h2>
                      <div className="max-w-xl mx-auto text-center">
                        <p className="text-lg text-muted-foreground dark:text-muted-dark mb-4">
                          Have questions? We'd love to hear from you!
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          Email: contact@happyhappening.com
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          Phone: (555) 123-4567
                        </p>
                      </div>
                    </FadeIn>
                  </div>
                </section>
              </main>
            }
          />

          {/* Team Page */}
          <Route path="/team" element={<MainMember {...mainMemberProps} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
