import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CTASection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
      <div className="container mx-auto text-center text-white">
        <div className="text-6xl mb-6 animate-float">🚀</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Готов запустить свой интернет-магазин?
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Присоединяйся к 2,847 успешным аэродизайнерам, которые уже зарабатывают онлайн! 
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold gap-3">
            <Icon name="Sparkles" size={20} />
            Создать сайт бесплатно
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg gap-3">
            <Icon name="MessageCircle" size={20} />
            Получить консультацию
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-75">
          ✅ Бесплатный пробный period 14 дней • ✅ Техподдержка 24/7 • ✅ Без скрытых платежей
        </p>
      </div>
    </section>
  );
};

export default CTASection;