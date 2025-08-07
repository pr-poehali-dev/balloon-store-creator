import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const stats = [
    { label: 'Активных сайтов', value: '2,847', icon: 'Globe', color: 'text-blue-600' },
    { label: 'Заказов в месяц', value: '15,239', icon: 'ShoppingCart', color: 'text-green-600' },
    { label: 'Довольных клиентов', value: '98.7%', icon: 'Heart', color: 'text-pink-600' },
    { label: 'Среднее время создания', value: '15 мин', icon: 'Clock', color: 'text-purple-600' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="inline-block p-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2">
            ✨ Создай сайт мечты за 15 минут
          </Badge>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
          Твоя студия воздушных шаров в интернете
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Профессиональные шаблоны, простой конструктор и все инструменты для успешного бизнеса. 
          От идеи до первого заказа за один день! 🎯
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg gap-3">
            <Icon name="Sparkles" size={20} />
            Создать сайт бесплатно
          </Button>
          <Button size="lg" variant="outline" className="border-pink-300 hover:bg-pink-50 px-8 py-4 text-lg gap-3">
            <Icon name="Play" size={20} />
            Смотреть демо
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6 text-center">
                <Icon name={stat.icon} className={`mx-auto mb-3 ${stat.color}`} size={32} />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;