import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl animate-float">🎈</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                BalloonCraft
              </h1>
              <p className="text-sm text-gray-600">Конструктор сайтов для аэродизайнеров</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Icon name="User" size={16} />
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 gap-2">
              <Icon name="Rocket" size={16} />
              Начать создавать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;