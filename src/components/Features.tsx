import { Card } from "@/components/ui/card";
import { Calendar, Clock, Brain, Mic2, MessageCircle, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      description: "Understands context and nuance in everyday conversation, making interactions feel natural and intuitive."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically manages your calendar, finds optimal meeting times, and sends intelligent reminders."
    },
    {
      icon: Clock,
      title: "Proactive Reminders",
      description: "Never miss important tasks with context-aware reminders that adapt to your routine and priorities."
    },
    {
      icon: Mic2,
      title: "Voice Commands",
      description: "Hands-free interaction with advanced speech recognition for seamless voice-controlled experiences."
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Adapts to your preferences and habits, becoming more personalized and accurate over time."
    },
    {
      icon: Settings,
      title: "Smart Automation",
      description: "Automates routine tasks and workflows, helping you focus on what matters most."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful AI Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced features designed to enhance your productivity and streamline your daily workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/30 backdrop-blur-sm border-white/10 hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl ai-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "99.9%", label: "Uptime" },
            { number: "< 200ms", label: "Response Time" },
            { number: "50+", label: "Languages" },
            { number: "24/7", label: "Availability" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold ai-gradient bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;