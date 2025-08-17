import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mic, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(input),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string) => {
    const responses = [
      "I understand you'd like help with that. Let me assist you with setting up your request.",
      "That's a great question! I can help you manage your schedule and set reminders for important tasks.",
      "I'm here to make your daily tasks more efficient. Would you like me to create a reminder for this?",
      "Based on your request, I can help organize this information and provide you with relevant suggestions.",
      "I'm continuously learning from our interactions to provide you with more personalized assistance."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Simulate voice input toggle
    if (!isListening) {
      setTimeout(() => setIsListening(false), 3000);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience AI Conversation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try our interactive chat interface. Ask questions, set reminders, or just have a conversation.
          </p>
        </div>

        <Card className="ai-shadow bg-card/50 backdrop-blur-sm border-white/10">
          <div className="p-6">
            {/* Messages */}
            <div className="h-96 overflow-y-auto mb-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full ai-gradient flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="bg-background/50 border-white/20"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
              </div>
              <Button
                variant={isListening ? "voice" : "glass"}
                size="icon"
                onClick={toggleVoiceInput}
                className={isListening ? "voice-pulse" : ""}
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button variant="ai" size="icon" onClick={handleSendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {isListening && (
              <div className="mt-4 text-center">
                <p className="text-sm text-accent">🎤 Listening... Speak now</p>
              </div>
            )}
          </div>
        </Card>

        {/* Example Queries */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-4">Try these examples:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Set a reminder for tomorrow",
              "What's the weather like?",
              "Schedule a meeting",
              "Tell me a joke"
            ].map((example, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setInput(example)}
                className="text-xs"
              >
                "{example}"
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;