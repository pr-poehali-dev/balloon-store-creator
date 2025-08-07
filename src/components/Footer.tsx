import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎈</div>
              <h3 className="text-xl font-bold">BalloonCraft</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Платформа для создания сайтов студий воздушных шаров. 
              Красиво, быстро, профессионально.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Конструктор</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Шаблоны</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Чат поддержки</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                hello@ballooncraft.ru
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, Россия
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 BalloonCraft. Все права защищены. Сделано с ❤️ для аэродизайнеров</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;