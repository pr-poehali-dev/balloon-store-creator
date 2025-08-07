import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTemplate, setActiveTemplate] = useState(null);
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

  const stats = [
    { label: 'Активных сайтов', value: '2,847', icon: 'Globe', color: 'text-blue-600' },
    { label: 'Заказов в месяц', value: '15,239', icon: 'ShoppingCart', color: 'text-green-600' },
    { label: 'Довольных клиентов', value: '98.7%', icon: 'Heart', color: 'text-pink-600' },
    { label: 'Среднее время создания', value: '15 мин', icon: 'Clock', color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Platform Sections */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-12 bg-white/60 backdrop-blur-sm border border-pink-200">
              <TabsTrigger value="constructor" className="gap-2">
                <Icon name="Wrench" size={16} />
                <span className="hidden md:inline">Конструктор</span>
              </TabsTrigger>
              <TabsTrigger value="templates" className="gap-2">
                <Icon name="Layout" size={16} />
                <span className="hidden md:inline">Шаблоны</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="gap-2">
                <Icon name="Settings" size={16} />
                <span className="hidden md:inline">Панель</span>
              </TabsTrigger>
              <TabsTrigger value="integrations" className="gap-2">
                <Icon name="Plug" size={16} />
                <span className="hidden md:inline">Интеграции</span>
              </TabsTrigger>
              <TabsTrigger value="orders" className="gap-2">
                <Icon name="Package" size={16} />
                <span className="hidden md:inline">Заказы</span>
              </TabsTrigger>
              <TabsTrigger value="cabinet" className="gap-2">
                <Icon name="User" size={16} />
                <span className="hidden md:inline">Кабинет</span>
              </TabsTrigger>
            </TabsList>

            {/* Constructor Tab */}
            <TabsContent value="constructor">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Простой конструктор сайтов
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Перетаскивай блоки, меняй цвета, добавляй контент - всё как в конструкторе LEGO! 🧩
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Drag & Drop редактор', desc: 'Перетаскивай элементы мышкой', icon: 'MousePointer', color: 'from-blue-400 to-blue-600' },
                  { title: 'Готовые блоки', desc: 'Каталоги, галереи, формы заказа', icon: 'Blocks', color: 'from-green-400 to-green-600' },
                  { title: 'Адаптивный дизайн', desc: 'Красиво на телефоне и компьютере', icon: 'Smartphone', color: 'from-purple-400 to-purple-600' },
                  { title: 'Смена цветов', desc: 'Настрой фирменные цвета одним кликом', icon: 'Palette', color: 'from-pink-400 to-pink-600' },
                  { title: 'SEO оптимизация', desc: 'Автоматическая настройка для поисковиков', icon: 'Search', color: 'from-yellow-400 to-yellow-600' },
                  { title: 'Быстрая загрузка', desc: 'Сайт грузится мгновенно', icon: 'Zap', color: 'from-red-400 to-red-600' }
                ].map((feature, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon name={feature.icon} className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Templates Tab */}
            <TabsContent value="templates">
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
            </TabsContent>

            {/* Admin Panel Tab */}
            <TabsContent value="admin">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Панель администратора
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Полный контроль над сайтом и заказами в одном месте 📊
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="BarChart3" className="text-pink-600" size={24} />
                      Аналитика продаж
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Заказы за месяц</span>
                        <Badge className="bg-green-100 text-green-700">+23% ↗</Badge>
                      </div>
                      <div className="w-full bg-pink-100 rounded-full h-3">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full" style={{width: '73%'}}></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">847</div>
                          <div className="text-xs text-gray-600">Заказов</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">2.1M</div>
                          <div className="text-xs text-gray-600">Выручка</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">4.8</div>
                          <div className="text-xs text-gray-600">Рейтинг</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon name="ShoppingBag" className="text-purple-600" size={24} />
                      Управление каталогом
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600">
                          <Icon name="Plus" size={16} />
                          Добавить товар
                        </Button>
                        <Button size="sm" variant="outline" className="border-pink-300">
                          <Icon name="Upload" size={16} />
                          Excel
                        </Button>
                      </div>
                      <div className="space-y-2">
                        {['Шары для девочек', 'Фотозоны', 'На выписку'].map((cat, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                            <span className="text-sm font-medium">{cat}</span>
                            <Badge variant="outline">{Math.floor(Math.random() * 50) + 10} товаров</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Быстрое добавление товаров', desc: 'Загрузка по одному или файлом Excel/YML', icon: 'Upload', color: 'from-blue-400 to-blue-600' },
                  { title: 'Автологотипы на фото', desc: 'Логотип автоматически на все фото каталога', icon: 'Image', color: 'from-green-400 to-green-600' },
                  { title: 'Управление заказами', desc: 'Статусы, уведомления, история платежей', icon: 'ClipboardList', color: 'from-purple-400 to-purple-600' }
                ].map((feature, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                    <CardContent className="pt-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                        <Icon name={feature.icon} className="text-white" size={28} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Integrations Tab */}
            <TabsContent value="integrations">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Интеграции и автоматизация
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Подключай сервисы доставки, оплаты и уведомлений одним кликом 🔗
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    name: 'Почта России', 
                    desc: 'Автоматический расчет доставки', 
                    icon: '📮', 
                    status: 'available',
                    color: 'from-blue-500 to-blue-700'
                  },
                  { 
                    name: 'СДЭК', 
                    desc: 'Быстрая доставка по всей России', 
                    icon: '📦', 
                    status: 'available',
                    color: 'from-green-500 to-green-700'
                  },
                  { 
                    name: 'ЮKassa', 
                    desc: 'Прием платежей картами', 
                    icon: '💳', 
                    status: 'available',
                    color: 'from-purple-500 to-purple-700'
                  },
                  { 
                    name: 'Telegram Bot', 
                    desc: 'Уведомления о заказах в чат', 
                    icon: '🤖', 
                    status: 'available',
                    color: 'from-cyan-500 to-cyan-700'
                  },
                  { 
                    name: 'WhatsApp', 
                    desc: 'Связь с клиентами через мессенджер', 
                    icon: '💬', 
                    status: 'coming',
                    color: 'from-green-400 to-green-600'
                  },
                  { 
                    name: '1С Бухгалтерия', 
                    desc: 'Синхронизация с учетной системой', 
                    icon: '📊', 
                    status: 'coming',
                    color: 'from-orange-500 to-orange-700'
                  },
                  { 
                    name: 'Яндекс.Маркет', 
                    desc: 'Размещение товаров на маркетплейсе', 
                    icon: '🛒', 
                    status: 'coming',
                    color: 'from-red-500 to-red-700'
                  },
                  { 
                    name: 'Google Analytics', 
                    desc: 'Подробная аналитика посетителей', 
                    icon: '📈', 
                    status: 'available',
                    color: 'from-indigo-500 to-indigo-700'
                  }
                ].map((integration, index) => (
                  <Card key={index} className="bg-white/70 backdrop-blur-sm border-pink-200 hover:shadow-lg transition-all duration-300 group hover:scale-105">
                    <CardContent className="pt-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mb-4 mx-auto text-2xl group-hover:scale-110 transition-transform`}>
                        {integration.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">{integration.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{integration.desc}</p>
                      <Badge className={integration.status === 'available' 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                      }>
                        {integration.status === 'available' ? 'Доступно' : 'Скоро'}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <CardContent className="pt-8 text-center">
                  <Icon name="Zap" className="mx-auto mb-4 text-white" size={48} />
                  <h3 className="text-2xl font-bold mb-4">Настройка за 5 минут</h3>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Мы настроим все интеграции автоматически. Просто введи данные от сервисов и всё заработает!
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Система учёта заказов
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Автоматический учёт, уведомления в Telegram и полная история операций 📋
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Icon name="ShoppingCart" className="text-pink-600" size={24} />
                          Последние заказы
                        </span>
                        <Badge className="bg-green-100 text-green-700">5 новых</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { id: '#2847', customer: 'Анна Петрова', product: 'Шары на выписку', amount: '18,500₽', status: 'new', time: '5 мин назад' },
                          { id: '#2846', customer: 'Иван Сидоров', product: 'Фотозона мечты', amount: '45,000₽', status: 'paid', time: '1 час назад' },
                          { id: '#2845', customer: 'Мария Козлова', product: 'Для принцессы', amount: '9,990₽', status: 'shipped', time: '3 часа назад' },
                          { id: '#2844', customer: 'Петр Иванов', product: 'Супергерой', amount: '11,200₽', status: 'completed', time: '1 день назад' }
                        ].map((order, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="text-lg">
                                {order.status === 'new' && '🆕'}
                                {order.status === 'paid' && '💳'}
                                {order.status === 'shipped' && '📦'}
                                {order.status === 'completed' && '✅'}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">{order.id} - {order.customer}</div>
                                <div className="text-sm text-gray-600">{order.product} • {order.time}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-lg text-gray-900">{order.amount}</div>
                              <Badge variant="outline" className={
                                order.status === 'new' ? 'border-blue-300 text-blue-700' :
                                order.status === 'paid' ? 'border-green-300 text-green-700' :
                                order.status === 'shipped' ? 'border-orange-300 text-orange-700' :
                                'border-gray-300 text-gray-700'
                              }>
                                {order.status === 'new' && 'Новый'}
                                {order.status === 'paid' && 'Оплачен'}
                                {order.status === 'shipped' && 'Отправлен'}
                                {order.status === 'completed' && 'Выполнен'}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon name="Send" className="text-blue-600" size={20} />
                        Telegram уведомления
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm">Бот подключён</span>
                        </div>
                        <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
                          🤖 @ballooncraft_bot<br/>
                          Последнее уведомление: 5 мин назад
                        </div>
                        <Button size="sm" variant="outline" className="w-full border-blue-300 hover:bg-blue-50">
                          <Icon name="Settings" size={16} />
                          Настроить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-sm border-pink-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon name="TrendingUp" className="text-green-600" size={20} />
                        Статистика за месяц
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Всего заказов</span>
                          <span className="font-semibold">847</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Выручка</span>
                          <span className="font-semibold text-green-600">2,147,590₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Средний чек</span>
                          <span className="font-semibold">25,369₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Конверсия</span>
                          <span className="font-semibold text-blue-600">12.4%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Cabinet Tab */}
            <TabsContent value="cabinet">
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
                {[
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
                ].map((feature, index) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;