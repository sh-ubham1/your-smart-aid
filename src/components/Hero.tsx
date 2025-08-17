import { Button } from "@/components/ui/button";
import { Mic, MessageSquare, Sparkles } from "lucide-react";
import heroImage from "@/assets/ai-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full float-animation opacity-60" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full float-animation opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-32 w-1 h-1 bg-primary-glow rounded-full float-animation opacity-80" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Your Intelligent
          <br />
          <span className="ai-gradient bg-clip-text text-transparent">Virtual Assistant</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the future of productivity with our AI-powered assistant. Set reminders, 
          manage schedules, answer queries, and more through natural voice commands or text.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="ai" size="lg" className="group">
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Start Conversation
          </Button>
          <Button variant="glass" size="lg" className="group">
            <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Voice Command
          </Button>
        </div>
        
        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: MessageSquare, title: "Natural Conversations", desc: "Chat naturally with advanced NLP" },
            { icon: Mic, title: "Voice Commands", desc: "Hands-free interaction with voice" },
            { icon: Sparkles, title: "Continuous Learning", desc: "Gets smarter with every interaction" }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;