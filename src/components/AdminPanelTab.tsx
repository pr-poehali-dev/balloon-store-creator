import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AdminPanelTab = () => {
  return (
    <>
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
    </>
  );
};

export default AdminPanelTab;