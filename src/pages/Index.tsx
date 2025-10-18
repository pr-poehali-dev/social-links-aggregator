import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const socialLinks = [
  {
    name: "Instagram",
    icon: "Instagram",
    url: "https://instagram.com",
    color: "from-purple-600 to-pink-500"
  },
  {
    name: "Telegram",
    icon: "Send",
    url: "https://telegram.org",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "VK",
    icon: "MessageCircle",
    url: "https://vk.com",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "YouTube",
    icon: "Youtube",
    url: "https://youtube.com",
    color: "from-red-600 to-red-700"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="p-8 backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl">
          <div className="flex flex-col items-center mb-8 animate-scale-in">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20 shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/2af83a49-802f-49a7-8d97-67be2d173719/files/af4806d9-207f-4bfb-ac02-2a9c7e005c03.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ваше Имя
            </h1>
            <p className="text-muted-foreground text-sm">
              Добро пожаловать в мои соцсети
            </p>
          </div>

          <div className="space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`
                  relative overflow-hidden rounded-lg p-4 
                  bg-gradient-to-r ${social.color}
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-xl hover:shadow-primary/20
                  active:scale-95
                `}>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon name={social.icon} size={20} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg flex-1">
                      {social.name}
                    </span>
                    <Icon 
                      name="ChevronRight" 
                      size={20} 
                      className="text-white/70 group-hover:translate-x-1 transition-transform" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              Создано с помощью{" "}
              <span className="text-primary font-semibold">poehali.dev</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
