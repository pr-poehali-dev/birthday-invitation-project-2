import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/30 font-body">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        <header className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/7c9f8490-8c13-4d68-8a17-628382e9d6bb/files/141f9b03-51e2-4efa-b116-830dc393a3e7.jpg"
              alt="Birthday celebration"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl animate-bounce-in"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4 drop-shadow-lg">
            День Рождения Вички! 🎉
          </h1>
          
          <div className="flex justify-center gap-3 flex-wrap mb-6">
            <Badge className="text-xl px-6 py-2 bg-primary text-primary-foreground">
              20 годиков 🎂
            </Badge>
            <Badge className="text-xl px-6 py-2 bg-secondary text-secondary-foreground">
              24 ноября 2025
            </Badge>
          </div>
          
          <p className="text-2xl md:text-3xl font-heading text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Мои любимые бабуинчики! Приглашаю на унылое мероприятие 😄
          </p>
        </header>

        <div className="grid gap-8 mb-8">
          <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Icon name="PartyPopper" size={32} className="text-primary" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Детали мероприятия
              </h2>
            </div>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <Icon name="Calendar" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Когда:</p>
                  <p className="text-muted-foreground">24 ноября 2025 года</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Где:</p>
                  <p className="text-muted-foreground">Восстание 40</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon name="Sparkles" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Что вас ждёт:</p>
                  <p className="text-muted-foreground">Незабываемые впечатления, море положительных эмоций и моих слёз 😭✨</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-secondary/20 p-4 rounded-full">
                <Icon name="List" size={32} className="text-secondary-foreground" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Программа праздника
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Сбор гостей</h3>
                  <p className="text-muted-foreground">Приходите не стесняясь, обнимашки обязательны! 🤗</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="bg-gradient-to-br from-secondary to-secondary/70 text-secondary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Праздничный стол</h3>
                  <p className="text-muted-foreground">Вкусняшки, торт и всё что душе угодно 🍰🥳</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="bg-gradient-to-br from-accent to-accent/70 text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Веселье и игры</h3>
                  <p className="text-muted-foreground">Танцы, смех и незабываемые моменты 💃🎵</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="bg-gradient-to-br from-primary/80 to-primary/50 text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">Фотосессия</h3>
                  <p className="text-muted-foreground">Запечатлеем все эмоции на память 📸✨</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-accent/20 p-4 rounded-full">
                <Icon name="Navigation" size={32} className="text-accent-foreground" />
              </div>
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Как добраться
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Адрес:</span> Восстание 40
              </p>
              
              <div className="w-full h-80 bg-muted rounded-xl overflow-hidden shadow-inner">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=30.361737%2C59.929881&z=16&l=map&pt=30.361737,59.929881,pm2rdm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-xl"
                  title="Карта проезда"
                />
              </div>
              
              <div className="flex items-center gap-3 bg-secondary/10 p-4 rounded-xl">
                <Icon name="Info" size={24} className="text-secondary-foreground flex-shrink-0" />
                <p className="text-muted-foreground">
                  Ближайшая станция метро: Площадь Восстания
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card className="p-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30">
            <p className="text-2xl md:text-3xl font-heading text-foreground mb-4">
              Жду вас всех с нетерпением! 💕
            </p>
            <p className="text-lg text-muted-foreground">
              Будет весело, обещаю! (ну или хотя бы не очень унылой 😄)
            </p>
          </Card>
        </div>

        <footer className="text-center text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>С любовью, Вичка 💖</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
