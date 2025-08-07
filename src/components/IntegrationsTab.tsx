import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const IntegrationsTab = () => {
  const integrations = [
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
  ];

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Интеграции и автоматизация
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Подключай сервисы доставки, оплаты и уведомлений одним кликом 🔗
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((integration, index) => (
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
    </>
  );
};

export default IntegrationsTab;