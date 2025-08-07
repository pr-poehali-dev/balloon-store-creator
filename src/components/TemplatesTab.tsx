import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TemplatesTab = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    { 
      id: 1, 
      name: 'Праздничное облако', 
      category: 'Для неё',
      price: '15,990₽',
      image: '🎈',
      color: 'bg-gradient-to-br from-pink-400 to-purple-500',
      description: 'Нежные пастельные шары для романтических моментов'
    },
    { 
      id: 2, 
      name: 'Мужской стиль', 
      category: 'Для него',
      price: '12,890₽', 
      image: '🎯',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      description: 'Стильные композиции в мужском дизайне'
    },
    { 
      id: 3, 
      name: 'Выписка принцессы', 
      category: 'На выписку',
      price: '18,500₽',
      image: '👑',
      color: 'bg-gradient-to-br from-pink-300 to-pink-500',
      description: 'Торжественное оформление для важного дня'
    },
    { 
      id: 4, 
      name: 'Первый годик', 
      category: 'На годик',
      price: '22,300₽',
      image: '🎂',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      description: 'Яркое празднование первого дня рождения'
    },
    { 
      id: 5, 
      name: 'Для принцессы', 
      category: 'Для девочки',
      price: '9,990₽',
      image: '🦄',
      color: 'bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400',
      description: 'Волшебные шары для маленьких принцесс'
    },
    { 
      id: 6, 
      name: 'Супергерой', 
      category: 'Для мальчика',
      price: '11,200₽',
      image: '⚡',
      color: 'bg-gradient-to-br from-red-500 to-blue-600',
      description: 'Героические композиции для будущих супергероев'
    },
    { 
      id: 7, 
      name: 'Фотозона мечты', 
      category: 'Фотозоны',
      price: '45,000₽',
      image: '📸',
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400',
      description: 'Профессиональное оформление фотозоны'
    },
    { 
      id: 8, 
      name: 'Минимал стиль', 
      category: 'Для него',
      price: '8,500₽',
      image: '⭐',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
      description: 'Сдержанная элегантность в каждом шаре'
    },
    { 
      id: 9, 
      name: 'Радужное счастье', 
      category: 'Фотозоны',
      price: '32,000₽',
      image: '🌈',
      color: 'bg-gradient-to-br from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400',
      description: 'Яркая радужная композиция для незабываемых фото'
    },
    { 
      id: 10, 
      name: 'Золотая классика', 
      category: 'Для неё',
      price: '28,900₽',
      image: '✨',
      color: 'bg-gradient-to-br from-yellow-300 to-yellow-600',
      description: 'Роскошные золотые шары для особых случаев'
    }
  ];

  const categories = ['all', 'Для неё', 'Для него', 'На выписку', 'На годик', 'Для девочки', 'Для мальчика', 'Фотозоны'];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          10 готовых шаблонов интернет-магазинов
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Профессиональные дизайны для каждой категории воздушных шаров 🎈
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
          {categories.map(category => (
            <Button 
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" 
                : "border-pink-300 hover:bg-pink-50"
              }
            >
              {category === 'all' ? 'Все категории' : category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden">
            <div className={`h-32 ${template.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform`}>
              {template.image}
            </div>
            <CardContent className="p-4">
              <Badge className="mb-2 bg-pink-100 text-pink-700 hover:bg-pink-200">
                {template.category}
              </Badge>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-pink-600">{template.price}</span>
                <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                  Выбрать
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TemplatesTab;