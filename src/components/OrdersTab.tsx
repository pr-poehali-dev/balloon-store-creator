import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const OrdersTab = () => {
  const orders = [
    { id: '#2847', customer: 'Анна Петрова', product: 'Шары на выписку', amount: '18,500₽', status: 'new', time: '5 мин назад' },
    { id: '#2846', customer: 'Иван Сидоров', product: 'Фотозона мечты', amount: '45,000₽', status: 'paid', time: '1 час назад' },
    { id: '#2845', customer: 'Мария Козлова', product: 'Для принцессы', amount: '9,990₽', status: 'shipped', time: '3 часа назад' },
    { id: '#2844', customer: 'Петр Иванов', product: 'Супергерой', amount: '11,200₽', status: 'completed', time: '1 день назад' }
  ];

  return (
    <>
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
                {orders.map((order, index) => (
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
    </>
  );
};

export default OrdersTab;