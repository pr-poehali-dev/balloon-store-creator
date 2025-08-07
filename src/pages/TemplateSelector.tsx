import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: string;
  features: string[];
  price: 'free' | 'premium';
  popularity: number;
}

const TemplateSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Все шаблоны', icon: 'Layout' },
    { id: 'business', name: 'Для бизнеса', icon: 'Building2' },
    { id: 'portfolio', name: 'Портфолио', icon: 'User' },
    { id: 'shop', name: 'Интернет-магазин', icon: 'ShoppingCart' },
    { id: 'blog', name: 'Блог', icon: 'FileText' },
    { id: 'landing', name: 'Лендинг', icon: 'Zap' }
  ];

  const templates: Template[] = [
    {
      id: 'balloon-dreams',
      name: 'Balloon Dreams',
      description: 'Волшебный сайт для студии воздушных шаров с яркими цветами и анимациями',
      preview: '🎈',
      category: 'business',
      features: ['Галерея работ', 'Форма заказа', 'Калькулятор цены', 'Instagram интеграция'],
      price: 'free',
      popularity: 98
    },
    {
      id: 'party-magic',
      name: 'Party Magic',
      description: 'Элегантный дизайн для премиум-студии праздничного декора',
      preview: '✨',
      category: 'business',
      features: ['Премиум дизайн', 'Бронирование онлайн', 'CRM система', '3D галерея'],
      price: 'premium',
      popularity: 92
    },
    {
      id: 'creative-balloons',
      name: 'Creative Balloons',
      description: 'Креативное портфолио с акцентом на уникальные композиции',
      preview: '🎨',
      category: 'portfolio',
      features: ['Фото галерея', 'Видео презентации', 'Отзывы клиентов', 'Соц. сети'],
      price: 'free',
      popularity: 85
    },
    {
      id: 'balloon-shop',
      name: 'Balloon Shop',
      description: 'Готовый интернет-магазин воздушных шаров с корзиной и оплатой',
      preview: '🛒',
      category: 'shop',
      features: ['Корзина покупок', 'Онлайн оплата', 'Доставка', 'Управление товарами'],
      price: 'premium',
      popularity: 89
    },
    {
      id: 'balloon-blog',
      name: 'Balloon Blog',
      description: 'Стильный блог о декоре и праздниках с советами экспертов',
      preview: '📝',
      category: 'blog',
      features: ['Система блога', 'Комментарии', 'SEO оптимизация', 'Подписки'],
      price: 'free',
      popularity: 76
    },
    {
      id: 'party-landing',
      name: 'Party Landing',
      description: 'Эффективный лендинг для привлечения клиентов и генерации заявок',
      preview: '🎯',
      category: 'landing',
      features: ['Форма заявки', 'Таймер акций', 'Отзывы', 'Калькулятор'],
      price: 'free',
      popularity: 94
    }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleCreateSite = () => {
    if (selectedTemplate) {
      console.log('Creating site with template:', selectedTemplate);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-6">
            <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2">
              🎨 Выберите дизайн своей мечты
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Шаблоны сайтов
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Профессиональные готовые дизайны для студий воздушных шаров. Выберите подходящий и начните создавать свой сайт прямо сейчас!
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`gap-2 ${
                selectedCategory === category.id 
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white" 
                  : "border-pink-300 hover:bg-pink-50"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <Icon name={category.icon} size={16} />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredTemplates.map((template) => (
            <Card 
              key={template.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                selectedTemplate === template.id 
                  ? "ring-4 ring-pink-400 bg-pink-50" 
                  : "bg-white/70 backdrop-blur-sm border-pink-200"
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <CardContent className="p-6">
                {/* Preview */}
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg h-48 flex items-center justify-center mb-6 text-6xl">
                  {template.preview}
                </div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900">{template.name}</h3>
                  <div className="flex items-center gap-2">
                    {template.price === 'premium' ? (
                      <Badge className="bg-yellow-100 text-yellow-700">Premium</Badge>
                    ) : (
                      <Badge className="bg-green-100 text-green-700">Free</Badge>
                    )}
                    <div className="flex items-center gap-1">
                      <Icon name="Heart" className="text-pink-500" size={14} />
                      <span className="text-sm text-gray-600">{template.popularity}%</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{template.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon name="Check" className="text-green-600" size={14} />
                      {feature}
                    </div>
                  ))}
                  {template.features.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{template.features.length - 3} дополнительных функций
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Button */}
        {selectedTemplate && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <Card className="bg-white shadow-2xl border-pink-200">
              <CardContent className="p-6 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    {templates.find(t => t.id === selectedTemplate)?.preview}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {templates.find(t => t.id === selectedTemplate)?.name}
                    </h4>
                    <p className="text-sm text-gray-600">Шаблон выбран</p>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 gap-3"
                  onClick={handleCreateSite}
                >
                  <Icon name="Sparkles" size={20} />
                  Создать сайт
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TemplateSelector;