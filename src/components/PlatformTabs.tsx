import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import DragDropBuilder from '@/components/DragDropBuilder';
import TemplatesTab from '@/components/TemplatesTab';
import AdminPanelTab from '@/components/AdminPanelTab';
import IntegrationsTab from '@/components/IntegrationsTab';
import OrdersTab from '@/components/OrdersTab';
import CabinetTab from '@/components/CabinetTab';

const PlatformTabs = () => {
  return (
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

          <TabsContent value="constructor">
            <DragDropBuilder />
          </TabsContent>

          <TabsContent value="templates">
            <TemplatesTab />
          </TabsContent>

          <TabsContent value="admin">
            <AdminPanelTab />
          </TabsContent>

          <TabsContent value="integrations">
            <IntegrationsTab />
          </TabsContent>

          <TabsContent value="orders">
            <OrdersTab />
          </TabsContent>

          <TabsContent value="cabinet">
            <CabinetTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PlatformTabs;