import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const CabinetTab = () => {
  const features = [
    { 
      title: 'Автоматические логотипы', 
      desc: 'Загрузи логотип один раз - он появится на всех фото каталога', 
      icon: 'Stamp',
      color: 'from-yellow-400 to-yellow-600',
      details: 'PNG, JPG до 5МБ'
    },
    { 
      title: 'Смена цветовой схемы', 
      desc: 'Настрой фирменные цвета сайта в несколько кликов', 
      icon: 'Palette',
      color: 'from-pink-400 to-pink-600',
      details: 'Готовые палитры'
    },
    { 
      title: 'Управление каталогом', 
      desc: 'Добавляй разделы, товары, меняй цены и описания легко', 
      icon: 'Grid3X3',
      color: 'from-blue-400 to-blue-600',
      details: 'Drag & Drop'
    }
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Личный кабинет клиентов
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Простой интерфейс для управления сайтом без знания программирования 👨‍💻
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="Brush" className="text-pink-600" size={24} />
              Визуальный редактор
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">Изменяй сайт прямо на странице - кликни и редактируй!</p>
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Type" size={16} className="text-pink-600" />
                  <span className="text-sm font-medium">Редактирование текста</span>
                </div>
                <Input placeholder="Заголовок сайта..." className="mb-2" />
                <Textarea placeholder="Описание услуг..." rows={3} />
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                  Применить
                </Button>
                <Button size="sm" variant="outline">
                  Отменить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="Upload" className="text-purple-600" size={24} />
              Загрузка товаров
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">Добавляй товары по одному или загружай каталог файлом</p>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-green-300 hover:bg-green-50 flex flex-col gap-2 h-20">
                  <Icon name="Plus" size={20} />
                  <span className="text-xs">По одному</span>
                </Button>
                <Button variant="outline" className="border-blue-300 hover:bg-blue-50 flex flex-col gap-2 h-20">
                  <Icon name="FileSpreadsheet" size={20} />
                  <span className="text-xs">Excel файл</span>
                </Button>
              </div>
              <Button variant="outline" className="w-full border-purple-300 hover:bg-purple-50">
                <Icon name="Code" size={16} />
                YML выгрузка
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 group hover:scale-105">
            <CardContent className="pt-6 text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <Icon name={feature.icon} className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{feature.desc}</p>
              <Badge variant="outline" className="text-xs">
                {feature.details}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CabinetTab;